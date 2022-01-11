
// REACT_APP_BASEURL=https://staging-pdp.herokuapp.com/api
import React from 'react';
import { Link, Navigate, useLocation } from "react-router-dom";
import useForm from '../../hooks/useForm';
import { registerUser } from '../../api/endpoints/auth';
import { UserContext } from '../../context/userContext';

export default function Register() {

    const { user, setUser } = React.useContext(UserContext);
    const location = useLocation()

    // create form states
    const [credentials, setCredentials] = useForm({
        username: "",
        email: "",
        password: "",
    })

    // create login states
    const [registerState, , setRegisterState] = useForm({
        isLoading: false,
        isAuthenticated: false,
        hasError: false,
        message: ''
    })

    //create a function to toggle hasError
    const toggleHasError = () => {
        setRegisterState({
            ...registerState,
            hasError: !registerState.hasError,
            message: ''
        })
    }

    // handle form submit
    const handleSubmit = async e => {
        e.preventDefault();

        //set isLoading to true
        setRegisterState(registerState => ({
            ...registerState,
            isLoading: true,
            hasError: false,
            isAuthenticated: false,
            message: '',
        }))

        const user = await registerUser(credentials)
        //set isLoading to false then set hasError to true if there is an error
        if (user === (null || undefined)) {

            // force return to false
            return setRegisterState(registerState => ({
                ...registerState,
                isLoading: false,
                hasError: true,
                message: '',
            }))
        }
        //set isLoading to false then set isAuthenticated to true if there is no error
        setRegisterState(registerState => ({
            ...registerState,
            isLoading: false,
            hasError: false,
            isAuthenticated: true,
            message: 'Register Successful'
        }))

        //update user context after 1sec of delay
        setTimeout(() => setUser(user), 1000)

        //save token to local storage
        localStorage.setItem('token', user.token)

    }

    if (user && user.token) return <Navigate to={location.state.from.pathname} state={{ from: location }} />
    return (
        <div className='overflow-hidden'>
        <div className=" h-screen w-full flex flex-wrap bg-bgLogin">
          <div className="w-full md:w-1/2 flex flex-col 2xl:px-24">
            <div className="px-5 2xl:px-16 flex flex-col justify-center md:justify-start my-auto md:pt-0 bg-white mx-5">
              <p className="text-center pt-5 text-3xl">Register</p>

                        {
                            registerState.hasError &&
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{registerState.message}</span>
                                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                    <svg onClick={toggleHasError} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                </span>
                            </div>
                        }
                        {
                            registerState.isAuthenticated &&
                            <div className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                <p>{registerState.message}</p>
                            </div>
                        }

                        <form className="flex flex-col " onSubmit={handleSubmit}>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="name" className="text-lg">Name</label>
                                <input
                                    name="username"
                                    type="text"
                                    onChange={setCredentials}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg">Email</label>
                                <input type="email" name="email"
                                    onChange={setCredentials} placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg">Password</label>
                                <input type="password" name="password"
                                    onChange={setCredentials} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            {/* <div className="flex flex-col pt-4">
                                <label htmlFor="confirm-password" className="text-lg">Confirm Password</label>
                                <input
                                    name="password1"
                                    type="password"
                                    placeholder="Password"
                                    onChange={setCredentials}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div> */}
                            <button className="bg-black text-white rounded font-bold text-lg hover:bg-gray-700 p-2 mt-8" type="submit">Register</button>
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p>Already have an account?<Link to="/login" className="underline font-semibold">Login Here!</Link></p>
                        </div>
                    </div>
                </div>
                <div className="flex-col sm:w-1/2 justify-center h-screen justify-self-center md:block m-auto md:pt-16 hidden">
                    <img className="object-cover rounded-3xl h-full w-screen" alt="" src="./images/socialdistancing.jpg" />
                </div>
            </div>
        </div>
    )
}
