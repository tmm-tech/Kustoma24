import React, { useState } from 'react';
import { categories } from '../../DummyData';
import './category.css'
import { FaFilter } from 'react-icons/fa';
import Navigation from '../../Components/Navigation/Navigation';
function AddCategory({onAddCategory}) {
  const [category, setCategory] = useState({ category: '', date: '' });
  function handleSubmit(e) {
    e.preventDefault();
    const newCategory = { ...category, id: categories.length + 1 };
    categories.push(newCategory);
    window.location.href="/categories";
    console.log(categories); // just for testing purposes
  }
  function handleCategoryChange(e) {
    setCategory({ ...category, category: e.target.value });
  }

  function handleDateChange(e) {
    setCategory({ ...category, date: e.target.value });
  }
  return (
    <Navigation>
      <div className="container" style={{ overflowY: 'scroll', height: '700px' }}>
        <div className="category-page">
          <div className='top-bar'>
            <div>
              <p className='path'>Add Categories</p>
              <p className='title'>Dashboard / Add Categories</p>
            </div>
            <div>
              <div>
                <button><FaFilter /></button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                className="form-control"
                id="category"
                value={category.category}
                onChange={handleCategoryChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={category.date}
                onChange={handleDateChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </Navigation>
  )
}

export default AddCategory
