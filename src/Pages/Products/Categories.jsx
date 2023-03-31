import React,{useState,useEffect} from 'react';
import './category.css';
import { categories } from '../../DummyData';
import {BiSort} from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai'
import { FaFilter, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import Navigation from '../../Components/Navigation/Navigation';
import { Link } from 'react-router-dom';
function Categories() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(categories);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:4042/categories/category');
        console.log(response.data)
        setFilteredData(response.data);
      }
      fetchData();
    }, [filteredData]);
    const handleSearch = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
  
      if (!term) {
        setFilteredData(categories);
      } else {
        const filtered = categories.filter((categories) =>
          categories.title.toLowerCase().includes(term.toLowerCase()));
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
        <div className="container" style={{overflowY:'scroll', height:'700px'}}>
        <div className="category-page">
          <div className='top-bar'>
          <div>
          <p className='path'>Categories</p>
          <p className='title'>Dashboard / Categories</p>
          </div>
            <div>
              <div>
                <Link to='/add category'><button><AiOutlinePlus /></button></Link>
                <button><FaFilter /></button>
              </div>
            </div>
          </div>
            <div className="search-container">
              <input type="text" name="search" value={searchTerm} placeholder='Search...' onChange={handleSearch} />
              <FaSearch className='search-icon' />
          <table style={{width:'1200px'}}>
              <thead>
                <tr>
                  <th>
                   ID
                   <BiSort/>
                  </th>
                  <th>
                    Name
                    <BiSort/>
                  </th>
                  <th>
                    Date Added
                    <BiSort/>
                  </th>
                  <th>
                    Action
                    <BiSort/>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((categories) => (
                  <tr key={categories.id}>
                    <td>{categories.id}</td>
                    <td style={{textTransform:'capitalize'}}>{categories.category}</td>
                    <td>{categories.date}</td>
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
    );
}

export default Categories
