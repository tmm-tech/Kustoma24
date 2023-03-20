import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { AiFillFilePdf} from 'react-icons/ai';
import { FaFilter} from 'react-icons/fa';
import './report.css';
function Report() {
  return (
      <Navigation>
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
        </div>
    </Navigation>
  )
}

export default Report
