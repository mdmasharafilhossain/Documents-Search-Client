/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SearchField from "../components/SearchField";
import ShowResult from "../components/ShowResult";


const SearchDocs:React.FC = () => {
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState("")
    const [UserResponse,setUserResponse]= useState<any>(null)
    return (
        <div className="mt-10 min-h-screen bg-white flex flex-col justify-center items-center px-4 py-10">
           <div className="text-center mb-8">
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-orange-600 mb-3">
                  Search Documents 
              </h1>
              
              <div className="w-full max-w-5xl">
                <SearchField setError={setError} setLoading={setLoading} setUserResponse={setUserResponse}/>

              </div>

              {
                loading && (
                    <p className="mt-6 text-orange-600 font-medium">
                        Searching documents, Please wait...
                    </p>
                )
              }
              {
                error && (
                    <p className="mt-6 text-red-500 font-medium">{error}</p>
                )
              }
              {
                UserResponse && (
                    <div className="w-full flex justify-center">
                        <ShowResult  SummaryResult={UserResponse}/>
                    </div>
                )
              }
           </div>
        </div>
    );
};

export default SearchDocs;