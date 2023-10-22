import React, { useState } from 'react'
import './addProduct.css'
import axios from 'axios';
const AddProduct = () => {
    const [formData, setFormData] = useState({
        product_name: "",
        // product_desc: "",
        // product_img: "",
        // stock: "",
        // price: "",
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: [event.target.value]
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8081/api/products", formData)
            .then(res => {
                console.log('Form submitted successfully!', res);
                // Do something with the response if needed
            })
            .catch(err => {
                console.log('Error submitting form:', err);
                // Handle the error if needed
            });
    };
    return (
        <div className="add-product">
            <form method='POST' onSubmit={handleSubmit} className='addProduct'>
                {/* <label htmlFor="" className='product'>Product Name</label> <br /> */}
                <input type="text" name="product_name" id="" className='input' onChange={handleChange} /> <br></br>
                {/* <label htmlFor="" className='product' id='desc'>Description</label><br></br> */}
                {/* <input type="text" name="product_desc" id="" className='input' onChange={handleChange} /><br></br> */}
                {/* <label htmlFor="" className='product'>Product Price   </label><br /> */}
                {/* <input type="text" name="price" id="" className='input' onChange={handleChange} /><br></br> */}
                {/* <label htmlFor="" className='product'>Product Stock </label><br /> */}
                {/* <input type="text" name="stock" id="" className='input' onChange={handleChange} /><br></br> */}
                {/* <label htmlFor="" className='product'>Product Image </label><br /> */}
                {/* <input type="file" name="product_img" id="" className='input' onChange={handleChange} /><br></br> */}
                <button type="submit" value="Submit" class="input" onClick={handleSubmit}>Add Product</button>
            </form>

        </div>
    )
}

export default AddProduct
