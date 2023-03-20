import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './dashboard.css'
function Dashboard() {
  return (
    <Navigation>
      <div className="container">
        <p className='path'>Dashboard</p>
        <div className='dashboard'>
          <div className='Top_Dashboard'>
            <div className="top item1">Item 1</div>
            <div className="top item2">Item 2</div>
            <div className="top item3">Item 3</div>
            <div className="top item4">Item 4</div>
          </div>
          <div className="Middle_Dashboard">
            <div className="middle-item1">Container 1</div>
            <div className="Second-Container">
              <div className="middle-item2">Container 2</div>
              <div className="middle-item3">Container 3</div>
            </div>
          <div className="Bottom-Dashboard">
            <div className="bottom-item1">Item 1</div>
            <div className="bottom-item2">Item 2</div>
          </div>
        </div>
        </div>
      </div>
    </Navigation>
  )
}

export default Dashboard
