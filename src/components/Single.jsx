import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Product from "./Product";



const Single = () => {
    const [user, setProduct] =  useState(null)
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            setProduct(data.products); 
            setLoading(false);
          })
      }, []);

  return (
    <div className="wwwww">
        {
            user && <div>
                <img src={Product.images} alt="" />
                <h2>{user.data.email}</h2>
                <p>{user.data.first_name}</p>
                <p>{user.data.last_name}</p>
            </div>
        }
    </div>
  )
}

export default Single