import Home from "./Pages/Home/Home.jsx"
import Products from "./Pages/Products/Products.jsx"
import Users from "./Pages/Users/Users.jsx"
import NewUser from "./Pages/NewUser/NewUser.jsx"

const routes=[
    {path:'/home',element:<Home/>},
    {path:'/products',element:<Products/>},
    {path:'/users',element:<Users/>},
    {path:'/newuser',element:<NewUser/>}
]

export default routes