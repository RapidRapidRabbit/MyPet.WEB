import { useState, useEffect } from 'react';

const useInfiniteScrollHook = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

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

  const handleScroll = () => {

    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching)
    {
        return;
    } 
    setIsFetching(true);
  }

  return [setIsFetching];
};

export default useInfiniteScrollHook;