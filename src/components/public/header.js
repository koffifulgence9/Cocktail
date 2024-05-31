import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const header = () => {
    return (
  <header>
              <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/services">Service</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav> 
           </header>  
    );

};

export default header;