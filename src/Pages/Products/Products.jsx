import React, { useState } from 'react'
import './products.css';
import { products } from '../../DummyData';
import { BiSort } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai'
import { FaFilter, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import Navigation from '../../Components/Navigation/Navigation';
import { Link } from 'react-router-dom';
function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (!term) {
      setFilteredData(products);
    } else {
      const filtered = products.filter((products) =>
        products.title.toLowerCase().includes(term.toLowerCase()));
      setFilteredData(filtered);
    }
  }
  //Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  return (
    <Navigation>
      <div className="container" style={{ overflowY: 'scroll', height: '700px' }}>
        <div className="products-page">
          <div className='top-bar'>
            <div>
              <p className='path'>Products</p>
              <p className='title'>Dashboard / Products</p>
            </div>
            <div>
              <div>
                <Link to='/add product'><button><AiOutlinePlus /></button></Link>
                <button><FaFilter /></button>
              </div>
            </div>
          </div>
          <div className="search-container">
            <input type="text" name="search" value={searchTerm} placeholder='Search...' onChange={handleSearch} />
            <FaSearch className='search-icon' />
            <table>
              <thead>
                <tr>
                  <th>
                    Product
                    <BiSort />
                  </th>
                  <th>
                    Price
                    <BiSort />
                  </th>
                  <th>
                    Category
                    <BiSort />
                  </th>
                  <th>
                    Description
                    <BiSort />
                  </th>
                  <th>
                    Date Added
                    <BiSort />
                  </th>
                  <th>
                    Action
                    <BiSort />
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((products) => (
                  <tr key={products.id}>
                    <td><img src={products.image} alt='products Avatar' />
                      {products.title}</td>
                    <td>{products.price}</td>
                    <td>{products.category}</td>
                    <td><p>{products.description}</p></td>
                    <td>{products.date}</td>
                    <td className='action'>
                      <button className='edit-btn'>
                        <FaEdit />
                        <span> Edit</span>
                      </button>
                      <button className='delete-btn'>
                        <FaTrash />

                        <span> Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='pagination'>
              Show {currentPage} of {totalPages} Pages
              <div className='buttonpage'>
                <button onClick={handlePrevPage} disabled={currentPage <= 1} className={currentPage <= 1 ? "disabled" : ""}>
                  Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage >= totalPages} className={currentPage >= totalPages ? "disabled" : ""}>
                  Next
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Navigation>
  )
}
export default Products
