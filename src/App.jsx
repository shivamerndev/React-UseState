import { Route, Routes } from 'react-router-dom'
import UseState from './concepts/Hooks/UseState'
import MapState from './concepts/Hooks/MapState'
import UseStateProject from './projects/UseStateProject'
import FormProject from './projects/FormProject'
import FormBinding from './concepts/Forms/FormBinding'
import HandleForm from "./concepts/Forms/HandleForm"
import ReactHookForm from './concepts/day3/ReactHookForm'
import TodoProject from './projects/day3-Todo-Time/TodoProject'
import Todo from './concepts/day-4/Todo'
import Context from './projects/day4-cart/Context'
import ProductDetail from './projects/day4-cart/ProductDetail'
import CartPage from './projects/day4-cart/CartPage'
import Wishlist from './projects/day4-cart/Wishlist'

const App = () => {
  return <Routes>
    <Route path='/p1' element={<UseStateProject />} />
    <Route path='/p2' element={<FormProject />} />
    <Route path='/p3' element={<TodoProject />} />
    <Route path='/p4' element={<Context />} />
    <Route path='/d4/p/:id' element={<ProductDetail />} />
    <Route path='/d4/cart' element={<CartPage />} />
    <Route path='/d4/wishlist' element={<Wishlist />} />
    <Route path='/' element={<UseState />} />
    <Route path='/map' element={<MapState />} />
    <Route path='form/bind' element={<FormBinding />} />
    <Route path='form/handle' element={<HandleForm />} />
    <Route path='form/hook' element={<ReactHookForm />} />
    <Route path='/day4/todo' element={<Todo />} />
  </Routes>

}

export default App