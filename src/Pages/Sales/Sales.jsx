import React,{useState} from 'react';
import './sales.css';
import { AiFillFilePdf} from 'react-icons/ai';
import {BiSort} from 'react-icons/bi';
import { FaFilter, FaSearch} from 'react-icons/fa';
import Navigation from '../../Components/Navigation/Navigation';
import {sales,user} from '../../DummyData';
function Sales() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(sales);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (!term) {
      setFilteredData(sales);
    } else {
      const filtered = sales.filter((products) =>
        products.product_name.toLowerCase().includes(term.toLowerCase()));
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
function getCustomerName(customer_id){
  const customer = user.find((c) => c.id === customer_id);
        return customer ? customer.name : 'Unknown';
}
  return (
      <Navigation>
      <div className="container">
      <div className="sales-page">
        <div className='top-bar'>
        <div>
        <p className='path'>Sales</p>
        <p className='title'>Dashboard / Sales</p>
        </div>
          <div>
            <div>
              <button>< AiFillFilePdf/></button>
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
                  Date
                 <BiSort/>
                </th>
                <th>
                  Customer 
                  <BiSort/>
                </th>
                <th>
                  Product
                  <BiSort/>
                </th>
                <th>
                 Price
                 <BiSort/>
                </th>
                <th>
                 Discount
                 <BiSort/>
                </th>
                <th>
                  Quantity
                  <BiSort/>
                </th>
                <th>
                 Total Price
                 <BiSort/>
                </th>
                <th>
                  Payment
                  <BiSort/>
                </th>
                <th>
                  Status
                  <BiSort/>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((sales) => (
                <tr key={sales.id}>
                  <td>{sales.date}</td>
                  <td className='customer_name'>{getCustomerName(sales.customer_id)}</td>
                  <td className='product'><img src={sales.product_image} alt='sales Avatar' />
                    {sales.product_name}</td>
                  <td>{sales.price}</td>
                  <td>{sales.discount}</td>
                  <td>{sales.quantity}</td>
                  <td>{sales.total_price}</td>
                  <td className='method'>{sales.payment_method}</td>
                  <td className={`status ${sales.status.toLowerCase()}`}>{sales.status}</td>
                </tr>
            ))}
            </tbody>
          </table>
          <div className='pagination'>
            Show {currentPage} of {totalPages} Pages
            <div>
              {currentPage > 1 && <button onClick={handlePrevPage}>Previous</button>}
              {currentPage < totalPages && <button onClick={handleNextPage}>Next</button>}
            </div>
          </div>
        </div>
      </div>
      </div>
    </Navigation>
  );
}

export default Sales

