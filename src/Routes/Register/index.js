import React from 'react'
import { Link } from "react-router-dom";

const Register = props => {
    return (
        <div>
            <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{ __html: "\n        @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');\n\n        .font-family-karla {\n            font-family: karla;\n        }\n    " }} />
            <div className="w-full flex flex-wrap">
                {/* Register Section */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                        <a href="#" className="bg-black text-white font-bold text-xl p-4" alt="Logo">Logo</a>
                    </div>
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Join Us.</p>
                        <form className="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
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
                {/* Image Section */}
                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
                </div>
            </div>
        </div>

    )
}

Register.propTypes = {

}

export default Register
