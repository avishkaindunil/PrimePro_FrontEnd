import React from 'react'

export default function Input({inputData}) {
  return (
    <div>
      <input className="w-full px-3 py-3 m-4 leading-tight text-gray-700 appearance-none rounded-xl focus:outline-none focus:shadow-outline bg-[#F7F7F7]" 
      placeholder={inputData.placeholder} id={inputData.id}/>
    </div>
  )
}
