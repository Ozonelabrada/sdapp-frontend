import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { findAllUser, updateUser } from "../../../api/endpoints/user";
import { BlockUxContext } from "../../../context/BlockUx";
import { UserContext } from "../../../context/userContext";
// import { Checkbox } from "tailwind-react-ui";

export default function UpdateAccount(props) {
  const { show, data } = props;
  const { setShowModal } = show;
  const { selUser, setSelUser, setAccounts } = data;
  const [userRole, setUserRole] = useState([]);
  const { setIsLoading } = React.useContext(BlockUxContext);
  const { user, setUser } = React.useContext(UserContext);

  React.useEffect(() => {
    findAllUser().then(setUserRole);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    // console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    updateUser(selUser).then((res) => {
      if (res) {
        setAccounts((prevState) => {
          const index = prevState.findIndex((element) => element.id === res.id);
          if (index > -1) {
            prevState[index] = res;
          }
          return prevState;
        });
        setIsLoading(false);
        toast.success("Updated Successfuly", { duration: 5000 });
        setShowModal(false);
      } else {
        setIsLoading(false);
        toast.error("Failure to Update!", { duration: 5000 });
      }
    });
  };

  return (
    <>
      <div className="md:ml-60 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto  w-7/12 ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h4 className="text-lg font-semibold">Update User</h4>
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
                <div className="py-4 px-8">
                  <form onSubmit={handleSubmit}>
                    <div className="flex">
                      <div className="w-1/2 mb-4 mr-2">
                        <label
                          className="block text-grey-darker text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Username (Read-only)
                        </label>
                        <input
                          required
                          onChange={handleChange}
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          readOnly
                          value={selUser.username ?? ""}
                          name="username"
                          type="text"
                          placeholder="Your username"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          className="block text-grey-darker text-sm font-bold mb-2"
                          htmlFor="location"
                        >
                          Role
                        </label>
                        {user.role === "SUPER_ADMIN" ? (
                          <select
                            className="form-select form-select-sm mb-3 appearance-none block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mdi mdi-chevron-down"
                            aria-label=".form-select-sm"
                            onChange={handleChange}
                            name="role"
                            value={selUser.role}
                          >
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="SUPER_ADMIN">SUPER ADMIN</option>
                            <option value="SYSTEM">SYSTEM</option>
                          </select>
                        ) : (
                          <select
                            className="form-select form-select-sm mb-3 appearance-none block w-full px-3 py-2 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mdi mdi-chevron-down"
                            aria-label=".form-select-sm"
                            onChange={handleChange}
                            name="role"
                            value={selUser.role}
                          >
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="SYSTEM">SYSTEM</option>
                          </select>
                        )}
                      </div>
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
                          onChange={handleChange}
                          type="text"
                          name="first_name"
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          value={selUser.first_name ?? ""}
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
                          value={selUser.middle_name ?? ""}
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
                          value={selUser.last_name ?? ""}
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
                          value={selUser.suffix ?? "N/A"}
                          name="suffix"
                          type="text"
                          placeholder="Your Suffix"
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-full mr-1">
                        <label
                          className="block text-grey-darker text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email Address (Read-only)
                        </label>
                        <input
                          readOnly
                          onChange={handleChange}
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          name="email"
                          type="email"
                          value={selUser.email}
                          placeholder="Your email address"
                        />
                      </div>
                      {/* <div className="w-1/4 flex m-auto text-center">
                        <Checkbox
                          onChange={handleChange}
                          checkbox
                          name="isActive"
                          value="1"
                          label="Selected"
                          defaultChecked
                        />
                      </div> */}
                    </div>
                    <div className="flex items-center justify-between m-auto w-80">
                      <button
                        type="submit"
                        className="bg-pink-400 w-full hover:bg-gray-200 text-gray-800 font-bold  py-2 px-4 rounded-full"
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
