import React from 'react';

function Card({ image, date, title, description }) {
  return (
    <div className='max-w-full mx-auto p-4'>
      <div className='flex bg-blue-100 shadow-md rounded-tl-2xl rounded-br-2xl overflow-hidden'>
        <div className='w-1/3'>
          <img src={image} alt={title} className='w-full h-full object-cover' />
        </div>
        <div className='w-2/3 p-4'>
          <p className='text-gray-600'>{date}</p>
          <h2 className='text-2xl font-bold mb-2'>{title}</h2>
          <p className='text-gray-700 mb-4'>{description}</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;