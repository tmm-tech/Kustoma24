import React from 'react';
import { FaMedal } from 'react-icons/fa';
import  {user} from '../../DummyData';
import './customertable.css';
function CustomerTable() {
  return (
    <div className="loyalty-points">
      <h2>Top Customers by Loyalty Points</h2>
      <ul>
        {user.map((user, index) => (
          <li key={user.id}>
            <div className="customer">
              <img src={user.image} alt={user.name} />
              <div className="customer-info">
                <span className="name">{user.name}</span>
                <span className="email">{user.email}</span>
                <span className="points">{user.loyalty_points} Points</span>
                {index === 0 && <FaMedal className="gold-medal" />}
                {index === 1 && <FaMedal className="silver-medal" />}
                {index === 2 && <FaMedal className="bronze-medal" />}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CustomerTable;