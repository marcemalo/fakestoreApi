import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "../appi/axio";
import "./Product.css"
import { Link } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="hgfdjsgsjhdfgjhzgkcbg">
      <img className="hajbsbfs"
        src={product.image}
        alt={product.title}
    
      />
      <h2 className="sdfghjk">{product.title}</h2>
      <p className="lkjhgf">{product.description}</p>
      <strong className="vxhzmhxs">${product.price}</strong>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default Product