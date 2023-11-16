import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
const Header = () => {
    return (
        <div className="bg-base-200">
            <div className='navbar py-5 px-0 md:max-w-5xl md:mx-auto md:px-4'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FiMenu></FiMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to={"/"} className='font-semibold' >Career<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Hub</span></NavLink>
                                <ul className="p-2 flex flex-col gap-2">
                                    <NavLink to={"/statistics"}>Statistics</NavLink>
                                    <NavLink to={"/jobs"}>All Jobs</NavLink>
                                    <NavLink to={"/"}>Blog</NavLink>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <NavLink to={"/"} className="btn -ml-6 btn-ghost font-extrabold text-2xl">Career<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Hub</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex lg:justify-center lg:items-center">
                    <ul className="menu menu-horizontal px-2 text-lg text-gray-500">
                        <NavLink className="mr-6" to={"/statistics"}>Statistics</NavLink>
                        <NavLink className="mr-6" to={"/jobs"}>All Jobs</NavLink>
                        <NavLink to={"/"}>Blog</NavLink>
                    </ul>
                </div>
                <div className="navbar-end mr-10">
                    <NavLink to={"/jobs"} className="btn text-sm px-4 py-2 bg-gradient-to-r from-indigo-800 text-white">Start Applying</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;