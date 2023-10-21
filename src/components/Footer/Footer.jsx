/* eslint-disable react/jsx-no-target-blank */
import './Footer.css'; 
import { Link } from 'react-router-dom'; 

function Footer() { 
    return(  
     <div className='footer-container'>    
 
            <div className='footer-header-name'>
                <p className='footer-name'>Adetutu Oluwasanmi</p>
            </div>

            <div className='footer-links'>
                <Link to="*" className='footer-link'>404 Error</Link>
                <Link to="/errorboundary" className='footer-link'>Error Boundary</Link>
            </div>

    </div>     
    )
}

export default Footer; 