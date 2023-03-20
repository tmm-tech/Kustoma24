import React, { useState } from 'react';
import './products.css'
import { FaFilter } from 'react-icons/fa';
import { categories } from '../../DummyData';
import Navigation from '../../Components/Navigation/Navigation';
function AddProduct({onAddProduct}) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const product = {
      title,
      price: Number(price),
      description,
      category,
      image,
      rating: { rate: 0, count: 0 },
      createdAt: new Date().toISOString()
    };
    window.location.href="/products";
    onAddProduct(product);
    setTitle('');
    setPrice('');
    setDescription('');
    setCategory([0]);
    setImage('');
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleCategoryChange=(e)=>{
    const category=e.target.value;
    setCategory(category)
  }

  return (
    <Navigation>
      <div className="container" style={{ overflowY: 'scroll', height: '700px' }}>
        <div className="products-page">
          <div className='top-bar'>
            <div>
              <p className='path'>Add Products</p>
              <p className='title'>Dashboard / Add Products</p>
            </div>
            <div>
              <div>
                <button><FaFilter /></button>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <label>Title:</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <label>Price:</label>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
              <label>Description:</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
              <label>Category:</label>
              <select value={category} onChange={handleCategoryChange} required>
                {categories.map((category)=>(
                  <option className='category' key={category.id} value={category.category}>{category.category}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Image URL:</label>
              <input type="file" onChange={handleImageUpload} required />
            </div>
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </Navigation>
  )
}

export default AddProduct
