import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../../context/userContext.js";

import NotificationDropdown from "../components/NotificationDropdown.js";
import UserDropdown from "../components/UserDropdown.js";

export default function SideNav() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const { user, setUser } = React.useContext(UserContext);
  const location = useLocation();

  const isActive = React.useCallback(
    (path) =>
      path === location.pathname.split("/").pop() ? "text-pink-500" : "",
    [location.pathname]
  );

  return (
    <>
      <nav className="md:overflow-y-scroll overflow-hidden md:left-0 md:block md:fixed md:top-0 md:bottom-0  md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-bgstreamImage flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            KITA APP
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link to="/home" className="flex flex-none items-center">
                    <i className="mdi mdi-eye-circle-outline mdi-24px"></i>
                    <span className="m-5">KITA</span>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}

            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={`${isActive(
                    "dashboard"
                  )} text-xs uppercase py-3 font-bold block`}
                  to="/dashboard"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={`${isActive(
                    "profile"
                  )} hover:text-blueGray-500 text-xs uppercase py-3 font-bold block`}
                  to="/dashboard/profile"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Profile
                </Link>
              </li>
              {(user.role === "SUPER_ADMIN" || user.role === "ADMIN") && (
                <>
                  <li className="items-center">
                    <Link
                      className={`${isActive(
                        "accounts"
                      )} stext-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block`}
                      to="/dashboard/accounts"
                    >
                      <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                      Accounts
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={`${isActive(
                        "violation"
                      )} stext-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block`}
                      to="/dashboard/violation"
                    >
                      <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                      Violations
                    </Link>
                  </li>
                  <li className="inline-flex">
                    <Link
                      className={`${isActive(
                        "violation-type"
                      )} stext-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block`}
                      to="/dashboard/violation-type"
                    >
                      <i className="fas fa-paint-brush mr-2 text-blueGray-400 text-base"></i>{" "}
                      Violation Type
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Transactions
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  className={`${isActive(
                    "stream"
                  )} stext-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block`}
                  to="/dashboard/stream"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray-400 text-base"></i>{" "}
                  Stream
                </Link>
              </li>

              {(user.role === "SUPER_ADMIN" || user.role === "ADMIN") && (
                <>
                  <li className="inline-flex">
                    <Link
                      className={`${isActive(
                        "violators"
                      )} stext-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block`}
                      to="/dashboard/violators"
                    >
                      <i className="fab fa-css3-alt mr-2 text-blueGray-400 text-base"></i>{" "}
                      Violators
                    </Link>
                  </li>
                  <li className="inline-flex">
                    <Link
                      className={`${isActive(
                        "events"
                      )} stext-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block`}
                      to="/dashboard/events"
                    >
                      <i className="fab fa-css3-alt mr-2 text-blueGray-400 text-base"></i>{" "}
                      Events
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
