import React, { useEffect, useState } from 'react';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (skip, limit) => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
      const result = await res.json();
      if (result.products.length > 0) {
        setData(prevData => [...prevData, ...result.products]);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(skip, limit);
  }, [skip, limit]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 && hasMore && !loading) {
        setSkip(prevSkip => prevSkip + limit);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading, limit]);

  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full min-h-[100vh] py-4'>
      {data.map(item => (
        <div className='bg-green-200 w-[50%] px-2 py-4 rounded-md' key={item.id}>
          <p className='font-semibold mb-2'>{item.title}</p>
          <p>{item.description}</p>
          <p className='font-semibold mt-2'>Price: <span>{item.price}</span></p>
        </div>
      ))}
      {loading && <h1>Loading....</h1>}
      {!hasMore && <p>No more products to load</p>}
    </div>
  );
};

export default InfiniteScroll;
