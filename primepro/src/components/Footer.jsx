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
    items: ['+(94) 11 222 3344', <input type='email' placeholder='Email' className='bg-gray-800 text-gray-300 p-1 rounded-md' />, <button className='bg-purple-950 text-white p-1 rounded-md'>Subscribe</button>]
     
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
    <div className='w-full mt-24 bg-purple-950 text-gray-300 py-y px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8'>
      <div className='"col-span-2 pt-8 md:pt-2 w-full pr-20'>
        <p className='font-bold flex justify-start md:mb-5 text-3xl'>
            PrimePro
        </p>
         <p>
         PrimePro connects you to local car wash services for quick and easy booking. Enjoy convenient, quality care for your vehicle.
         </p>
         <div className='flex justify-between sm:w-[200px] pt-4 text-2xl'>
        {
          items.map((x,index)=>{
            return <x.icon key={index} className='hover:text-white cursor-pointer' />
          })
        }

      </div>
      </div>
        {
          sections.map((section,index)=>(
            <div className='md:pl-14' key={index}>
              <h6 className='font-bold uppercase pt-2'>
                {section.title}
              </h6>
              <ul>
                {section.items.map((item,i)=>(
                  <li key={i} className='py-1 text-gray-300 hover:text:white cursor-pointer'>
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
          <a href='#' className='hover:text-white cursor-pointer'>
            FAQ
          </a>
          <a href='#' className='hover:text-white cursor-pointer'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-white cursor-pointer'>
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>

  )
}

export default Footer