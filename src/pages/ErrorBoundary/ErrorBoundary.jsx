import './ErrorBoundary.css'; 

const ErrorBoundary = () => {
 
  return (
    <div className="error-boundary">
      <h1>Something went wrong...</h1>
      <p>Please refresh the page or try again later.</p>
    </div>
  )  
};

export default ErrorBoundary;


