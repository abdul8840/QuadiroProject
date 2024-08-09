import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const categories = posts.reduce((acc, item) => {
    if (!acc.find((cat) => cat.brand === item.brand)) {
      acc.push({ brand: item.brand, image: item.image });
    }
    return acc;
  }, []);

  // const categories = [...new Set(posts.map((item) => item.brand)), ...new Set(posts.map((item) => item.image))];
  // console.log(categories)

  return (
    <div>
      <Hero />
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <div className="max-w-6xl mx-auto p-5 flex gap-6 overflow-scroll hide-scrollbar">
        {categories.map((brand, index) => (
          <Link to={`/brand/${brand}`}>
          <div key={index} className='w-[200px] border-2 border-slate-500 py-1 px-3 rounded-md'>
            <img src={brand.image} alt="" className='w-full h-[100px] mb-2' />
            <h2 className='text-xl font-bold'>{brand.brand}</h2>
          </div>
          </Link>
        ))}
        </div>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-10'>
        <h2 className='text-3xl text-slate-700 font-bold text-center underline'>Latest Cars</h2>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <div className='flex flex-wrap justify-center md:justify-self-start gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}