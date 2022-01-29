import React, { useEffect, useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link, useLocation } from "react-router-dom";
import {
  deleteViolation,
} from "../../api/endpoints/violation.js";
import { UserContext } from "../../context/userContext.js";
import toast from "react-hot-toast";
import useForm from "../../hooks/useForm.js";
import { registerUser } from "../../api/endpoints/auth.js";
import {
  findAllViolationType,
  findOwnViolationType,
} from "../../api/endpoints/violType.js";
import moment from "moment";

const ViolationType = () => {
  const [violationsType, setViolationsType] = useState([]);
  const { user, setUser } = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);
  const [openTab, setOpenTab] = React.useState(1);
 
  // handle form submit
  const handleSubmitViol = async (e) => {
    e.preventDefault();
  }
  React.useEffect(() => {
    if (["SUPER_ADMIN", "ADMIN"].includes(user.role)) {
      findAllViolationType().then(setViolationsType);
    }},[])  
  const handleViewViolation = (violation) => {
    toast.success(violation.description);
  };
  const handleDeleteViolation = (id) => {
    deleteViolation(id).then((res) => {
      if (res) {
        setViolationsType((violationType) =>
        violationsType.filter((violationType) => violationType.id !== res.id)
        );
        toast.success("Successfully Removed!");
      } else toast.error(" Deletion Failed Check Network Connection!");
    });
  };
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <Link
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              to="/violation-type"
              onClick={(e) => e.preventDefault()}
            >
              Violation Type
            </Link>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          </div>
        </nav>
        {/* Header */}
        <div className="relative bg-bgAboutR pb-10 pt-24 h-screen">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                  >
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                      <a
                        className={
                          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                          (openTab === 1
                            ? "text-white bg-gray-800"
                            : "text-gray-600 bg-white")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        Violation Type List
                      </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                      <a
                        className={
                          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                          (openTab === 2
                            ? "text-white bg-gray-800"
                            : "text-gray-600 bg-white")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                      >
                        Create Violation Type
                      </a>
                    </li>
                  </ul>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div
                          className={openTab === 1 ? "block" : "hidden"}
                          id="link1"
                        >
                          <div className="flex flex-wrap">
                            {(user.role === "ADMIN" ||
                              user.role === "SUPER_ADMIN") && (
                              <table className="min-w-full border-black block md:table ">
                                <thead className="block md:table-header-group">
                                  <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                      Violation ID
                                    </th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                      Type
                                    </th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                      Description
                                    </th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                    Created by
                                    </th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                      Date / Time
                                    </th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                {/* {violations.length > 0 && ( */}
                                <tbody className="block md:table-row-group w-full">
                                  {violationsType.map((violationType, index) => (
                                    <tr
                                      key={index}
                                      className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                                    >
                                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                          Violatpion ID
                                        </span>
                                        {violationType.id}
                                      </td>
                                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                          Type
                                        </span>
                                        {violationType.type}
                                      </td>
                                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                          Description
                                        </span>
                                        {violationType.description}
                                      </td>
                                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                          Created by
                                        </span>
                                        {violationType.creator.email}
                                      </td>
                                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                          Date / Time
                                        </span>
                                        {moment(violationType.created_at).format('lll')}
                                      </td>
                                      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">
                                          Actions
                                        </span>
                                        <button
                                          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mdi mdi-pencil-box"
                                          title="View"
                                          onClick={() =>
                                            handleViewViolation(violationType)
                                          }
                                        ></button>
                                        {(user.role === "SUPER_ADMIN" ||
                                          user.id === violationType.creator_id) && (
                                          <button
                                            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mdi mdi-delete-circle inline-flex"
                                            title="Remove"
                                            onClick={() =>
                                              handleDeleteViolation(
                                                violationType.id
                                              )
                                            }
                                          ></button>
                                        )}{" "}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                                {/* } */}
                              </table>
                            )}
                          </div>
                        </div>
                        <div
                          className={openTab === 2 ? "block" : "hidden"}
                          id="link2"
                        >
                          <div className="font-sans antialiased bg-grey-lightest">
                            {/* Content */}
                            <div className="w-full bg-gray-500">
                              <div className="container mx-auto py-8">
                                <div className="w-5/6 lg:w-3/4 mx-auto bg-white rounded shadow">
                                  <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter m-auto">
                                    Violation Entry
                                  </div>
                                  <div className="py-4 px-8">
                                    <form onSubmit={handleSubmitViol}>
                                      <div className="mb-4">
                                        <div className="mb-4"></div>
                                      </div>
                                      <div className="flex mb-4">
                                        <div className="w-1/2 mr-1">
                                          <label
                                            className="block text-grey-darker text-sm font-bold mb-2"
                                            htmlFor="type"
                                          >
                                            Violation Type
                                          </label>
                                          <input
                                            required
                                            type="text"
                                            name="type_id"
                                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            placeholder="violation type here"
                                          />
                                        </div>
                                        <div className="w-1/2 ml-1">
                                          <label
                                            className="block text-grey-darker text-sm font-bold mb-2"
                                            htmlFor="last_name"
                                          >
                                            Description
                                          </label>
                                          <textarea
                                            required
                                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            name="description"
                                            type="text"
                                            placeholder="description"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex mb-4">
                                        <div className="w-1/2 mr-1">
                                          <label
                                            className="block text-grey-darker text-sm font-bold mb-2"
                                            htmlFor="location"
                                          >
                                            Location
                                          </label>
                                          <input
                                            required
                                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            name="location"
                                            type="text"
                                            placeholder="location here"
                                          />
                                        </div>
                                        <div className="w-1/2 ml-1 hidden">
                                          <label
                                            disable="true"
                                            className="block text-grey-darker text-sm font-bold mb-2"
                                            htmlFor="last_name"
                                          >
                                            Creator{" "}
                                          </label>
                                          <input
                                            className=" appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            // value={user.id}
                                            name="creator_id"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex items-center justify-between m-auto w-80">
                                        <button
                                          type="submit"
                                          className="bg-blue-700 w-full hover:bg-blue-dark text-white font-bold  py-2 px-4 rounded-full"
                                          type="submit"
                                        >
                                          Create Now
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card stats */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViolationType;
