import React, { useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";
import toast from "react-hot-toast";
import useForm from "../../hooks/useForm.js";
import {
  deleteViolationType,
  findAllViolationType,
  storeViolationType,
} from "../../api/endpoints/violType.js";
import moment from "moment";
import UpdateViolationType from "./modals/UpdateViolationType.js";
import { Checkbox } from "tailwind-react-ui";

const ViolationType = () => {
  const [violationsType, setViolationsType] = useState([]);
  const { user } = React.useContext(UserContext);
  const [openTab, setOpenTab] = React.useState(1);
  const [selectedViolationType, setSelectedViolationType] = React.useState(null);
  const [enableDeleteBulk, setEnableDeleteBulk] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleDeleteBulk = () => {
  }

  const handleShowModal = (violationType) => {
    setSelectedViolationType(violationType);
    setShowModal(true);
  };
  // create form states
  const [violationTypeValues, setViolationTypeValues, setViolationType] =
    useForm({
      type: "",
      description: "",
      creator_id: "",
    });

  // handle form submit
  const handleSubmitViol = async (e) => {
    e.preventDefault();

    const violType = await storeViolationType(violationTypeValues);

    if (!violType) return // force return to false

    toast.success("Successfully Created!");
    setViolationType({});

    setViolationsType((violationsType) => {
      if (violationsType.includes(violType) === false)
        violationsType.push(violType);
      return violationsType;
    });

  };
  React.useEffect(() => {
    findAllViolationType().then(setViolationsType);
  }, []);

  const handleDeleteViolation = (id) => {
    deleteViolationType(id).then((res) => {
      if (res) {
        setViolationsType((violationType) =>
          violationsType.filter((violationType) => violationType.id !== res.id)
        );
        toast.success("Deleted Successfully!");
      }
    })
  };
  return (
    <>
      {showModal && selectedViolationType !== null && (
        <UpdateViolationType
          show={{ showModal, setShowModal }}
          data={{
            selectedViolationType,
            setSelectedViolationType,
            setViolationsType,
          }}
        />
      )}
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
        <div className="relative bg-bgAboutR pt-14 h-screen">
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
                                    List of Violation Type
                                  </h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                  <button
                                    className={!enableDeleteBulk ? `hidden ` : `bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1`}
                                    type="button"
                                    onClick={() => handleDeleteBulk()}
                                    style={{ transition: "all .15s ease" }}
                                  >
                                    Delete Selected
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              className="block w-full overflow-y-auto"
                              style={{ maxHeight: 500 }}
                            >
                              {/* Projects table */}
                              {violationsType.length >= 1 ? (
                                <table className="items-center w-full bg-transparent border-collapse">
                                  <thead>
                                    <tr>
                                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        <input
                                          type="checkbox"
                                          onChange={(e) => {
                                            let value = e.target.checked;
                                            setEnableDeleteBulk(value);
                                            setViolationType(
                                              violationsType.map((d) => {
                                                d.select = value;
                                                return d;
                                              })
                                            );
                                          }}
                                        />
                                      </th>
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
                                        Date Updated
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
                                          <input
                                            type="checkbox"
                                            checked={violationType.select || false}
                                            onChange={(e) => {
                                              let value = e.target.checked;
                                              setEnableDeleteBulk(value);
                                              setViolationType(violationsType.map((sd) => {
                                                if (sd.id === violationType.id) { sd.select = value; }
                                                return sd;
                                              }));
                                            }}
                                          />
                                        </td>
                                        <td className="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {violationType.type}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {violationType.description}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {moment(
                                            violationType.created_at
                                          ).format("lll")}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {moment(
                                            violationType.updated_at
                                          ).format("lll")}
                                        </td>

                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          <button
                                            className={`ml-2 ${(user.role === "SUPER_ADMIN" || user.id === violationType.creator_id) ? "bg-blue-500 hover:bg-blue-700 border border-blue-500" : "bg-gray-400"} text-white font-bold py-1 px-2  rounded mdi mdi-pencil-box`}
                                            title="View"
                                            disabled={!(user.role === "SUPER_ADMIN" || user.id === violationType.creator_id)}
                                            onClick={() =>
                                              handleShowModal(violationType)
                                            }
                                          ></button>
                                          <button
                                            className={`ml-2 ${(user.role === "SUPER_ADMIN" || user.id === violationType.creator_id) ? "bg-red-500 hover:bg-red-700  border border-red-500" : "bg-gray-400"}  text-white font-bold py-1 px-2 rounded mdi mdi-delete-circle inline-flex`}
                                            title="Remove"
                                            disabled={!(user.role === "SUPER_ADMIN" || user.id === violationType.creator_id)}
                                            onClick={() =>
                                              handleDeleteViolation(
                                                violationType.id
                                              )
                                            }
                                          ></button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              ) : (
                                <div class="bg-blue-100 w-full border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                                  <p class="font-bold">Informational Message!</p>
                                  <p class="text-sm">No Violation Type to Display.</p>
                                </div>)}
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
                                        onChange={setViolationTypeValues}
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
                                        onChange={setViolationTypeValues}
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
