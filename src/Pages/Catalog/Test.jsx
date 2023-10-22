import axios from 'axios';
import React, { useState, useEffect } from 'react'
// import axios from 'axios'
const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/products')
      .then(response => {
        setProducts(response.data || []);
      })
      .catch(error => {
        console.error('Error fetching product Data:', error);
      });
  }, []);

  console.log('products:', products);

  return (
    <div>
      <h1>Product List</h1>
      <p>{products.length}</p>
      <ul>
        {products.length > 0 ? (
           products.map(product => (
            <li key={product.id}>
              {product.product_name} - ${product.price}
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
}

export default Test
