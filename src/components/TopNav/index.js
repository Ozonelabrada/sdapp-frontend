import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';
import { UserContext } from '../../context/userContext';
import userEvent from '@testing-library/user-event';

const TopNav = () => {
    const { setUser, user } = useContext(UserContext)
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div className="border-b-2">
            <nav className="lg:container text-gray-600 uppercase">
                <div className="flex justify-between">
                    <div className="flex-1 ml-10 font-extrabold leading-snug">
                        <Link to="/home" className="flex flex-none items-center"><i className="mdi mdi-eye-circle-outline mdi-24px"></i><span className="m-5">KITA</span></Link>
                    </div>
                    <div className="flex-1 flex justify-around items-center font-normal">
                        <Link to="/home" className="mx-5"><span className="hover:underline hover:opacity-75">Home</span></Link>
                        <Link to="/about" className="mx-5"><span className="hover:underline hover:opacity-75">About</span></Link>
                        <Link to="/gallery" className="mx-5"><span className="hover:underline hover:opacity-75">Gallery</span></Link>

                        {
                            (user && user.token)
                                ? <button
                                    onClick={handleLogout}
                                    className="bg-green-600 border-2 rounded-3xl px-5 py-2 text-white">
                                    <i className="mdi mdi-logout-variant"></i>
                                    Logout
                                </button>
                                : <Link to="/login" className="mr-5 flex items-center pr-4 hover:opacity-75"><span className="hover:underline hover:opacity-75">Login</span></Link>
                        }
                    </div>
                </div>

            </nav >
        </div >
    );
};

export default TopNav
