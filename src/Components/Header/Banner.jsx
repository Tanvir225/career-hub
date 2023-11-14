import user from "../../assets/images/user.png"
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="max-w-5xl mx-auto px-7 flex justify-center items-center flex-col  lg:flex-row lg:px-0">
                <div>
                    <h1 className="text-5xl leading-tight py-5 font-bold">One Step Closer To Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Dream Job</span></h1>
                    <p className="py-6 text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn  text-sm px-4 py-2 bg-gradient-to-r from-indigo-800 text-white">Get Started</button>
                </div>
                <div className=''>
                    <img src={user} className=" rounded-lg w-full" />
                </div>
            </div>
        </div>
    );
};

export default Banner;