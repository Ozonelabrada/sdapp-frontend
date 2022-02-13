import moment from "moment";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { findAllUser } from "../../api/endpoints/user";
import { findAllViolation } from "../../api/endpoints/violation";
import { findAllViolator } from "../../api/endpoints/violator";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function Dashboard() {
  const [violations, setViolations] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [violators, setViolators] = React.useState([]);

  useEffect(() => {
    findAllViolation().then(setViolations);
    findAllUser().then(setUsers);
    findAllViolator().then(setViolators);
  }, []);
  // if(violators.created_at === )
  return (
    <div className="h-screen overflow-y-auto">
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <a
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Dashboard
            </a>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              {/* <UserDropdown /> */}
            </ul>
          </div>
        </nav>
        {/* Header */}
        <div className="relative bg-gray-600 md:pt-10 md:pb-20 pb-24">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4 md:pb-6">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            VIOLATONS Registered
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                            {violations.length}
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                            <i className="far fa-chart-bar"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-blueGray-400 mt-4">
                        <span className="text-emerald-500 mr-2">
                          <i className="fas fa-arrow-up"></i> 3.48%
                        </span>
                        <span className="whitespace-nowrap">
                          Since last month
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Violators
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                            {violators.length}
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-400">
                            <i className="fas fa-chart-pie"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-blueGray-400 mt-4">
                        <span className="text-emerald-500 mr-2">
                          <i className="fas fa-arrow-up"></i>5
                        </span>
                        <span className="whitespace-nowrap italic">
                          (Violators Today)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Users
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                            {users.length}
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                            <i className="fas fa-users"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-blueGray-400 mt-4">
                        <span className="text-orange-500 mr-2">
                          <i className="fas fa-arrow-down"></i> 1.10%
                        </span>
                        <span className="whitespace-nowrap">
                          Since yesterday
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Events
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                            49,65%
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                            <i className="fas fa-percent"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-blueGray-400 mt-4">
                        <span className="text-emerald-500 mr-2">
                          <i className="fas fa-arrow-up"></i> 12%
                        </span>
                        <span className="whitespace-nowrap">
                          Since last month
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap md:mt-10 mt-2">
              {/* violators log */}
            <div className="w-full flex px-4 h-10 md:h-full ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        Violators Log
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        See all 
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-full h-60 md:h-96 overflow-x-auto">
                  {/* Projects table */}
                  {violators.length >= 1 ?(
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Location
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Date and Time
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Violatiors Involve
                        </th>
                        {/* <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Enforcer Lookout
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {violators.map((violator) => (
                        <tr>
                          <th
                            key={violator.id}
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            {violator.snapshot}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {moment(violator.timestamp).format("lll")}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {violator.involve_count}
                          </td>
                          {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            {violator.user.email}
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  ):(
                    <div className="bg-blue-100 w-full border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                    <p className="font-bold">Informational Message!</p>
                    <p className="text-sm">No Violators to Display.</p>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
          <footer className="flex ">
            <div className="container mx-auto px-4">
              <hr className="mb-4 " />
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-5/12 px-4">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Copyright © {new Date().getFullYear()}{" "}
                    <Link
                      to="/dashboard"
                      className=" m-auto text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                    >
                      KITA APP (Social Distancing Application)
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-7/12 px-4">
                  <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                    <li>
                      <Link
                        to="/"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/stream"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        Stream
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/violation"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        Violations
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
