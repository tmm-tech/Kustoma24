import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './dashboard.css';
import { FaUsers, FaCartPlus, FaHandHoldingUsd, FaMoneyBill ,FaChevronDown,FaChevronUp} from 'react-icons/fa';
function Dashboard() {
  return (
    <Navigation>
      <div className="container">
        <p className='path'>Dashboard</p>
        <div className='dashboard'>
          <div className='Top_Dashboard'>
            <div className="top item1">
              <div className="top-side">
                <div className="icon-container">
                  <FaUsers />
                </div>
                <div className="Info-Container">
                  <div className="info-title">Customers</div>
                  <div className="info-amount">3,259</div>

               </div>
              </div>
              <div className="progress">
                  <div className="progress-level"></div>
              </div>
              <div className="bottom-side">
                <div className="icon"><FaChevronUp/></div>
                <div className="percentage">1.15%</div>
                <div className="text">since last week</div>
              </div>
            </div>
            <div className="top item2">
              <div className="top-side">
                <div className="icon-container">
                  <FaCartPlus />
                </div>
                <div className="Info-Container">
                  <div className="info-title">Products Sold</div>
                  <div className="info-amount">3,259</div>
               </div>
              </div>
              <div className="progress">
                  <div className="progress-level"></div>
              </div>
              <div className="bottom-side">  
              <div className="icon"><FaChevronDown/></div>
              <div className="percentage">1.15%</div>
              <div className="text">since last week</div>
            </div>
            </div>
            <div className="top item3">
              <div className="top-side">
                <div className="icon-container">
                  <FaHandHoldingUsd />
                </div>
                <div className="Info-Container">
                  <div className="info-title">Profits</div>
                  <div className="info-amount">3,259</div>
               </div>
              </div>
              <div className="progress">
                  <div className="progress-level"></div>
              </div>
              <div className="bottom-side">
            <div className="icon"><FaChevronUp/></div>
            <div className="percentage">1.15%</div>
            <div className="text">since last week</div>
            </div>
            </div>
            <div className="top item4">
              <div className="top-side">
                <div className="icon-container">
                  <FaMoneyBill />
                </div>
                <div className="Info-Container">
                  <div className="info-title">Refunds</div>
                  <div className="info-amount">3,259</div>
               </div>
              </div>
              <div className="progress">
                  <div className="progress-level"></div>
              </div>
              <div className="bottom-side">
            <div className="icon"><FaChevronDown/></div>
            <div className="percentage">1.15%</div>
            <div className="text">since last week</div>
          </div>
          </div>
          </div>
          <div className="Middle_Dashboard">
            <div className="middle-item1">
          
            </div>
            <div className='Second-Container'>
              <div className="middle-item2">

              </div>
              <div className="middle-item3">

              </div>
            </div>
            <div className="bottom-item1">

            </div>
            <div className="bottom-item2">

            </div>
          </div>
        </div>
      </div>
    </Navigation>
  )
}

export default Dashboard
