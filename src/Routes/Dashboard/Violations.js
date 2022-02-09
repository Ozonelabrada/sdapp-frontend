import React, { useEffect, useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link, useLocation } from "react-router-dom";
import {
  findAllViolation,
  findOwnViolation,
  deleteViolation,
  storeViolation,
} from "../../api/endpoints/violation.js";
import { UserContext } from "../../context/userContext.js";
import toast from "react-hot-toast";
import UpdateViolation from "./modals/UpdateViolation.js";
import moment from "moment";
import {
  findAllViolationType,
  findOwnViolationType,
} from "../../api/endpoints/violType.js";
import useForm from "../../hooks/useForm.js";

const Violations = () => {
  const [violations, setViolations] = useState([]);
  const [violationsType, setViolationsType] = useState([]);
  const { user, setUser } = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);
  const [openTab, setOpenTab] = React.useState(1);
  const [selectedViolation, setSelectedViolation] = React.useState(null);

  React.useEffect(() => {
    findAllViolation().then(setViolations);
    findAllViolationType().then(setViolationsType);
  }, []);
  const handleShowModal = (violation) => {
    setSelectedViolation(violation);
    setShowModal(true);
  };
  const location = useLocation();
  // create form states
  const [violationValues, setViolationValues, setViolation] = useForm({
    type_id: null,
    description: "",
    location: "",
  });

  const handleSubmitViol = async (e) => {
    e.preventDefault();

    const viol = await storeViolation(violationValues);

    //set isLoading to false then set hasError to true if there is an error
    if (viol === (null || undefined)) {
      // force return to false
      toast.error("Saving Failed!");
    }
    toast.success("Successfully Created!");
    setViolation({});
    setViolations((violations) => {
      if (violations.includes(viol) === false) violations.push(viol);
      return violations;
    });
  };

  // delete violationtion
  const handleDeleteViolation = (id) => {
    deleteViolation(id).then((res) => {
      if (res) {
        setViolations((violations) =>
          violations.filter((violation) => violation.id !== res.id)
        );
        toast.success("Successfully Removed!");
      } else toast.error(" Deletion Failed Check Network Connection!");
    });
  };
  return (
    <>
      {showModal && selectedViolation !== null && (
        <UpdateViolation
          show={{ showModal, setShowModal }}
          data={{ selectedViolation, setSelectedViolation, setViolations }}
        />
      )}
      <div className="md:overflow-y-auto relative md:ml-64 bg-blueGray-100">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <Link
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              to="/violation"
              onClick={(e) => e.preventDefault()}
            >
              Violations
            </Link>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          </div>
        </nav>
        {/* Header */}
        <div className="relative bg-bgAboutR  pt-14 h-screen">
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
                        Violation List
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
                        Create Violation
                      </a>
                    </li>
                  </ul>
                  <div className=" h-auto flex flex-col min-w-0 break-words w-full mb-6 rounded">
                    <div className="flex-auto">
                      <div className="tab-content tab-space">
                        <div
                          className={openTab === 1 ? "block" : "hidden"}
                          id="link1"
                        >
                          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                              <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                  <h3 className="font-semibold text-base text-blueGray-700">
                                    List of Violations
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
                              className="h-full m-auto flex w-full overflow-y-scroll"
                              style={{ maxHeight: 500 }}
                            >
                              {/* Projects table */}
                              <table className="items-center h-full w-full bg-transparent border-collapse">
                                <thead>
                                  <tr>
                                    <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      ID
                                    </td>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Name
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Type
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Description
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Location
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Date Created
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Date Updated
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="h-full">
                                  {violations.map((violation) => (
                                    <tr key={violation.id}>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {violation.id}
                                      </td>
                                      <td className="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {violation.name}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {violation.type.type}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {violation.description}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {violation.location}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {moment(violation.created_at).format(
                                          "lll"
                                        )}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {moment(violation.updated_at).format(
                                          "lll"
                                        )}
                                      </td>
                                      {user.id === violation.creator_id ||
                                      user.role === "SUPER_ADMIN" ? (
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          <button
                                            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mdi mdi-pencil-box"
                                            title="Edit"
                                            onClick={() =>
                                              handleShowModal(violation)
                                            }
                                          ></button>
                                          <button
                                            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mdi mdi-delete-circle inline-flex"
                                            title="Delete"
                                            onClick={() =>
                                              handleDeleteViolation(
                                                violation.id
                                              )
                                            }
                                          ></button>
                                        </td>
                                      ) : (
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          <button
                                            className="ml-2 bg-gray-400  text-white font-bold py-1 px-2 border rounded mdi mdi-pencil-box"
                                            title="Edit Disabled"
                                          ></button>
                                          <button
                                            className="ml-2 bg-gray-400 text-white font-bold py-1 px-2 border  rounded mdi mdi-delete-circle inline-flex"
                                            title="Remove Disabled"
                                          ></button>
                                        </td>
                                      )}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
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
                              <div className="rounded-lg container mx-auto py-8">
                                <div className="py-4 font-bold px-8 text-black text-xl border-b border-grey-lighter m-auto">
                                  Add Violation
                                </div>
                                <div className="py-4 px-8">
                                  <form onSubmit={handleSubmitViol}>
                                    <div className="mb-4">
                                      <div className="mb-4"></div>
                                    </div>
                                    <div className="flex mb-4">
                                      <div className="w-full">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="type"
                                        >
                                          Violation Name
                                        </label>
                                        <input
                                          required
                                          type="text"
                                          name="name"
                                          onChange={setViolationValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          placeholder="Violation Name Here..."
                                        />
                                      </div>
                                    </div>
                                    <div className="flex mb-4">
                                      <div className="w-1/2">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="type"
                                        >
                                          Violation Type
                                        </label>
                                        <select
                                          className="form-select form-select-sm mb-3 appearance-none block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                          aria-label=".form-select-sm"
                                          placeholder="Type here"
                                          onChange={(e) =>
                                            setViolation((prevState) => ({
                                              ...prevState,
                                              [e.target.name]: parseInt(
                                                e.target.value
                                              ),
                                            }))
                                          }
                                          name="type_id"
                                        >
                                          {violationsType.map(
                                            (violationtype) => (
                                              <option
                                                key={violationtype.id}
                                                value={violationtype.id}
                                              >
                                                {violationtype.type}
                                              </option>
                                            )
                                          )}
                                        </select>
                                      </div>
                                      <div className="w-1/2 ml-2">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="location"
                                        >
                                          Location
                                        </label>
                                        <input
                                          required
                                          onChange={setViolationValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="location"
                                          type="text"
                                          placeholder="Location Here..."
                                        />
                                      </div>
                                    </div>
                                    <div className="flex mb-4">
                                      <div className="w-full">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="last_name"
                                        >
                                          Description
                                        </label>
                                        <textarea
                                          onChange={setViolationValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="description"
                                          type="text"
                                          rows={5}
                                          placeholder="Description..."
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between m-auto w-80">
                                      <button
                                        type="submit"
                                        className="bg-pink-400 w-full hover:bg-blue-dark text-white font-bold  py-2 px-4 rounded-full"
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

export default Violations;
