import React from 'react'
import { Link } from 'react-router-dom';
import HeroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <div className='flex justify-center flex-col md:flex-row md:justify-between p-4 sm:p-10'>
      <div className="flex-1">
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Quadiro car</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias fuga itaque iure illo libero dolorem sed eveniet, vitae inventore ad nostrum, quam laboriosam, soluta vero quas quo eligendi aliquam assumenda!
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all Cars
        </Link>
      </div>
      </div>
      <div className="flex-1">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  )
}
