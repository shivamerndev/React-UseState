import { createBrowserRouter } from 'react-router-dom'
import UseState from '../concepts/Hooks/UseState'
import MapState from '../concepts/Hooks/MapState'
import UseStateProject from '../projects/UseStateProject'
import FormProject from '../projects/FormProject'
import FormBinding from '../concepts/Forms/FormBinding'
import HandleForm from "../concepts/Forms/HandleForm"
import ReactHookForm from '../concepts/day3/ReactHookForm'
import TodoProject from '../projects/day3-Todo-Time/TodoProject'
import Todo from '../concepts/day-4/Todo'
import ProductDetail from '../projects/day4-cart/ProductDetail'
import CartPage from '../projects/day4-cart/CartPage'
import Wishlist from '../projects/day4-cart/Wishlist'
import D4Context from '../projects/day4-cart/D4Context'
import ProductPage from '../projects/day4-cart/ProductPage'
import Login from '../projects/day5-chat/Login'
import Chat from '../projects/day5-chat/Chat'
import UserContext from '../projects/day5-chat/context/UserContext'
import Game from '../projects/day6-memory/Game'
import CardContext from '../projects/day6-memory/CardContext'



const routes = createBrowserRouter([
    { path: "/", element: <UseState /> },
    { path: "/map", element: <MapState /> },
    { path: "/form/bind", element: <FormBinding /> },
    { path: "/form/handle", element: <HandleForm /> },
    { path: "/form/hook", element: <ReactHookForm /> },
    { path: "/day4/todo", element: <Todo /> },
    { path: "/p1", element: <UseStateProject /> },
    { path: "/p2", element: <FormProject /> },
    { path: "/p3", element: <TodoProject /> },

    // {path: "/p4",element: <D4Context><ProductPage /> </D4Context> },
    // {path: "/d4/p/:id",element: <D4Context><ProductDetail /> </D4Context> },
    // {path: "/d4/cart",element: <D4Context><CartPage /> </D4Context> },
    // {path: "/d4/wishlist",element: <D4Context><Wishlist /> </D4Context> },

    // Good WAy ⬇️⬇️⬇️⬇️⬇️😀😀😁😁😁✔️✔️✔️✔️ 
    {
        element: <D4Context />,   // parent wrapper
        children: [
            { path: "/p4", element: <ProductPage /> },
            {
                path: "/d4",
                children: [
                    { path: 'p/:id', element: <ProductDetail /> },
                    { path: "cart", element: <CartPage /> },
                    { path: "wishlist", element: <Wishlist /> }
                ]
            }
        ]
    },


    {
        element: <UserContext />,  // parent wrapper but use outlet
        children: [
            { path: "/p5", element: <Login /> },
            { path: "/d5/chat", element: <Chat /> }
        ]
    },


    {
        path: "/p6",
        element: <CardContext> <Game /> </CardContext>
    }

])

export { routes }


//     {/* <Routes>
//       <Route path='/p1' element={<UseStateProject />} />
//       <Route path='/p2' element={<FormProject />} />
//       <Route path='/p3' element={<TodoProject />} />

//       <Route path='/p4' element={<D4Context><ProductPage /> </D4Context>} />
//       <Route path='/d4/p/:id' element={<D4Context><ProductDetail /> </D4Context>} />
//       <Route path='/d4/cart' element={ } />
//       <Route path='/d4/wishlist' element={ } />

//       <Route path='/' element={<UseState />} />
//       <Route path='/map' element={<MapState />} />
//       <Route path='form/bind' element={<FormBinding />} />
//       <Route path='form/handle' element={<HandleForm />} />
//       <Route path='form/hook' element={<ReactHookForm />} />
//       <Route path='/day4/todo' element={<Todo />} />
//     </Routes> */}


//     {/* <UserContext>
//   <Routes>
//     <Route path='/p5' element={<Login />} />
//     <Route path='/d5/chat' element={<Chat />} />
//   </Routes>
// </UserContext>



// <CardContext>
//   <Routes>
//     <Route path='/p6' element={<Game />} />
//   </Routes>
//     </CardContext> */}
