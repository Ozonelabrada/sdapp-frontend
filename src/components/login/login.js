import React from 'react'
const Login = () => {
    return (
        <div className="signIn-page bg-white justify- max-w-sm m-3">
            <br />
            <div className="w-full">
                <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-800 w-full mt-1" >Login</h2>
                <br />
                <p className="text-center text-sm leading-5 text-gray-600">Sign In with your account</p>
                <br />
                <form className="p-5">
                    <div className="flex justify-center">
                        <div className="w-full">
                            <label className="block uppercase tracking-wide to-gray-700 text-xs font-bold mb-2"
                                htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                id="email"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                required />

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full">
                            <label className="block uppercase tracking-wide to-gray-700 text-xs font-bold mb-2"
                                htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="**************"
                                id="password"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                required />

                        </div>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <div className="w-full">
                            <button
                                type="submit"
                                className="bg-blue-700 group w-full py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:border-teal-400 focus:shadow-ouline-teal active:bg-teal-400 active:outline-none transition duration-150 ease-in-out mb-10">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
            </div>
        </div>

    )
}

export default Login
