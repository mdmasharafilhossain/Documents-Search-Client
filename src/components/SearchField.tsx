/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { type FormData, type Props } from "../types";
import useAxios from "../utilis/useAxios";


export default function SearchField({setLoading, setError, setUserResponse}: Props){
    
    const {register,handleSubmit,reset}=useForm<FormData>()
     
    const onSubmit = async(data:FormData)=>{
        setLoading(true)
        setError("")
        setUserResponse(null)

        try{

            const res = await useAxios.post('/generate-result',{SearchQuery:data.SearchQuery})
            setUserResponse(res.data)

        }catch(err:any){
            console.log(err);
        }finally{
            setLoading(false)
            reset()
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white shadow-md rounded-2xl p-5">
            <label className="block text-gray-700 mb-2 font-medium">
               Enter your legal query
            </label>

            <input
            {...register("SearchQuery",{required:true})} placeholder="Example: contract, employment law..."
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-blue-500"
            />
            <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full transition">
                
            </button>

        </form>
    )
    
}