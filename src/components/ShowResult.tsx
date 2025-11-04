import type { ResultProps } from "../types"


export default function  ShowResult({SummaryResult }: ResultProps){
        if (!SummaryResult){
            return (
                <div className="text-center mt-10 text-gray-500">
                  No Result Found. Please Try Again...
                </div>
            )
        }
        const  {query, summary, results} = SummaryResult

        return (
            <div className="mt-8 w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg border border-orange-200 mx-auto">
                <h2 className="text-2xl font-bold text-orange-600 mb-3">
                    Search Summary For : {query}
                </h2>
              
                <div className="bg-orange-50 p-4 rounded-xl mb-5 border border-orange-100">
                    <h3 className="text-lg font-semibold text-orange-700 mb-2">

                        Summary Overview:
                    </h3>
                    <p className="text-gray-800 leading-relaxed">{summary} </p>


                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Relevant Legal Documents:

                </h3>
                {
                    results.length > 0 ? (
<ul className="space-y-3">
                {
                    results.map((doc)=>(
                        <li
                        key={doc.id}
                        className="bg-orange-100 border border-orange-200 rounded-xl p-4 hover:bg-orange-200 transition duration-200"
                        >
                            <h4 className="font-bold text-orange-700 mb-1">
                                {doc.title}
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {doc.content}
                            </p>

                            
                        </li>
                    )
                )
                    
                }

                  </ul> 
                    ): (
                     <p className="text-gray-500">
                        No Documents Found. Try Again...
                     </p>
                    )
                }



            </div>
        )
}

