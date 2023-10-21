/* eslint-disable react/jsx-no-target-blank */
import './Navbar.css'
import { Link } from 'react-router-dom'; 
  
function Navbar() { 

  return (  
    <div className='header-container'>    

       <div className='header-name'>
          <Link to="/" className='name'>Adetutu Oluwasanmi</Link>
       </div>

       <div className='header-icons'>
          <a href='https://github.com/adetutudeborah' target='_blank' className='social-icon'><i className="fa-brands fa-github"></i></a>
          <a href='https://twitter.com/adetutuoluwa2' target='_blank' className='social-icon'><i className="fa-brands fa-twitter"></i></a>
          <a href='https://dev.to/adetutu' target='_blank' className='social-icon'><i className="fa-brands fa-dev"></i></a>
          <a href='https://adetutu.hashnode.dev/' target='_blank' className='social-icon'><i className="fa-brands fa-hashnode"></i></a>
       </div>
    
    </div>  
  )
}

export default Navbar