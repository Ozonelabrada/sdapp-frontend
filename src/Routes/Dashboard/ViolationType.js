import React, { useEffect, useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link, useLocation } from "react-router-dom";
import { deleteViolation } from "../../api/endpoints/violation.js";
import { UserContext } from "../../context/userContext.js";
import toast from "react-hot-toast";
import useForm from "../../hooks/useForm.js";
import { registerUser } from "../../api/endpoints/auth.js";
import {
  findAllViolationType,
  findOwnViolationType,
  storeViolationType,
} from "../../api/endpoints/violType.js";
import moment from "moment";

const ViolationType = () => {
  const [violationsType, setViolationsType] = useState([]);
  const { user, setUser } = React.useContext(UserContext);
  const [openTab, setOpenTab] = React.useState(1);

  const location = useLocation();
  // create form states
  const [typeCredentials, setTypeCredentialValues, setTypeCredentials] =
    useForm({
      type: "",
      description: "",
      creator_id: "",
    });

  // create register states
  const [registerState, , setRegisterState] = useForm({
    isLoading: false,
    isAuthenticated: false,
    hasError: false,
    message: "",
  });
  // handle form submit
  const handleSubmitViol = async (e) => {
    e.preventDefault();

    //set isLoading to true
    setRegisterState((registerState) => ({
      ...registerState,
      isLoading: true,
      hasError: false,
      isAuthenticated: false,
      message: "",
    }));

    const violType = await storeViolationType(typeCredentials);
    //set isLoading to false then set hasError to true if there is an error
    if (violType === (null || undefined)) {
      // force return to false
      toast.error("Saving  Failed!");

      return setRegisterState((registerState) => ({
        ...registerState,
        isLoading: false,
        hasError: true,
      }));
    }
    toast.success("Successfully Saved!");
    setTypeCredentials({});
    setViolationsType((violationsType) => {
      if (violationsType.includes(violType) === false)
        violationsType.push(violType);
      return violationsType;
    });
    //set isLoading to false then set isAuthenticated to true if there is no error
    setRegisterState((registerState) => ({
      ...registerState,
      isLoading: false,
      hasError: false,
      isAuthenticated: true,
    }));
  };
  React.useEffect(() => {
    if (["SUPER_ADMIN", "ADMIN"].includes(user.role)) {
      findAllViolationType().then(setViolationsType);
    } else {
      findOwnViolationType().the(setViolationsType);
    }
  }, []);

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
        <div className="relative bg-bgAboutR pb-10 pt-14 h-screen">
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
                            ? "text-white bg-pink-400"
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
                            ? "text-white bg-pink-400"
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
                  <div className="h-full relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div
                          className={openTab === 1 ? "block" : "hidden"}
                          id="link1"
                        >
                          <div className="w-full mb-12 xl:mb-0 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                              <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">
                                     List of Violation Type
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
                              <div className="block w-full overflow-y-scroll" style={{maxHeight:500}}>
                                {/* Projects table */}
                                <table className="items-center w-full bg-transparent border-collapse">
                                  <thead>
                                    <tr>
                                      <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        ID
                                      </td>
                                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Type
                                      </th>
                                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Description
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
                                    {violationsType.map((violationType) => (
                                      <tr key={violationType.id}>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {violationType.id}
                                        </td>
                                        <td className="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {violationType.type}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {violationType.description}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {moment(violationType.created_at).format("lll")}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          
                                        <button
                                            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mdi mdi-pencil-box"
                                            title="View"
                                            onClick={() =>
                                              handleViewViolation(violationType)
                                            }
                                          ></button>
                                          {(user.role === "SUPER_ADMIN" ||
                                            user.id ===
                                              violationType.creator_id) && (
                                            <button
                                              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mdi mdi-delete-circle inline-flex"
                                              title="Remove"
                                              onClick={() =>
                                                handleDeleteViolation(
                                                  violationType.id
                                                )
                                              }
                                            ></button>
                                          )}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={openTab === 2 ? "block" : "hidden"}
                          id="link2"
                        >
                          <div className="font-sans antialiased bg-grey-lightest">
                            {/* Content */}
                            <div className="w-full bg-gray-200">
                              <div className="container mx-auto py-5">
                                <div className="font-bold py-4 px-8 text-black text-xl border-b border-grey-lighter m-auto">
                                  Add Violation Type
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
                                          name="type"
                                          onChange={setTypeCredentialValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          placeholder="Violation Type Here..."
                                        />
                                      </div>
                                    </div>
                                    <div className="flex mb-4">
                                      <div className="w-full ml-1">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="last_name"
                                        >
                                          Description
                                        </label>
                                        <textarea
                                          required
                                          onChange={setTypeCredentialValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="description"
                                          type="text"
                                          rows={5}
                                          placeholder="Description here..."
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between m-auto w-80">
                                      <button
                                        type="submit"
                                        className="bg-pink-400 w-full hover:bg-gray-200 text-gray-700 font-bold  py-2 px-4 rounded-full"
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
