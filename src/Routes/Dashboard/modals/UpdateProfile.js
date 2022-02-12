import React from "react";
import toast from "react-hot-toast";
import { updateUser } from "../../../api/endpoints/user";
import { UserContext } from "../../../context/userContext";

export default function UpdateProfile(props) {
  const { show } = props;
  const { setShowModal } = show;
  const { user, setUser } = React.useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user).then((res) => {
      if (res) {
        toast.success("Updated Successfuly", { duration: 5000 });
        setShowModal(false);
      }
    });
  };

  return (
    <>
      <div className=" md:ml-60 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  w-7/12  my-6 mx-auto">
          {/*content*/}
          <div className="font-sans font-bold border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h4 className="text-lg font-semibold">Update Profile</h4>
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
            <div className="w-full container mx-auto py-8">
              <div className="w-full mx-auto bg-white rounded ">
                <div className=" px-8">
                  <form onSubmit={handleSubmit}>
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
                          onChange={handleChange}
                          type="text"
                          name="first_name"
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          value={user.first_name ?? ""}
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
                          required
                          onChange={handleChange}
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          value={user.middle_name ?? ""}
                          name="middle_name"
                          type="text"
                          placeholder="Your middle name"
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        <label
                          className="block text-grey-darker text-sm font-bold mb-2"
                          htmlFor="firstname"
                        >
                          Last Name
                        </label>
                        <input
                          required
                          onChange={handleChange}
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          value={user.last_name ?? ""}
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
                          Suffix
                        </label>
                        <input
                          onChange={handleChange}
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          value={user.suffix ?? "N/A"}
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
                          Email Address (Read-only)
                        </label>
                        <input
                          readOnly
                          onChange={handleChange}
                          className="appearance-none font-semibold border rounded w-full py-2 px-3 text-grey-darker"
                          name="email"
                          type="email"
                          value={user.email}
                          placeholder="Your email address"
                        />
                      </div>
                      <div className="w-1/2 mb-4">
                        <label
                          className="block text-grey-darker text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Username (Read-only)
                        </label>
                        <input
                          required
                          onChange={handleChange}
                          className="appearance-none border font-semibold rounded w-full py-2 px-3 text-grey-darker"
                          readOnly
                          value={user.username ?? ""}
                          name="username"
                          type="text"
                          placeholder="Your username"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between m-auto w-80">
                      <button
                        type="submit"
                        className="bg-pink-400 w-full hover:bg-gray-200 text-gray-700 font-bold  py-2 px-4 rounded-full"
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
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
