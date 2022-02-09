import React, { useEffect, useState } from "react";
import { UserContext } from "../../context/userContext.js";
import moment from "moment";
import ShowEvents from "./modals/ShowEvents.js";
import { findAllEvent, findOwnEvent } from "../../api/endpoints/event.js";
import { Link } from "react-router-dom";
import UserDropdown from "./components/UserDropdown.js";

const Events = () => {
  const [events, setEvents] = useState([]);
  const { user, setUser } = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);
  const [openTab, setOpenTab] = React.useState(1);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  React.useEffect(() => {
    findAllEvent().then(setEvents);
  }, []);
  const handleShowModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };
  return (
    <>
      {showModal && selectedEvent !== null && (
        <ShowEvents
          show={{ showModal, setShowModal }}
          data={{ selectedEvent, setSelectedEvent, setEvents }}
        />
      )}

      <div className="relative md:ml-64 bg-blueGray-100 ">
        <nav className="absolute left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <Link
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              to="/profile"
              onClick={(e) => e.preventDefault()}
            >
              Events
            </Link>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex"></ul>
          </div>
        </nav>
        {/* Header */}
        <div className="relative bg-bgAboutR pb-32 h-screen">
          <div className="px-4 md:px-10 mx-auto w-full pt- pt-28">
            <div>
              {/* Card Body*/}
              <div className=" h-auto flex flex-col min-w-0 break-wordsw-full mb-6 rounded">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">
                          List of Events
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
                  <div
                    className="block w-full overflow-y-scroll"
                    style={{ maxHeight: 500 }}
                  >
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Type
                          </td>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Email
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Activity
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Date Created
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map((event) => (
                          <tr key={event.id}>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {event.event_type}
                            </td>
                            <td className="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {event.user.email}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {event.activity}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {moment(event.created_at).format("lll")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
