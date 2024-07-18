import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const sections=[
  {
    title: 'Information',
    items: ['About', 'Contact', 'Blog', 'Testimonials'],
  },
  {
    title: 'Helpful Links',
    items: ['Services', 'Support', 'Privacy Policy', 'Terms & Conditions'],
  },
  {
    title: 'Services',
    items: ['Service Centers', 'Customers', 'Custom Support'],
  },
  {
    title: 'Contact',
    items: ['+(94) 11 222 3344', <input type='email' placeholder='Email' className='p-1 text-gray-300 bg-gray-800 rounded-md' />, <button className='p-1 text-white rounded-md bg-purple-950'>Subscribe</button>]
     
  },
]
 
const items =[
  {
    name:'Facebook',
    icon:FaFacebook,
    link:'https://facebook.com/'
  },
  {
    name:'Twitter',
    icon:FaTwitter,
    link:'https://instagram.com/'
  },
  {
    name:'Linkedin',
    icon:FaLinkedin,
    link:'https://linkedin.com/'
  },
  {
    name:'Instagram',
    icon:FaInstagram,
    link:'https://instagram.com/'
  },
]

function Footer() {
  return (
    <div className='w-full px-2 text-gray-300 bg-purple-950 py-y'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>
      <div className='"col-span-2 pt-8 md:pt-2 w-full pr-20'>
        <p className='flex justify-start text-3xl font-bold md:mb-5'>
            PrimePro
        </p>
         <p>
         PrimePro connects you to local car wash services for quick and easy booking. Enjoy convenient, quality care for your vehicle.
         </p>
         <div className='flex justify-between sm:w-[200px] pt-4 text-2xl'>
        {
          items.map((x,index)=>{
            return <x.icon key={index} className='cursor-pointer hover:text-white' />
          })
        }

      </div>
      </div>
        {
          sections.map((section,index)=>(
            <div className='md:pl-14' key={index}>
              <h6 className='pt-2 font-bold uppercase'>
                {section.title}
              </h6>
              <ul>
                {section.items.map((item,i)=>(
                  <li key={i} className='py-1 text-gray-300 cursor-pointer hover:text:white'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      
      </div>
      
      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-300'>
      <p className=' md:pl-96'>
        2024 all rights reserved
      </p>
      <div className='flex space-x-4'>
          <a href='#' className='cursor-pointer hover:text-white'>
            FAQ
          </a>
          <a href='#' className='cursor-pointer hover:text-white'>
            Privacy Policy
          </a>
          <a href='#' className='cursor-pointer hover:text-white'>
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>

  )
}

export default Footer