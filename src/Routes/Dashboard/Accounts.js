import React, { useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link } from "react-router-dom";
import NotificationDropdown from "./components/NotificationDropdown.js";
import toast from "react-hot-toast";
import { UserContext } from "../../context/userContext.js";
import { findAllUser, getMe } from "../../api/endpoints/user.js";

const Accounts = ({ color }) => {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const [openTab, setOpenTab] = React.useState(1);
    const [accounts, setAccounts] = useState([]);
    const { user, setUser } = React.useContext(UserContext);

    React.useEffect(() => {
        if (['SUPER_ADMIN', 'ADMIN'].includes(user.role)) findAllUser().then(setAccounts);
    }, []);

    console.log(accounts)
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-bgstreamImage flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        Tailwind Starter Kit
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <NotificationDropdown />
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link to="/home" className="flex flex-none items-center"><i className="mdi mdi-eye-circle-outline mdi-24px"></i><span className="m-5">KITA</span></Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className=" px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className=" text-xs uppercase py-3 font-bold block"
                                    to="/dashboard"
                                >
                                    <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> Dashboard
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className=" hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                                    to="/profile"
                                >
                                    <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i> Profile
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className="text-pink-500  text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                                    to="/accounts"
                                >
                                    <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i> Accounts
                                </Link>
                            </li>
                        </ul>
                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Transactions
                        </h6>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="inline-flex">
                                <Link
                                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                                    to="/stream"
                                >
                                    <i className="fas fa-paint-brush mr-2 text-blueGray-400 text-base"></i> Monitoring of KITA APP
                                </Link>
                            </li>
                            <li className="inline-flex">
                                <Link
                                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                                    to="/violation"
                                >
                                    <i className="fas fa-paint-brush mr-2 text-blueGray-400 text-base"></i> Violations
                                </Link>
                            </li>

                            <li className="inline-flex">
                                <Link
                                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                                    to="/archive"
                                >
                                    <i className="fab fa-css3-alt mr-2 text-blueGray-400 text-base"></i> Case Solved
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="relative md:ml-64 mt-9 bg-blueGray-100">
                <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                    <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                        {/* Brand */}
                        <Link
                            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                            to="/"
                            onClick={e => e.preventDefault()}
                        >
                            Accounts
                        </Link>
                        {/* Form */}
                        <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                    <i className="fas fa-search"></i>
                                </span>
                                <input type="text" placeholder="Search here..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10" />
                            </div>
                        </form>
                        {/* User */}
                        <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                            <UserDropdown />
                        </ul>
                    </div>
                </nav>
                {/* Header */}
                <div className="relative bg-bgAboutR md:pt-32 pb-32 pt-12 h-screen">
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
                                                        ? "text-white bg-" + color + "-600"
                                                        : "text-" + color + "-600 bg-white")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"
                                                role="tablist"
                                            >
                                                Users
                                            </a>
                                        </li>
                                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                            <a
                                                className={
                                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                                    (openTab === 2
                                                        ? "text-white bg-" + color + "-600"
                                                        : "text-" + color + "-600 bg-white")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(2);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                Add User
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="tab-content tab-space">
                                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                    <div className="flex flex-wrap">
                                                        <table class="min-w-full border-collapse block md:table ">
                                                            <thead className="block md:table-header-group">
                                                                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                                                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                                                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
                                                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
                                                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Role</th>
                                                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Created</th>
                                                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="block md:table-row-group">
                                                                {accounts.map((account, index) => (
                                                                    <tr key={index} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>{account.first_name} {account.middle_name} {account.last_name} {account.suffix}</td>
                                                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>{account.username}</td>
                                                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>{account.email}</td>
                                                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Role</span>{account.role}</td>
                                                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Created</span>{account.created_at}</td>
                                                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                                            <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                                                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                    <div className="font-sans antialiased bg-grey-lightest">

                                                        {/* Content */}
                                                        <div className="w-full bg-gray-500" >
                                                            <div className="container mx-auto py-8">
                                                                <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                                                                    <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter m-auto">Register User</div>
                                                                    <div className="py-4 px-8">
                                                                        <div className="flex mb-4">
                                                                            <div className="w-1/2 mr-1">
                                                                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">First Name</label>
                                                                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name" />
                                                                            </div>
                                                                            <div className="w-1/2 ml-1">
                                                                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Middle Initial</label>
                                                                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="middle_name" type="text" placeholder="Your middle initial" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex mb-4">
                                                                            <div className="w-1/2 mr-1">
                                                                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">Last Name</label>
                                                                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Your last name" />
                                                                            </div>
                                                                            <div className="w-1/2 ml-1">
                                                                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Role</label>
                                                                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="role" type="text" placeholder="Your Role" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-4">
                                                                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                                                                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" />
                                                                        </div>
                                                                        <div className="mb-4">
                                                                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                                                                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" />
                                                                            <p className="text-grey text-xs mt-1">At least 6 characters</p>
                                                                        </div>
                                                                        <div className="flex items-center justify-between m-auto w-80">
                                                                            <button className="bg-blue-700 w-full hover:bg-blue-dark text-white font-bold  py-2 px-4 rounded-full" type="submit">
                                                                                Create Now
                                                                            </button>
                                                                        </div>
                                                                    </div>
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
export default Accounts;