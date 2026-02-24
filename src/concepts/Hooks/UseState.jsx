import React, { useState } from 'react'
// import '../../usestate.css'
const UseState = () => {

  let [count, setCount] = useState(0)
  let [obj, setObj] = useState({name:"shivam"})
  // let count = 0;

  let setKaroObj = ()=>{
    // obj.name = 'rahul'
    // setObj(obj) 
    setObj(prev=>({...prev,name:'rahul'}))
  }
  
  console.log('rendering...')
  return (
    <div className='usestate'>
      <div>
        <details>
          <summary>What is Batching</summary>
          <p>multiple useState runs only one time with the help of batching.</p>
        </details>
        <h1>count +0 = {count}</h1>
        <h1>count +1 = {count}</h1>
        <h1>count +2 = {count}</h1>
        <h1>count +3 = {count}</h1>
        <p>If want to update count as given <br /> requirement then we can use <br /> prev{"=>"}prev+1,2,3 </p>
        <button onClick={() => {
          setCount(count + 1)
          setCount(count + 2)
          setCount(count + 3)
        }}>click me</button>

      </div>
      <div>
        <details>
          <summary>Change Refrence</summary>
          <p>You can't change dom directly</p>
        </details>
        <h1>obj = {obj.name}</h1>

        <button onClick={() => {
          setKaroObj()
        }}>click me</button>

      </div>
     

    </div>
  )
}

export default UseState