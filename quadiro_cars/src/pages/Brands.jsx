import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import PostCard from '../components/PostCard';

export default function Brands() {
    const { brandName } = useParams();
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

    const FilterBrands = posts.filter((brands) => brands.brand === brandName);
  return (
    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-10'>
        <h2 className='text-3xl text-slate-700 font-bold text-center'>{brandName}</h2>
        {FilterBrands && FilterBrands.length > 0 ? (
          <div className='flex flex-col gap-6'>
            <div className='flex flex-wrap justify-center md:justify-self-auto gap-4'>
              {FilterBrands.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        ):(
            <p>No cars available in {brandName} brand</p>
        )}
      </div>
  )
}
