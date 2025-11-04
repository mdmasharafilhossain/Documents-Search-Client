import { NavLink } from 'react-router';
import logo from '../../assets/Logo_DocFind.png'
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';



const Navbar: React.FC = () => {
   const [menuOpen, setMenuOpen]= useState(false)
   const toggleMenu = ()=> setMenuOpen(!menuOpen)
   const closeMenu = ()=> setMenuOpen(false)

   
    const NavLinks = <>
        <li><NavLink
            to="/" onClick={closeMenu} style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive }: { isActive: boolean}) =>
             isActive ? "text-orange-600 underline" : ""
            }
            
        >
            Home
        </NavLink></li>
        <li><NavLink 
            to="/search-docs" onClick={closeMenu} style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive}: { isActive: boolean}) =>
            isActive ? "text-orange-600 underline" : ""
            }
            
        >
            Search Documents
        </NavLink></li>





    </>
    return (
        <div>
            <div className='shadow-lg bg-base-100 fixed top-0 left-0 right-0 z-50'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <button className='btn btn-ghost lg:hidden' onClick={toggleMenu} aria-label='Toggle-Menu'>

                            {
                                menuOpen ? (
                                    <IoMdClose className="text-3xl text-orange-600" />
                                ):(
                               <FiAlignJustify className="text-2xl text-orange-600" />
                                )
                            }

                        </button>
                        <img className='h-14 w-20  hidden lg:block ml-10' src={logo} alt="Logo" />
                    </div>

                    <img className='h-14 w-28 block md:block lg:hidden' src={logo} alt="Logo" />
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex lg:mr-5 space-x-1">



                    </div>
                </div>
                {
                menuOpen && (
                    <div className='absolute top-full left-4 bg-base-100 border border-orange-500 shadow-md rounded-lg lg:hidden w-60 animate-slideDown'> 
                    <ul className='menu p-4 space-y-2  '> {NavLinks} </ul>
                    </div>
                )

            }
            </div>
            
        </div>
    );
};

export default Navbar;