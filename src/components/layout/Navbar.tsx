import { NavLink } from 'react-router';
import logo from '../../assets/Logo_DocFind.png'
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';


const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const NavLinks = <>
        <li><NavLink
            to="/" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
            onClick={() => setMenuOpen(false)}
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/search-docs" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
            onClick={() => setMenuOpen(false)}
        >
            Search Documents
        </NavLink></li>





    </>
    return (
        <div>
            <div className='shadow-lg bg-base-100 fixed top-0 left-0 right-0 z-50'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden"
                                onClick={toggleMenu}
                            >
                                {
                                    menuOpen ? (
                               <IoMdClose className='text-2xl text-orange-600' />
                                    ) : (
                               <FiAlignJustify className='text-2xl text-orange-600' />
                                    )
                                }

                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow bg-base-100 rounded-box w-60 border border-orange-500">
                                {NavLinks}
                                  <div className="flex justify-center mt-3">
                             
  </div>
                            </ul>
                          
                        </div>
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
            </div>
        </div>
    );
};

export default Navbar;