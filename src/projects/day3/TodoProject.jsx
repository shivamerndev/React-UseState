import React, { useEffect, useState } from 'react'
import AddTask from './AddTask';
import CardStats from './CardStats';
import TaskManager from './TaskManager';
import Header from './Header';

const TodoProject = () => {

  const [toggle, setToggle] = useState(false)
  const [timer, setTimer] = useState(0);
  const [render, setRender] = useState(1)
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  const formatTime = (seconds) => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
    const ss = String(seconds % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  };

  useEffect(() => {
    setRender(prev => prev + 1)
  }, [timer, tasks, toggle])


  return (
    <div id={toggle ? "light-theme" : 'dark-theme'} className=' min-h-screen pt-4 text-white '>
      <div className='w-10/11 mx-auto'>
        <Header tasks={tasks} setTasks={setTasks} setToggle={setToggle} toggle={toggle} render={render} />
        <div className='flex gap-8 justify-between w-full'>
          <div className='flex-1'>
            <CardStats toggle={toggle} timer={timer} time={formatTime} tasks={tasks} />
            <AddTask toggle={toggle} tasks={tasks} setTasks={setTasks} />
          </div>
          <TaskManager toggle={toggle} timer={timer} setTimer={setTimer} time={formatTime} setTasks={setTasks} tasks={tasks} />
        </div>
      </div>
    </div>
  )
}

export default TodoProject