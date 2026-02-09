import { Route, Routes } from 'react-router-dom'
import UseState from './concepts/Hooks/UseState'
import MapState from './concepts/Hooks/MapState'
import UseStateProject from './projects/UseStateProject'

const App = () => {
  return <Routes>
    <Route path='/' element={<UseState />} />
    <Route path='/map' element={<MapState />} />
    <Route path='/p1' element={<UseStateProject />} />
  </Routes>

}

export default App