import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "../appi/axio"
import { Link } from 'react-router-dom'


const Home = () => {

  const [products, setProducts] = useState([])

 useEffect(() =>{
  axios('/products')
  .then(response => setProducts(response.data))
  
 }, [])

  return (
    <>
    <div className='header'>
        <nav className='nav__wrapper'>
            <ul className='nav__list'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    </div>

    <div className='wqsdw'>
      {
        products.map(product =>
          <div className='gfhfys' key={product.id}>
            <Link to={`/product/${product.id}`}><img className='ghgdhsfd' src={product.image} alt="" /></Link>
            <h2 className='ghdhgdbha'>{product.title}</h2>
            <p className='hfjeghsb'>{product.description}</p>
          </div>
        )
      }
    </div>
    
    </>

    

  )
}


export default Home