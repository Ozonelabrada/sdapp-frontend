
import toast from "react-hot-toast";
import { updateAi } from "../../../api/endpoints/aiConfig";
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
    delete selAiConfig.creator;
    updateAi(selAiConfig).then((res) => {
      if (res) {
        setAiConfigs((prevState) => {
          const index = prevState.findIndex((element) => element.id === res.id);
          if (index > -1) {
            prevState[index] = res;
          }
          return prevState;
        });
        toast.success("Updated Successfully", { duration: 5000 });
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
                            placeholder="Name"
                          />
                        </div>
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
                            placeholder="Person"
                          />
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-1/6 mr-1">
                          <label
                            className="block   text-sm font-bold mb-2"
                            htmlFor="max_distance"
                          >
                            Max Distance
                          </label>
                          <input
                            required
                            value={selAiConfig.max_distance || ""}
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value),
                              }))
                            }
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            name="max_distance"
                            type="number"
                            placeholder="100"
                          />
                        </div>
                        <div className="w-1/6 ml-1">
                          <label
                            disable="true"
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="min_distance"
                          >
                            Min Distance
                          </label>
                          <input
                            required
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value),
                              }))
                            }
                            value={selAiConfig.min_distance || ""}
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            name="min_distance"
                            type="number"
                            placeholder="80"
                          />
                        </div>
                        <div className="w-1/6 ml-1">
                          <label
                            disable="true"
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="max_detection_num"
                          >
                            Max Detection
                          </label>
                          <input
                            required
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value),
                              }))
                            }
                            value={selAiConfig.max_detection_num || ""}
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            name="max_detection_num"
                            type="number"
                            placeholder="15"
                          />
                        </div>
                        <div className="w-1/6 ml-1">
                          <label
                            disable="true"
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="min_detection_num"
                          >
                            Min Detection
                          </label>
                          <input
                            required
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(
                                  e.target.value
                                ),
                              }))
                            }
                            value={selAiConfig.min_detection_num || ""}
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            name="min_detection_num"
                            type="number"
                            placeholder="2"
                          />
                        </div>
                        <div className="w-1/6 ml-1">
                          <label
                            disable="true"
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="min_confidence"
                          >
                            Min Confidence
                          </label>
                          <input
                            required
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value),
                              }))
                            }
                            value={selAiConfig.min_confidence || ""}
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            name="min_confidence"
                            type="number"
                            placeholder="50"
                          />
                        </div>
                        <div className="w-1/6 ml-1">
                          <label
                            disable="true"
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="mns_threshold"
                          >
                            MNS Threshold
                          </label>
                          <input
                            required
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(
                                  e.target.value
                                ),
                              }))
                            }
                            value={selAiConfig.mns_threshold || ""}
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            name="mns_threshold"
                            type="number"
                            placeholder="50"
                          />
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-1/4">
                          <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="model"
                          >
                            Model
                          </label>
                          <select
                            className="form-select form-select-sm mb-3 appearance-none block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label=".form-select-sm"
                            required
                            value={selAiConfig.model || ""}
                            id="model"
                            onChange={handleChange}
                            name="model"
                          >
                            <option value="">Select Model</option>
                            <option value="yoloV3">yoloV3</option>
                            <option value="yoloV3-tiny">yoloV3-tiny</option>
                            <option value="yoloV4">yoloV4</option>
                            <option value="yoloV4-tiny">yoloV4-tiny</option>
                            <option value="mobilenetv2-ssd">mobilenetv2-ssd</option>
                          </select>
                        </div>
                        <div className="w-1/4">
                          <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="people_counter"
                          >
                            People Counter
                          </label>
                          <select
                            className="form-select form-select-sm mb-3 appearance-none block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label=".form-select-sm"
                            required
                            value={selAiConfig.people_counter ? 1 : 0}
                            id="people_counter"
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value) ? true : false,
                              }))
                            }
                            name="people_counter"
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </select>
                        </div>
                        <div className="w-1/4">
                          <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="use_gpu"
                          >
                            Use GPU
                          </label>
                          <select
                            className="form-select form-select-sm mb-3 appearance-none block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label=".form-select-sm"
                            required
                            value={selAiConfig.use_gpu ? 1 : 0}
                            id="use_gpu"
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value) ? true : false,
                              }))
                            }
                            name="use_gpu"
                          >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </select>
                        </div>
                        <div className="w-1/4">
                          <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="use_threading"
                          >
                            Use Threading
                          </label>
                          <select
                            className="form-select form-select-sm mb-3 appearance-none block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label=".form-select-sm"
                            required
                            value={selAiConfig.use_threading ? 1 : 0}
                            id="use_threading"
                            onChange={(e) =>
                              setSelAiConfig((prevState) => ({
                                ...prevState,
                                [e.target.name]: parseInt(e.target.value) ? true : false,
                              }))
                            }
                            name="use_threading"
                          >
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-full ml-1">
                          <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="description"
                          >
                            Description
                          </label>
                          <textarea
                            onChange={handleChange}
                            value={selAiConfig.description || ""}
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            name="description"
                            type="text"
                            placeholder="Description..."
                            rows={3}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between m-auto w-80">
                        <button
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
