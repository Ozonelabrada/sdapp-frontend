import React from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";
import UpdateProfile from "./modals/UpdateProfile.js";

export default function Profile() {
  const { user } = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      {showModal && <UpdateProfile 
      show={{ showModal, setShowModal }}
      />}
      <div className="relative md:ml-64 bg-blueGray-100 ">
        <nav className="absolute left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <Link
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              to="/profile"
              onClick={(e) => e.preventDefault()}
            >
              Profile
            </Link>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          </div>
        </nav>
        {/* Header */}
        <div className="relative bg-bgAboutR pb-32 h-screen">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card Body*/}
              <div className="font-sans md:pt-20 antialiased text-gray-900 leading-normal tracking-wider bg-cover">
                <div className="flex items-center lg:h-screen flex-wrap mx-auto lg:my-0">
                  {/* <!--Main Col--> */}
                  <div className="w-full lg:-mt-80 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                    <div className="p-4 md:p-12 text-center lg:text-left">
                      {/* <!-- Image for mobile view--> */}
                      <h1 className="text-3xl uppercase font-bold pt-8 lg:pt-0">
                        {user.first_name} {user.middle_name} {user.last_name}
                      </h1>
                      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                      <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                        <svg
                          className="h-4 fill-current text-green-700 pr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>{" "}
                        {user.username}
                      </p>
                      <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                        <svg
                          className="h-4 fill-current text-green-700 pr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                        </svg>
                        {user.email}
                      </p>
                      <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start italic">
                      <span class="mdi mdi-account-key mdi-18px h-4 fill-current text-green-700 pr-4"></span>
                        {user.role}
                      </p>
                      <p className="pt-8 text-sm">
                        It is not our differences that divide us. It is our inability to recodnize, accept, and celebrate those differences. -Audre Lorde
                      </p>

                      <div className="pt-12 pb-8">
                        <button
                          onClick={() => setShowModal(true)}
                          className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                        >
                          Update Profile
                        </button>
                      </div>
                      <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                        {" "}
                      </div>
                    </div>
                  </div>
                  {/* 
                  <div className="w-3/4 lg:w-2/5 bg-white h-auto">
                    <img
                      className="fill-current rounded-none lg:rounded-lg shadow-2xl hidden lg:block "
                      alt=""
                      src="./images/anonymous.jpg"
                    />
                  </div>
                  <div className="absolute top-0 right-0 h-12 w-18 p-4">
                    <button className="js-change-theme focus:outline-none">
                      🌙
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
