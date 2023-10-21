import { Link } from "react-router-dom"
import './ErrorPage.css'; 
 
const ErrorPage = () => { 

    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist</p>
            <p>Go to <Link to="/" className="home-page"><b>Home page</b></Link></p>
        </div>
    )
};

export default ErrorPage