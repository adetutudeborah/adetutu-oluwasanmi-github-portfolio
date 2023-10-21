/* eslint-disable react/no-unescaped-entities */
import RepositoryList from '../../components/RepositoryList/RepositoryList' 
import useFetch from '../../hooks/useFetch';
import './Home.css'
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
 
function Home() {

const [currentPage, setCurrentPage] = useState(1);

const url = `https://api.github.com/users/adetutudeborah/repos?per_page=6&page=${currentPage}`;

const { repos, showLoadMore  } = useFetch(url) 

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
        <div className='home-container'>
          <RepositoryList repositories={repos} />
          <div className="load-more-container">
              <p className="load-more" onClick={loadMore}>
                  {showLoadMore}
              </p>
          </div> 
        </div>

        <Footer />
    </>
 

  )
}

export default Home