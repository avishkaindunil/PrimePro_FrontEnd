import React, { useState } from 'react';
import Button from './Button';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';


function Navbar() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'News', link: '/news' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-blue '>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-iconic"></ion-icon>
          </span>
          PrimePro
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <IonIcon icon={open ? closeOutline : menuOutline} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0'
          } md:opacity-100`}
        >
          {links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-indigo-600 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className='md:ml-8'>
            <Button>Get started</Button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;