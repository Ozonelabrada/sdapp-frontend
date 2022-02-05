import React, { useEffect } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link, Outlet } from "react-router-dom";
import { useTime } from "react-timer-hook";
import { findAllViolator } from "../../api/endpoints/violator.js";
import moment from "moment";

export default function Stream() {
  const locale = "en";
  const [today, setDate] = React.useState(new Date());
  const [violators, setViolators] = React.useState([]);

  useEffect(()=>{
    findAllViolator().then(setViolators);
  })
  const {
    // seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: "12-hour" });
  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);
  // const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `Date: ${today.toLocaleDateString(
    locale,
    { month: "long" } - { year: "long" }
  )}\n\n`;

  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center ">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap px-4">
            {/* Brand */}
            <Link
              className="pt-4 text-white text-sm uppercase hidden lg:inline-block font-semibold"
              to="/dashboard/stream"
              onClick={(e) => e.preventDefault()}
            >
              Stream
            </Link>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          </div>
        </nav>
        {/* Header */}
        <div className="relative bg-bgAboutR pb-32 h-screen">
          <div className="mx-auto w-full">
            {/* Card Body*/}
            <div className="w-full h-screen md:flex md:flex-wrap bg-blue-200 ">
              <div className=" xl:w-2/3 w-full flex flex-col">
                <div
                  id=""
                  className="relative md:h-4/6 h-screen w-full px-2 mr-auto ml-auto mt-14 sm:mt-20"
                >
                  <iframe
                    className="md:relative w-full md:pr-0 h-full"
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="text-right md:pt-10 mr-28 to-black md:text-lg cursor-pointer md:hover:to-gray-400">
                  <Link to="/gallery">
                    G A L L E R Y <i class="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="sm:w-full hidden xl:block md:w-1/3 md:pb-10 md:h-screen ">
                <div className="col-auto bg-bgstreamImage w-full -mt-3 h-1/2 uppercase -mb-4">
                  <div className="pt-5 font-bold pl-2 grid-rows-1">
                    <span>{date}</span>
                  </div>
                  <div className="pl-2 font-bold grid-rows-1">
                    Time: <span>{hours}</span>:<span>{minutes}</span>{" "}
                    <span>{ampm}</span>
                  </div>
                  <div className="w-1/2pb-10s flex flex-col justify-center md:justify-start my-auto h-3/4">
                    <img
                      className="object-cover  inline-flex justify-self-center md:mt-15  h-5/6  md:block md:m-auto md:w-3/4"
                      alt=""
                      src="../images/socialdistancing.jpg"
                    />
                  </div>
                </div>
                <div className="md:col-auto bg-black md:w-full h-3/5 text-white overflow-y-auto">
                  <div className="text-center h-3/6">
                    <div className="md:col-span-3 border-white md:py-2 md:inline-flex md:justify-self-center md:h-auto uppercase">
                      {date}
                    </div>
                    <table className="md:table-auto border-collapse border border-gray-400 w-full md:col-span-full md:py-3 md:mb-2 md:text-lg text-sm">
                      <thead className="md:py-2">
                        <tr>
                          <th className="border border-gray-300 ...">
                            TIME OF VIOLATION:
                          </th>
                          <th className="border border-gray-300 ...">
                            NUMBER OF VIOLATORS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          violators.map((violator)=>(
                        <tr key={violator.id}>
                          <td className="border border-gray-300 ...">
                          {moment(violator.timestamp).format("LT")}
                          </td>
                          <td className="border border-gray-300 ...">
                            {violator.involve_count}
                          </td>
                        </tr>
                          )
                          )}
                      </tbody>
                    </table>
                  </div>
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
