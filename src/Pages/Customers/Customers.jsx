import React, { useState,useEffect } from 'react';
import './customers.css';
// import { user } from '../../DummyData';
import { BiSort } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai'
import {user} from '../../DummyData';
import { FaFilter, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import Navigation from '../../Components/Navigation/Navigation';
function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(user);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4040/customer/customers');
      const data = await response.json();
      console.log(data)
      setFilteredData(data);
    }
    fetchData();
  }, []);
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (!term) {
      setFilteredData(filteredData);
    } else {
      const filtered = filteredData.filter((customer) =>
        customer.name.toLowerCase().includes(term.toLowerCase()));
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
      <div className="container"style={{height:'700px', overflowY:'scroll'}}>
        <div className="customer-page">
          <div className='top-bar'>
            <div>
              <p className='path'>Customers</p>
              <p className='title'>Dashboard / Customers</p>
            </div>
            <div>
              <div>
                <Link to='/add customer'><button><AiOutlinePlus /></button></Link>
                <button><FaFilter /></button>
              </div>
            </div>
          </div>
          <div className="search-container">
            <input type="text" name="search" value={searchTerm} placeholder='Search...' onChange={handleSearch} />
            <FaSearch className='search-icon' />
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  Customer
                  <BiSort />
                </th>
                <th>
                  Email
                  <BiSort />
                </th>
                <th>
                  Loyalty Points
                  <BiSort />
                </th>
                <th>
                  Registered At
                  <BiSort />
                </th>
                <th>
                  Status
                  <BiSort />
                </th>
                <th>
                  Action
                  <BiSort />
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((customer) => (
                <tr key={customer.id}>
                  <td><img src={customer.image} alt='Customer Avatar' />
                    {customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.loyalty_points}</td>
                  <td>{customer.registered_at}</td>
                  <td className={`status ${customer.status.toLowerCase()}`}>{customer.status}</td>
                  <td>
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
    </Navigation>
  )
}

export default Customers
