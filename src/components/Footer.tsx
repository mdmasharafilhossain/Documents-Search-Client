import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaGooglePlus,
  FaCaretRight,
} from "react-icons/fa";
import { FaSquareTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router";


const Footer:React.FC = () => {
  return (
    <div className='bg-gray-50 border-t border-gray-200  py-10'>
      <footer className='max-w-7xl mx-auto px-4 flex flex-col items-center text-center space-y-8 '>
      <div className='w-28'>
        
            
        <img  src="https://i.ibb.co.com/tPkvfHL0/Logo-Doc-Find.png" alt="DocFind Logo" />
    </div>
        <nav className='flex flex-wrap items-center justify-center gap-4 font-medium'>
          
          <Link
            to='/search-docs'
            className='flex items-center text-gray-700 hover:text-[#ff3811] text-xl'
          >
            <FaCaretRight />
            Documents
            <span className='border border-[#ff3811] rounded-lg ml-1'>
              Search
            </span>
          </Link>

        </nav>
        <nav>
          <div className='grid grid-flow-col gap-4'>
            <a href='/DocFind/google' className=' hover:text-gray-400'>
              <FaGooglePlus className=' text-3xl text-orange-500' />
            </a>
            <a href='/DocFind/instagram' className=' hover:text-gray-400'>
              <FaInstagram className=' text-3xl text-orange-500' />
            </a>
            <a href='/DocFind/facebook' className=' hover:text-gray-400'>
              <FaFacebookSquare className=' text-3xl text-orange-500' />
            </a>
            <a href='/DocFind/pinterest' className=' hover:text-gray-400'>
              <FaPinterestSquare className=' text-3xl text-orange-500 hover:text-orange-500' />
            </a>
            <a href='/DocFind/twitter' className=' hover:text-gray-400'>
              <FaSquareTwitter className=' text-3xl text-orange-500' />
            </a>
          </div>
        </nav>
        

        <aside>
          <p>Copyright  &copy; {new Date().getFullYear()} - All rights reserved by{" "} <span className="font-semibold text-[#ff3811]">DocFind</span></p>
        </aside>
      </footer>
     
    </div>
  );
};

export default Footer;