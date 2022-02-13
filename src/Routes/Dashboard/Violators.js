import React, { useState } from "react";
import moment from "moment";
import { deleteViolator} from "../../api/endpoints/violator.js";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { findAllViolator } from "../../api/endpoints/violator.js";

const Violators = () => {
  const [violators, setViolators] = useState([]);

  React.useEffect(() => {
      findAllViolator().then(setViolators);
  }, []);

  const handleDelete = (id) => {
    deleteViolator(id).then((res) => {
      if (res) {
        setViolators((violators) =>
          violators.filter((violator) => violator.id !== res.id)
        );
        toast.success("Successfully Deleted!");
      } else toast.error("You do not have permission to delete!");
    })
  }
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100 ">
        <nav className="absolute left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <Link
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              to="/profile"
              onClick={(e) => e.preventDefault()}
            >
              Violators
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
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        List of Violators
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
                  {violators.length >= 1 ? (
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Violation
                        </td>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Snapshot
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Violators Count
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Date Created
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {violators.map((violator) => (
                        <tr key={violator.id}>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {violator.violation.name}
                          </td>
                          <td className="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {violator.snapshot  }
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {violator.involve_count}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {moment(violator.created_at).format("lll")}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              <button
                                className=" ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mdi mdi-delete-circle inline-flex"
                                title="Remove"
                                onClick={() => handleDelete(violator.id)}
                              ></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  ):(
                    <div class="bg-blue-100 w-full border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                    <p class="font-bold">Informational Message!</p>
                    <p class="text-sm">No Violators to Display.</p>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Violators;
