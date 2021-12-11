import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import api from '../../api';

// just follow the pattern
async function loginUser(credentials) {
  try {
    const res = await api.post(`/auth/login`, credentials);
    console.log(res)
  }
  catch (err) { console.error(err) }
}



export default function Login({ setToken }) {
  const [email, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(console.log(token));
  }

  return (
    <div>
      <div className="w-full flex flex-wrap bg-blue-200">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-2 md:pt-0 md:px-12 lg:px-16 bg-white lg:m-28 md:m-10">
            <p className="text-center pt-10 text-3xl">Login</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">Email</label>
                <input type="email" placeholder="your@email.com" onChange={e => setUserEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">Password</label>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <button className="bg-black text-white rounded font-bold text-lg hover:bg-gray-700 p-2 mt-8" type="submit">Log In</button>
            </form>
            <div className="text-center pt-12 pb-12">
              <p>Don't have an account?<Link to="/register" className="underline font-semibold">Register Here!</Link></p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl pb-10s flex flex-col justify-center md:justify-start my-auto h-screen">
          <img className="object-cover rounded-3xl inline-flex justify-self-center md:mt-15  h-5/6  md:block md:m-auto md:w-3/4" alt="" src="./images/socialdistancing.jpg" />
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};