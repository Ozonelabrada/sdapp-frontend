import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';
import { UserContext } from '../../context/userContext';

const TopNav = () => {
    const { setUser, user } = useContext(UserContext)
    const [showMenu, setShowMenu] = React.useState(false)

    //create function to toggle menu
    const toggleMenu = () => {
        setShowMenu(showMenu => !showMenu)
    }
    const handleLogout = () => {
        setUser(null)
        localStorage.clear()
    }
    return (
        <div className="container text-gray-600 md:fixed md:bg-transparent md:w-screen">
            <nav className="flex border-b-2 items-center justify-between flex-wrap text-xl w-screen">
                <div className="flex md:items-center flex-shrink-0 md:ml-10 ml-2">
                    {
                        user?.token
                            ? <Link to="/stream" className="flex flex-none items-center font-semibold text-xl tracking-tight"><i className="mdi mdi-eye-circle-outline mdi-36px"></i><span className="m-5">KITA</span></Link>
                            : <Link to="/home" className="flex flex-none items-center font-semibold text-xl tracking-tight"><i className="mdi mdi-eye-circle-outline mdi-36px"></i><span className="m-5">KITA</span></Link>
                    }

                </div>
                <div className="block md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-green-600 border-green-400 hover:text-black hover:border-black md:pr-10"
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full ${showMenu ? "block" : "hidden"} md:flex md:items-center md:w-auto`}>
                    <div className="md:flex-grow md:font-normal font-semi-bold pl-6">
                        {(user && user.token) && (<Link to="/dashboard" className="block md:inline-block"><span className="hover:underline hover:opacity-75 m-auto px-5">Dashboard</span></Link>)}
                        <Link to="/home" className="block md:inline-block"><span className="hover:underline hover:opacity-75 m-auto px-5">Home</span></Link>
                        <Link to="/about" className="block md:inline-block "><span className="hover:underline hover:opacity-75 m-auto px-5">About</span></Link>
                        <Link to="/gallery" className="block md:inline-block"><span className="hover:underline hover:opacity-75 m-auto px-5">Gallery</span></Link>
                    </div>
                    <div className='pr-10'>
                        {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded   hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
                        {
                            (user && user.token)
                                ? <button
                                    onClick={handleLogout}
                                    className="bg-gray-500 border-1 rounded px-3 py-1 text-white hover:text-gray-900 hover:bg-gray-200 m-auto">
                                    <i className="mdi mdi-logout-variant mx-auto pr-1"></i>
                                    Logout
                                </button>
                                : <Link to="/login" className="block md:inline-block m-auto p-5"><span className="hover:underline hover:opacity-75">Login</span></Link>
                        }
                    </div>
                </div>
            </nav>

        </div >
    );
};

export default TopNav
