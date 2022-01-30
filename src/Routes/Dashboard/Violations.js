import React, { useEffect, useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link, useLocation } from "react-router-dom";
import {
  findAllViolation,
  findOwnViolation,
  deleteViolation,
  storeViolation,
  registerViolation,
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
  const [violationValues, setViolationValues] = React.useState([]);


  React.useEffect(() => {
    if (["SUPER_ADMIN", "ADMIN"].includes(user.role)) {
      findAllViolation().then(setViolations);
      findAllViolationType().then(setViolationsType);
    } else if (user.role === "USER") {
      findOwnViolation().then(setViolations);
      findOwnViolationType().then(setViolationsType);
    }
  }, []);

  const handleViolationValues = (e) => {
    const { name, value } = e.target;
    setViolationValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    // console.log(e);
  };
  // create reister states
  const [registerState, , setRegisterState] = useState({
    isLoading: false,
    isAuthenticated: false,
    hasError: false,
    message: "",
  });
  const handleSubmitViol= async () => {

  const violation = await storeViolation(selectedViolation); 

  //set isLoading to false then set hasError to true if there is an error
  if (violation === (null || undefined)) {
    // force return to false
    toast.error("Registration Failed!");
  }
  toast.success("Successfully Registered!");
  handleViolationValues({});
  setViolations((violation) => {
    if (violation.includes(violation) === false) violations.push(violation);
    return violations;
  });

toast.success("submit")
  }
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
        <UpdateViolation show={{ showModal, setShowModal }} />
      )}
      <div className="relative md:ml-64 bg-blueGray-100">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <Link
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              to="/violation"
              onClick={(e) => e.preventDefault()}
            >
              Violation
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
                  <div className=" h-3/4 overflow-y-scroll relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div
                          className={openTab === 1 ? "block" : "hidden"}
                          id="link1"
                        >
                          <div className="flex flex-wrap ">
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
                                    Location
                                  </th>
                                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                    Date / Time
                                  </th>
                                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                    Actions
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="block md:table-row-group w-full">
                                {violations.map((violation, index) => (
                                  <tr
                                    key={index}
                                    className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                                  >
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                      <span className="inline-block w-1/3 md:hidden font-bold">
                                        Violatpion ID
                                      </span>
                                      {violation.id}
                                    </td>
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                      <span className="inline-block w-1/3 md:hidden font-bold">
                                        Type
                                      </span>
                                      {violation.type.type}
                                    </td>
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                      <span className="inline-block w-1/3 md:hidden font-bold">
                                        Description
                                      </span>
                                      {violation.description}
                                    </td>
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                      <span className="inline-block w-1/3 md:hidden font-bold">
                                        Location
                                      </span>
                                      {violation.location}
                                    </td>
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                      <span className="inline-block w-1/3 md:hidden font-bold">
                                        Date / Time
                                      </span>
                                      {moment(violation.created_at).format(
                                        "lll"
                                      )}
                                    </td>
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                      <span className="inline-block w-1/3 md:hidden font-bold">
                                        Actions
                                      </span>
                                      <button
                                        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mdi mdi-eye "
                                        title="View"
                                        // onClick={() =>
                                        //   handleShowModal(violation)
                                        // }
                                      ></button>
                                      {(user.role === "SUPER_ADMIN" ||
                                        user.id === violation.creator_id) && (
                                        <button
                                          className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mdi mdi-delete-circle inline-flex"
                                          title="Delete"
                                          onClick={() =>
                                            handleDeleteViolation(violation.id)
                                          }
                                        ></button>
                                      )}{" "}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                              {/* } */}
                            </table>
                            {/* )} */}
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
                                          onChange={handleViolationValues}
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
                                          class="form-select form-select-sm mb-3 appearance-none block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                          aria-label=".form-select-sm"
                                          placeholder="Type here"
                                          onChange={handleViolationValues}
                                          
                                        >
                                          {violationsType.map(
                                            (violationtype) => (
                                              <option
                                              name="type_id"
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
                                          onChange={handleViolationValues}
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
                                          required
                                          onChange={handleViolationValues}
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
