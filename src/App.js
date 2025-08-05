import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ProductCard from './product/ProductCard';
import { useEffect, useState } from "react";

function MyApp() {
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    fetch('https://srm-fdp-commerce-backend-wprz.onrender.com/list')
      .then((response) => response.json())
      .then((data) => setProducts(data))
    console.log("Api called")
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const deleteProduct = (title) => {
    fetch('https://srm-fdp-commerce-backend-wprz.onrender.com/list', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title
      })
    }).then((response) => {
      if (response.ok) {
        alert("Product is deleted");
        fetchProducts();
      }
    })
  }


  console.log("My App is Rendered")

  return (
    <div className="m-4 px-4">
      <h1> Products </h1>
      <a href="/add-product" className="btn btn-lg btn-primary">Add Product</a>
      <div className="row">
        {
          products.map(product =>
            <ProductCard onDelete={deleteProduct} title={product.title} description={product.description} imageurl={product.thumbnail} />
          )
        }
      </div>
    </div>
  )


}
export default MyApp;
