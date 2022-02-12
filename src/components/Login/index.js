import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { loginUser } from "../../api/endpoints/auth";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import landing_image from "./landing.webp";
import { BlockUxContext } from "../../context/BlockUx";

export default function Login() {
  const { user, setUser } = React.useContext(UserContext);
  const { setIsLoading } = React.useContext(BlockUxContext);
  const location = useLocation();

  // create form states
  const [credentials, setCredentials, setCredentialsValues] = useForm({
    email: "",
    password: "",
  });

  // create login states
  const [loginState, , setLoginState] = useForm({
    isLoading: false,
    isAuthenticated: false,
    hasError: false,
    message: "",
  });

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    //set isLoading to true
    setLoginState((loginState) => ({
      ...loginState,
      isLoading: true,
      hasError: false,
      isAuthenticated: false,
      message: "",
    }));
    const user = await loginUser(credentials);
    //set isLoading to false then set hasError to true if there is an error
    if (!user) {
      setIsLoading(false);
      // force return to false
      return setLoginState((loginState) => ({
        ...loginState,
        isLoading: false,
        hasError: true,
      }));
    } else setIsLoading(false);
    toast.success("Successfuly Logged in.");
    //set isLoading to false then set isAuthenticated to true if there is no error
    setLoginState((loginState) => ({
      ...loginState,
      isLoading: false,
      hasError: false,
      isAuthenticated: true,
    }));
    //update user context after 1sec of delay
    setTimeout(() => setUser(user), 1000);

    //save token to local storage
    localStorage.setItem("token", user.token);
  };

  //if token ang user context is not null, redirect to previous path
  if (user && user.token) {
    {
      return (
        <Navigate
          to={location.state?.from.pathname || "/dashboard"}
          state={{ from: location }}
        />
      );
    }
  }

  return (
    <div className="overflow-y-hidden">
      <div className="h-screen w-full flex flex-wrap bg-bgLogin pt-2">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="rounded px-5 2xl:px-16 flex flex-col justify-center md:justify-start my-auto md:pt-0 bg-gray-300 mx-5">
            <p className="text-left font-semibold pt-5 text-3xl">Login</p>
            <form
              className="flex flex-col pt-3 px-5 md:pt-8 pb-5"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  onChange={setCredentials}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={setCredentials}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                className="bg-gray-500 m-auto w-1/2  text-gray-800 rounded font-bold text-lg hover:bg-gray-200 p-2 mt-8"
                type="submit"
              >
                Log In
              </button>
            </form>
            <div className="text-center pt-12 pb-12">
              {/* <p>Don't have an account?<Link to="/register" className="underline font-semibold">Register Here!</Link></p> */}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:block m-auto md:pt-16 hidden">
          <img
            className="object-cover rounded-2xl h-screen inactive"
            alt=""
            src={landing_image}
          />
        </div>
      </div>
    </div>
  );
}
