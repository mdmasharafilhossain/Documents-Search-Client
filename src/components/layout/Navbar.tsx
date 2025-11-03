import { NavLink } from 'react-router';
import logo from '../../assets/Logo_DocFind.png'
import { FiAlignJustify } from "react-icons/fi";


const Navbar: React.FC = () => {
    

    
    const NavLinks = <>
        <li><NavLink
            to="/" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }:{isActive: boolean; isPending: boolean }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
        >
            Home
        </NavLink></li>
        <li><a href='#register'><NavLink
            to="/register" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }:{isActive: boolean; isPending: boolean }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
        >
           Search Documents
        </NavLink></a></li>
       
      
        
        

    </>
    return (
        <div>
            <div className='shadow-lg bg-base-100 fixed top-0 left-0 right-0 z-50'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                             {NavLinks}
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