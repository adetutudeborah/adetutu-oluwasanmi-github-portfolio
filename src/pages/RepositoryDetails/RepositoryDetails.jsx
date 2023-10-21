/* eslint-disable react/jsx-no-target-blank */
import './RepositoryDetails.css'
import { useParams, Link} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export default function RepositoryDetails() {

  const { id } = useParams();

  const { isLoading: detailsLoading, repos: details } = useFetch(`https://api.github.com/repos/adetutudeborah/${id}`);
  const { isLoading: branchLoading, repos: branch} = useFetch(`https://api.github.com/repos/adetutudeborah/${id}/branches`);
  const { isLoading: deploymentLoading , repos: deployment } = useFetch(`https://api.github.com/repos/adetutudeborah/${id}/deployments`);
 
  return (
      <div className="repository-container"> 

        <div id="repository-details">
              {detailsLoading || branchLoading || deploymentLoading ? (
                <p>Loading...</p>
              ) : (
                <div className="repository-details-card">
                  <h2 className="repo-name">{details.name}</h2>
                  <div className="repo-metrics">
                    <p className='metric'><i className="fa-regular fa-star icon"></i> Stars: {details.stargazers_count}</p>
                    <p className='metric'><i className="fa-regular fa-eye icon"></i> Watch: {details.watchers}</p>
                    <p className='metric'><i className="fa-solid fa-code-fork icon"></i> Forks: {details.forks}</p>
                    <p className='metric'><i className="fa-solid fa-code-branch icon"></i> Branches: {branch.length}</p>
                  </div>
                  <p>Main Language: {details.language === null ? "none" : details.language}</p>
                  <p>Live site: {deployment.length === 0 ? `none` : <a href={`https://adetutudeborah.github.io/${details.name}`} className='live-link' target='_blank'>adetutudeborah.github.io/{details.name}</a>}</p>
                  <p><a href={`https://github.com/${details.full_name}`} className='github-view' target='_blank' >View on Github</a></p>
                </div>
              )}
        </div>
        
        <div className="return">
            <Link to="/" >Return to main page</Link>
        </div>
        
      </div>
  )
}