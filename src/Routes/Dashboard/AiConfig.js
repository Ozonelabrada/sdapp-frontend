import React, { useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { UserContext } from "../../context/userContext.js";
import useForm from "../../hooks/useForm.js";
import moment from "moment";
import toast from "react-hot-toast";
import { BlockUxContext } from "../../context/BlockUx/index.js";
import {
  deleteAi,
  findAllAi,
  getMyAi,
  storeAi,
} from "../../api/endpoints/aiConfig.js";
import UpdateAiConfig from "./modals/UpdateAiConfig.js";
// import { Checkbox, } from '@mui/material';

export default function AiConfig() {
  const [openTab, setOpenTab] = React.useState(1);
  const [aiConfigs, setAiConfigs] = useState([]);
  const { user } = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);
  const [selAiConfig, setSelAiConfig] = React.useState(null);
  const { setIsLoading } = React.useContext(BlockUxContext);

  React.useEffect(() => {
    if (["SUPER_ADMIN"].includes(user.role)) findAllAi().then(setAiConfigs);
    else if (["ADMIN"].includes(user.role)) getMyAi().then(setAiConfigs);
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

  // create form states
  const [aiConfigValues, setAiConfigValues, setConfig] = useForm({
    name: "",
    description: "",
    classification_type: "",
    max_detection_num: "",
    min_detection_num: "",
    use_gpu: true,
  });
  const handleSubmitAiConfig = async (e) => {
    e.preventDefault();

    const data = await storeAi(aiConfigValues);
    //set isLoading to false then set hasError to true if there is an error
    if (!data) return;
    toast.success("Successfully Created!");
    setConfig({});
    setAiConfigs((aiConfigs) => {
      if (aiConfigs.includes(data) === false) aiConfigs.push(data);
      return aiConfigs;
    });
  };

  const handleShowModal = (aIData) => {
    setSelAiConfig(aIData);
    setShowModal(true);
  };
  return (
    <>
      {showModal && selAiConfig !== null && (
        <UpdateAiConfig
          show={{ showModal, setShowModal }}
          data={{ selAiConfig, setSelAiConfig, setAiConfigs }}
        />
      )}
      <div className="md:overflow-y-auto relative md:ml-64 bg-blueGray-100">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <div className="text-white text-sm uppercase hidden lg:inline-block font-semibold">
              AI Configuration
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
                        AI Listing
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
                        Create AI Config
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
                                    AI Configuration
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
                              {aiConfigs.length >= 1 ? (
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
                                      Date Updated
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    aiConfigs.map((aIData) => (
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
                                          {aIData.min_detection_num}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                          {aIData.creator_id}
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
                                  ) : (
                                    <div class="bg-blue-100 w-full border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                                    <p class="font-bold">Informational Message!</p>
                                    <p class="text-sm">No Configuration to Display.</p>
                                  </div>
                                  )}
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
                                          htmlFor="name"
                                        >
                                          Name
                                        </label>
                                        <input
                                          required
                                          onChange={setAiConfigValues}
                                          value={aiConfigValues.name || ""}
                                          type="text"
                                          name="name"
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          placeholder="Ai Config Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex mb-4">
                                      <div className="w-1/2 mr-1">
                                        <label
                                          className="block   text-sm font-bold mb-2"
                                          htmlFor="classification"
                                        >
                                          Classification
                                        </label>
                                        <input
                                          required
                                          value={
                                            aiConfigValues.classification_type ||
                                            ""
                                          }
                                          onChange={setAiConfigValues}
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="classification_type"
                                          type="text"
                                          placeholder="Classification here"
                                        />
                                      </div>
                                      <div className="w-1/4 ml-1">
                                        <label
                                          disable="true"
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="last_name"
                                        >
                                          Maximum Detection{" "}
                                        </label>
                                        <input
                                          required
                                          onChange={(e) =>
                                            setConfig((prevState) => ({
                                              ...prevState,
                                              [e.target.name]: parseInt(
                                                e.target.value
                                              ),
                                            }))
                                          }
                                          value={
                                            aiConfigValues.max_detection_num ||
                                            ""
                                          }
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="max_detection_num"
                                          type="text"
                                          placeholder="12345..."
                                        />
                                      </div>
                                      <div className="w-1/4 ml-1">
                                        <label
                                          disable="true"
                                          className="block text-grey-darker text-sm font-bold mb-2"
                                          htmlFor="last_name"
                                        >
                                          Minimum Detection{" "}
                                        </label>
                                        <input
                                          required
                                          onChange={(e) =>
                                            setConfig((prevState) => ({
                                              ...prevState,
                                              [e.target.name]: parseInt(
                                                e.target.value
                                              ),
                                            }))
                                          }
                                          value={
                                            aiConfigValues.min_detection_num ||
                                            ""
                                          }
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="min_detection_num"
                                          type="text"
                                          placeholder="12345..."
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
                                          onChange={setAiConfigValues}
                                          value={
                                            aiConfigValues.description || ""
                                          }
                                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                          name="description"
                                          type="text"
                                          placeholder="Description"
                                          rows={3}
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between m-auto w-80">
                                      <button
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
