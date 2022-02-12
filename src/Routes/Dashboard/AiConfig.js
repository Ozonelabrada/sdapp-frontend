import React, { useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";
import useForm from "../../hooks/useForm.js";
import moment from "moment";
import toast from "react-hot-toast";
import { BlockUxContext } from "../../context/BlockUx/index.js";
import { findError } from "../../utilities/errorCode";
import { deleteAi, findAllAi, getMyAi, storeAi } from "../../api/endpoints/aiConfig.js";
// import { Checkbox, } from '@mui/material';

export default function AiConfig() {
  const [openTab, setOpenTab] = React.useState(1);
  const [aiConfigs, setAiConfigs] = useState([]);
  const { user, setUser } = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);
  const [selAiConfig, setSelAiConfig] = React.useState(null);
  const { setIsLoading } = React.useContext(BlockUxContext);

  React.useEffect(() => {
    setIsLoading(true);
    if (["SUPER_ADMIN"].includes(user.role)) findAllAi().then(setAiConfigs);
    else getMyAi().then(setAiConfigs);
  }, [user.id]);

  const handleDelete = (id) => {
    setIsLoading(true);
    deleteAi(id)
      .then((res) => {
        if (res) {
          setAiConfigs((aiConfigs) =>
            aiConfigs.filter((aIData) => aIData.id !== res.id)
          );
          toast.success("Successfully Deleted!");
        }
      })
      .finally(() => setIsLoading(false));
  };

  const location = useLocation();
  // create form states
  const [aiConfigValues, setAiConfigValues, setConfig] = useForm({
    name: "",
    description: "",
    classification_type: "",
    max_detection_num: "",
    min_detection_num: "",
    use_gpu: "",
  });
const handleSubmitAiConfig = async (e) => {
    e.preventDefault();

const data = await storeAi(aiConfigValues);
//set isLoading to false then set hasError to true if there is an error
if (data === (null || undefined)) {
  // force return to false
  toast.error("Saving Failed!");
}
toast.success("Successfully Created!");
setConfig({});
setAiConfigs((aiConfigs) => {
  if (aiConfigs.includes(data) === false) aiConfigs.push(data);
  return aiConfigs;
});
}

  const handleShowModal = (ai) => {
    setSelAiConfig(ai);
    setShowModal(true);
  };
  return (
    <>
      {/* {showModal && selUser !== null && (
        <UpdateAccount
          show={{ showModal, setShowModal }}
          data={{ selUser, setSelUser, setAccounts }}
        />
      )} */}
      <div className="md:overflow-y-auto relative md:ml-64 bg-blueGray-100">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <div className="text-white text-sm uppercase hidden lg:inline-block font-semibold">
              Accounts
            </div>
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
                        Accounts
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
                        Add Accounts
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
                                    Accounts
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
                              className="block w-full overflow-y-auto"
                              style={{ maxHeight: 500 }}
                            >
                              {/* Projects table */}
                              <table className="items-center w-full bg-transparent border-collapse shadow-xl">
                                <thead>
                                  <tr>
                                    <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Check Box
                                    </td>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Name
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Description
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Classification Type
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Maximum Detection
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Minimum Detection
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Creator
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Date Created
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Date Updated{" "}
                                    </th>
                                  </tr>
                                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Actions
                                  </th>
                                </thead>
                                <tbody>
                                  {aiConfigs.map((aIData) => (
                                    <tr key={aIData.id}>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {/* <Checkbox {...label} defaultChecked /> */}
                                      </td>
                                      <td className="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {aIData.name}{" "}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {aIData.description}{" "}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {aIData.classification_type}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {aIData.max_detection_num}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {aIData.use_gpu}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {aIData.creator.creator.email}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {moment(aIData.created_at).format(
                                          "lll"
                                        )}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        {moment(aIData.updated_at).format(
                                          "lll"
                                        )}
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                        <button
                                          className={`ml-2 ${
                                            user.role === "SUPER_ADMIN" ||
                                            user.id === aIData.creator_id
                                              ? "bg-blue-500 hover:bg-blue-700 border border-blue-500"
                                              : "bg-gray-400"
                                          } text-white font-bold py-1 px-2  rounded mdi mdi-pencil-box`}
                                          title="Edit"
                                          disabled={
                                            !(
                                              user.role === "SUPER_ADMIN" ||
                                              user.id === aIData.creator_id
                                            )
                                          }
                                          onClick={() =>
                                            handleShowModal(aIData)
                                          }
                                        ></button>
                                        <button
                                          className={`ml-2 ${
                                            user.role === "SUPER_ADMIN" ||
                                            user.id === aIData.creator_id
                                              ? "bg-red-500 hover:bg-red-700  border border-red-500"
                                              : "bg-gray-400"
                                          }   text-white font-bold py-1 px-2 rounded mdi mdi-delete-circle inline-flex`}
                                          title="Delete"
                                          disabled={
                                            !(
                                              user.role === "SUPER_ADMIN" ||
                                              user.id === aIData.creator_id
                                            )
                                          }
                                          onClick={() =>
                                            handleDelete(aIData.id)
                                          }
                                        ></button>
                                      </td>
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
                            <div className="w-full bg-gray-200 rounded-lg">
                              <div className="container mx-auto py-8">
                                <div className="py-4 font-bold px-8 text-black text-xl border-b border-grey-lighter m-auto">
                                  Add Ai Configuration
                                </div>
                                <div className="py-4 px-8">
                                  <form onSubmit={handleSubmitAiConfig}>
                                    <div className="mb-4">
                                      <div className="mb-4"></div>
                                    </div>
                                    <div className="flex mb-4">
                                      <div className="w-1/2 mr-1">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="first_name"
                                        >
                                          First Name
                                        </label>
                                        <input
                                          required
                                          onChange={setAiConfigValues}
                                          value={setConfig.first_name || ""}
                                          type="text"
                                          name="first_name"
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          placeholder="Your first name"
                                        />
                                      </div>
                                      <div className="w-1/2 ml-1">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="last_name"
                                        >
                                          Middle Name
                                        </label>
                                        <input
                                          onChange={setAiConfigValues}
                                          value={setConfig.middle_name || ""}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="middle_name"
                                          type="text"
                                          placeholder="Your middle name"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex mb-4">
                                      <div className="w-1/2 mr-1">
                                        <label
                                          className="block   text-sm font-bold mb-2"
                                          htmlFor="firstname"
                                        >
                                          Last Name
                                        </label>
                                        <input
                                          required
                                          value={setConfig.last_name || ""}
                                          onChange={setAiConfigValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="last_name"
                                          type="text"
                                          placeholder="Your last name"
                                        />
                                      </div>
                                      <div className="w-1/2 ml-1">
                                        <label
                                          disable="true"
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="last_name"
                                        >
                                          Suffix{" "}
                                        </label>
                                        <input
                                          onChange={setAiConfigValues}
                                          value={setConfig.suffix || ""}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="suffix"
                                          type="text"
                                          placeholder="Your Suffix"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex mb-4">
                                      <div className="w-1/2 mr-1">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="email"
                                        >
                                          Email Address
                                        </label>
                                        <input
                                          required
                                          value={setConfig.email || ""}
                                          onChange={setAiConfigValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="email"
                                          type="email"
                                          placeholder="Your email address"
                                        />
                                      </div>
                                      <div className="w-1/2 ml-1">
                                        <label
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="email"
                                        >
                                          Username
                                        </label>
                                        <input
                                          required
                                          value={setConfig.username || ""}
                                          onChange={setAiConfigValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="username"
                                          type="text"
                                          placeholder="Your username"
                                        />
                                      </div>
                                    </div>
                                    <div className="mb-4">
                                      <label
                                        className="block text-grey-darker text-sm font-bold mb-2"
                                        htmlFor="password"
                                      >
                                        Password
                                      </label>
                                      <input
                                        required
                                        value={setConfig.password || ""}
                                        onChange={setAiConfigValues}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        name="password"
                                        type="password"
                                        placeholder="Your secure password"
                                      />
                                      <p className="text-grey text-xs mt-1">
                                        At least 6 characters
                                      </p>
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
}
