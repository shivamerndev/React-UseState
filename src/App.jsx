import { Route, Routes } from 'react-router-dom'
import UseState from './concepts/Hooks/UseState'
import MapState from './concepts/Hooks/MapState'
import UseStateProject from './projects/UseStateProject'
import FormProject from './projects/FormProject'
import FormBinding from './concepts/Forms/FormBinding'
import HandleForm from "./concepts/Forms/HandleForm"
import ReactHookForm from './concepts/day3/ReactHookForm'
import TodoProject from './projects/day3/TodoProject'

const App = () => {
  return <Routes>
    <Route path='/p1' element={<UseStateProject />} />
    <Route path='/p2' element={<FormProject />} />
    <Route path='/p3' element={<TodoProject />} />
    <Route path='/' element={<UseState />} />
    <Route path='/map' element={<MapState />} />
    <Route path='form/bind' element={<FormBinding/>} />
    <Route path='form/handle' element={<HandleForm/>} />
    <Route path='form/hook' element={<ReactHookForm/>} />
  </Routes>

}

export default App