import { useEffect } from "react";
import Banner from "../components/Banner";


const HomePage: React.FC = () => {
     useEffect(()=>{
        document.title = "DocFind | Home"
      },[]);
    return (
       <>
       <Banner/>
       </>
    );
};

export default HomePage;