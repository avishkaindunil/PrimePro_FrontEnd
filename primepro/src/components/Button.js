import React from 'react'

function Button(props) {
  return (
<button className='bg-indigo-600 text-white font-normal px-6 py-2 rounded-full md:ml-8 hover:bg-indigo-800 duration-500'>
   {props.children}
</button>
  )
}

export default Button