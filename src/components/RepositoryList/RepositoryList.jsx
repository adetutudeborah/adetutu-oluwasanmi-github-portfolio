/* eslint-disable react/prop-types */ 
import './RepositoryList.css';
import { Link } from 'react-router-dom'; 

function RepositoryList({ repositories }) {
  if (!repositories) {
    return <p>No repositories available.</p>;
  }

  return (  
    <div className='repo-container'>
    
      <div className="repo-header-container">
        <h2 className="repo-header">GitHub Repositories</h2>
      </div>
     

      <div className='repo-list'>
          {repositories.map((repository, index) => (
            <div key={index} className='repo-card'>
              <h3 className='repo-name'>{repository.name}</h3>
                <p className="language">Language: {repository.language === null ? "none" : repository.language}</p>
                <p className="date">Start date & time: {repository.created_at}</p>
                <p className="visibility">Visibility: {repository.visibility}</p>

                <div className="read-more">
                  <Link to={`/repositorydetails/${repository.name}`}>Read More</Link>
                </div>
            </div>
          ))}
      </div>

    </div>
  );
}

export default RepositoryList;
