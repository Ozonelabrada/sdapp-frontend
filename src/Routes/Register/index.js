import React from 'react'
import { Link } from "react-router-dom";

const Register = props => {
    return (
        <div>
            <div className="w-full h-screen flex flex-wrap bg-blue-200">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex flex-col justify-center md:justify-start my-auto h-5/6 md:h-90 md:px-12 lg:px-16 bg-white lg:ml-28 lg:mr-28 md:m-auto">
                        <p className="text-center pt-4 text-3xl">Register</p>
                        <form className="flex flex-col " onsubmit="event.preventDefault();">
                            <div className="flex flex-col pt-4">
                                <label htmlFor="name" className="text-lg">Name</label>
                                <input type="text" id="name" placeholder="John Smith" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg">Email</label>
                                <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg">Password</label>
                                <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="confirm-password" className="text-lg">Confirm Password</label>
                                <input type="password" id="confirm-password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <input type="submit" defaultValue="Register" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p>Already have an account?<Link to="/login" className="underline font-semibold">Login Here!</Link></p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 shadow-2xl pb-10s">
                    <img className="object-cover rounded-3xl inline-flex justify-self-center md:mt-14  h-5/6  md:block md:m-auto md:w-3/4" alt="" src="./images/socialdistancing.jpg" />
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {

}

export default Register
