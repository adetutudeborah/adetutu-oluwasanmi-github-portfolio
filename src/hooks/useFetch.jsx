/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';

const useFetch = (url, currentPage) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState('');

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return response.json();
       })
       .then((data) => {

        setRepos(data)

        setIsLoading(false);

        if (data.length === 0) {
          setShowLoadMore('THE END');
        } else {
          setRepos([...repos, ...data])
          setShowLoadMore('Load More')
        }

        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url, currentPage]);

  return { repos, isLoading, error, showLoadMore };
};

export default useFetch;


