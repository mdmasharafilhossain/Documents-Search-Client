/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { type FormData, type SearchProps } from "../types";
import useAxios from "../utilis/useAxios";


export default function SearchField({setLoading, setError, setUserResponse}: SearchProps){
    
    const {register,handleSubmit,reset,formState: { errors }}=useForm<FormData>()
     
    const onSubmit = async(data:FormData)=>{
        setLoading(true)
        setError("")
        setUserResponse(null)

        try{

            const res = await useAxios.post('/generate-result',{SearchQuery:data.SearchQuery})
            setUserResponse(res.data)

        }catch(err:any){
            console.log(err);
            setError("Something went wrong. Please try again...");
        }finally{
            setLoading(false)
            reset()
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-[350px] sm:w-96 md:w-2xl lg:w-[1000px] bg-white shadow-lg rounded-2xl p-6 border border-orange-200 transition-all duration-300 hover:shadow-orange-300">
            <label className="block text-orange-700 mb-2 font-semibold text-lg">
               Enter your  query
            </label>

            <input
            {...register("SearchQuery",{required:true})} placeholder="Example: contract, employment law..."
            className="border-2 border-orange-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <button type="submit" className="mt-5 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded-lg w-full transition-all duration-200">
                Search
            </button>
 {errors.SearchQuery && (
          <p className="text-red-500 text-sm mt-2 ml-1">{errors.SearchQuery.message}</p>
        )}
        </form>
    )
    
}