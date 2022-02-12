import React from "react";
import toast from "react-hot-toast";
import { updateViolationType } from "../../../api/endpoints/violType";

export default function UpdateViolationType(props) {
  const { show, data } = props;
  const { setShowModal } = show;
  const { selectedViolationType, setSelectedViolationType, setViolationsType } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedViolationType((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedViolationType.creator);
    delete selectedViolationType.creator //Temporary deletion same with violation!!
    updateViolationType(selectedViolationType).then((res) => {
      if (res) {
        setViolationsType((prevState) => {
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
    console.log(selectedViolationType);
  };

  return (
    <>
      <div className="md:ml-60  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-7/12 mx-auto">
          {/*content*/}
          <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h4 className="text-lg font-semibold">Update Violation Type</h4>
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
                    <form onSubmit={handleSubmit}>
                      <div className="flex mb-4">
                        <div className="w-full ml-2">
                          <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="location"
                          >
                            Type
                          </label>
                          <input
                            required
                            onChange={handleChange}
                            type="text"
                            name="type"
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            value={selectedViolationType.type ?? ""}
                            placeholder="Your Violation Type..."
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
                            onChange={handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            name="description"
                            type="text"
                            value={selectedViolationType.description}
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
