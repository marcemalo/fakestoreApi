import { Routes, Route } from "react-router-dom"
import { Suspense } from "react"

import Register from "./register/Register"
import Login from "./login/Login"
import Home from "./Home"
import Profile from "./profile/Profile"
import Product from "./Product"

const RouteController = () => {
  return (
    <>
    
   <Routes>
    <Route path="" element={<Home/>}/>
      <Route path="register" element={<Suspense><Register/></Suspense>} />
      <Route path="login" element={<Suspense><Login/></Suspense>} />
      <Route path="profile" element={<Suspense ><Profile/></Suspense>} />
      <Route path="product/:id" element={<Product/>}/>
   </Routes>
   </>
  )
}

export default RouteController