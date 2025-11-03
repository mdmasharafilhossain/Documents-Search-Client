

const Banner: React.FC = () => {
    return (
        <div>
            
            <div className="mt-10">
                <div className="hero w-full h-screen object-cover" style={{ backgroundImage: 'url(https://i.ibb.co.com/8nBcrHXz/Banner-Final.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-6xl font-bold text-center">Welcome to <span className="text-orange-400">DocFind</span> </h1>
                            <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-200 leading-relaxed">
                                Empower your legal research with <span className="text-orange-400 font-semibold">DocFind</span> your
                                intelligent companion for searching, analyzing, and summarizing complex legal documents. Whether
                                you’re a student, lawyer, or researcher, DocFind helps you find the right information faster,
                                smarter, and easier.
                            </p>
                             <button className="mt-6 px-6 py-3 bg-orange-400 text-white font-bold rounded-md hover:bg-orange-500 transition">
                              Start Searching
                             </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;