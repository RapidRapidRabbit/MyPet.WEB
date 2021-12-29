import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching){
        return;
    } 
    callback(() => {      
    });
  }, [isFetching]);

  /* eslint-enable */

  const handleScroll = () => {

    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching)
    {
        return;
    } 
    setIsFetching(true);
  }

  return [setIsFetching];
};

export default useInfiniteScroll;