import React, { useState } from "react";
import toast from "react-hot-toast";
import { updateAi } from "../../../api/endpoints/aiConfig";
import { updateViolation } from "../../../api/endpoints/violation";
import { findAllViolationType } from "../../../api/endpoints/violType";
// import _ from "lodash";

export default function UpdateAiConfig(props) {
  const { show, data } = props;
  const { setShowModal } = show;
  const { selAiConfig, setSelAiConfig, setAiConfigs } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelAiConfig((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateAi(selAiConfig).then((res) => {
      if (res) {
        setAiConfigs((prevState) => {
          const index = prevState.findIndex((element) => element.id === res.id);
          if (index > -1) {
            prevState[index] = res;
          }
          return prevState;
        });
        toast.success("Updated Successfuly", { duration: 5000 });
        setShowModal(false);
      }
    });
  };
  return (
    <>
      <div className="md:ml-60 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  w-7/12  my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h4 className="text-lg font-semibold">Update Violation</h4>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="font-sans antialiased bg-grey-lightest">
              {/* Content */}
              <div className="w-full bg-gray-200">
                <div className="rounded-lg container mx-auto py-2">
                  <div className="py-4 px-8">
                    <form onSubmit={handleUpdateSubmit}>
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
                            onChange={handleChange}
                            value={selAiConfig.name || ""}
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
                            value={selAiConfig.classification_type || ""}
                            onChange={handleChange}
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
                                setAiConfigs((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value),
                              }))
                            }
                            value={selAiConfig.max_detection_num || ""}
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
                                setAiConfigs((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value),
                              }))
                            }
                            value={selAiConfig.min_detection_num || ""}
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
                            onChange={handleChange}
                            value={selAiConfig.description || ""}
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
                          type="submit"
                          className="bg-pink-400 w-full hover:bg-blue-dark text-white font-bold  py-2 px-4 rounded-full"
                          type="submit"
                        >
                          Update Now
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
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
