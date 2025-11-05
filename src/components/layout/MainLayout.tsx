import type { IProps } from "../../types";
import Footer from "../Footer";
import Navbar from "./Navbar";





export default function MainLayout({ children }: IProps) {
    return (
        <div className=" min-h-screen flex flex-col">
            <Navbar />
           
            <div className="grow min-h-screen">{children}</div>
               <Footer/>
        </div>
    );
}