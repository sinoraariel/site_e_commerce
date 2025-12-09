import React from 'react'
import logo from '../../assets/Logo.jpg';
import { IoSearch } from "react-icons/io5";
import {FaCaretDown} from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import DarkMode from "./DarkMode"
const Menu =[
  {
    id:1,
    name : "Accueil",
    link: "/#",
  },
  {
    id:2,
    name : "Livraison Rapide",
    link: "/livraison",
  },
  {
    id:3,
    name : "Mon Panier",
    link: "/panier",
  },
  {
    id:4,
    name : "Contact",
    link: "/contact",
  },
]
const categorie = [
  {
    id : 1,
    name : "Hommes",
    Link: "hommes",
  },
   {
    id : 2,
    name : "Femmes",
    Link: "femmes",
  },
   {
    id : 3,
    name : "Enfant",
    Link: "enfant",
  }
]
const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-700 dark:text-white duration-200  relative z-40'>
      {/*upper Navbar*/}
      <div className='bg-primary/70 py-1  '>
        <div className='container flex justify-between items-center'>
             <div>
                <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={logo} alt='logo'
                    className='w-10  uppercase rounded-full' />
                    <p className='mt-5 mb-6 dark:text-white ' style={{fontSize:'20px'}}>EldoraShop</p>
                    
                </a>
             </div>
             {/* search bar */}
              <div className='flex  justify-start items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input 
                        type="text"
                        placeholder="search "
                        className="w-[200px]  sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                        rounded-full border border-gray-300 px-2 pY-1 focus:outline-none focus:border-1
                        hover:border-primary dark:border-gray-600 dark:bg-gray-800"
                        />
                        <IoSearch
                        className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                        />
                    </div>
                
                {/* order button */}
                <button onClick={() => alert("Ordering not available  yet")}
                  className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white
                  py-1 px-4 rounded-full  flex items-center gap-3 group'>
                  <span 
                  className='group-hover:block hidden transition-all duration-200'>Mon panier</span>
                  <PiShoppingCartSimpleBold
                  className="text-xl text-white drop-shaddow-sm cursor-pointer" /> 
                </button>
                {/* Darkmode button */}
                <div>
                  <DarkMode/>
                </div>
              </div>
        </div>
      </div>
      {/*lower Navbar*/}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden item-center gap-4'>
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link}
                className='inline-block px-4 hover:text-primary duration-200'
                >{data.name}</a>
              </li>
            ))
          }
           {/* {simple dropdown and links} */}
           <li className='group relative cursor-pointer'>
            <a href='#'
            className='flex items-center gap-[2px] hover:text-primary'
            >
              Categories
              <span>
                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px]
            rounded-md bg-white p-2 dark:bg-gray-800 text-black shadow-md'>
              <ul>
                {categorie.map((data) => (
                  <li key={data.id}>
                    <a href={data.Link}
                    className='inline-block w-full  rounded-md p-2
                    hover:bg-primary/60 dark:text-white '>
                      {data.name}
                    </a>
                  </li>
                ))
                }
              </ul>
            </div>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
