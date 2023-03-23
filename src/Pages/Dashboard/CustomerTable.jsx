import React from 'react';
import { FaMedal } from 'react-icons/fa';
import './customertable.css';
function CustomerTable({ customer }) {
  // sort sales data by total price in descending order
  const sortedData = customer.sort((a, b) => b.loyalty_points - a.loyalty_points);
  // take the top 10 products
  const top5customers = sortedData.slice(0, 5);

  return (
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Email</th>
          <th>Loyalty Points</th>
        </tr>
      </thead>
      <tbody>
        {top5customers.map((customer, index) => (
          <tr key={customer.id}>
            <td>
              <img className="user" src={customer.image} alt={customer.name} />
              <span className="name">{customer.name}</span></td>
            <td><span className="email">{customer.email}</span></td>
            <td><span className="points">{customer.loyalty_points} Points</span>
              {index === 0 && <FaMedal className="gold-medal" />}
              {index === 1 && <FaMedal className="silver-medal" />}
              {index === 2 && <FaMedal className="bronze-medal" />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default CustomerTable;