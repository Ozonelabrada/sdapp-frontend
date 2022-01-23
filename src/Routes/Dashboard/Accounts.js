import React, { useState } from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link, Navigate, useLocation } from "react-router-dom";
import NotificationDropdown from "./components/NotificationDropdown.js";
import toast from "react-hot-toast";
import { UserContext } from "../../context/userContext.js";
import { findAllUser } from "../../api/endpoints/user.js";
import useForm from "../../hooks/useForm.js";
import { registerUser } from "../../api/endpoints/auth.js";

export default function Accounts() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const [openTab, setOpenTab] = React.useState(1);
    const [accounts, setAccounts] = useState([]);
    const { user, setUser } = React.useContext(UserContext);
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        if (['SUPER_ADMIN', 'ADMIN'].includes(user.role)) findAllUser().then(setAccounts);
    }, []);

    const location = useLocation();
    // create form states
    const [credentials, setCredentials] = useForm({
        email: "",
        username: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        password: "",
        role: "USER",
    })

    // create login states
    const [registerState, , setRegisterState] = useForm({
        isLoading: false,
        isAuthenticated: false,
        hasError: false,
        message: ''
    })

    //create a function to toggle hasError
    const toggleHasError = () => {
        setRegisterState({
            ...registerState,
            hasError: !registerState.hasError,
            message: '',
        })
    }

    // handle form submit
    const handleSubmit = async e => {
        e.preventDefault();

        //set isLoading to true
        setRegisterState(registerState => ({
            ...registerState,
            isLoading: true,
            hasError: false,
            isAuthenticated: false,
            message: '',
        }))

        const user = await registerUser(credentials)
        //set isLoading to false then set hasError to true if there is an error
        if (user === (null || undefined)) {

            // force return to false
            return setRegisterState(registerState => ({
                ...registerState,
                isLoading: false,
                hasError: true,
                message: 'Credential Duplicates',
            }))
        }
        //set isLoading to false then set isAuthenticated to true if there is no error
        setRegisterState(registerState => ({
            ...registerState,
            isLoading: false,
            hasError: false,
            isAuthenticated: true,
            message: 'Register Successful'
        }))

        //update user context after 1sec of delay
        setTimeout(() => setUser(user), 1000)

        //save token to local storage
        localStorage.setItem('token', user.token)

    }
    const handleUpdateUser = (id) => {
    }
    const handleShowModal = () => {
        setShowModal(true)
    }
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
                        to="/accounts"
                    >
                        KITA APP
                    </Link>
                    {/* User */}
                    {/* <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <NotificationDropdown />
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul> */}
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
                        <div className="text-white text-sm uppercase hidden lg:inline-block font-semibold">
                            Accounts
                        </div>
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
                                                        ? "text-white bg-gray-800"
                                                        : "text-gray-600 bg-white")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"
                                                role="tablist"
                                            >
                                                Users List
                                            </a>
                                        </li>
                                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                            <a
                                                className={
                                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                                    (openTab === 2
                                                        ? "text-white bg-gray-800"
                                                        : "text-gray-600 bg-white")
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

                                                        {(user.role === 'ADMIN' || user.role === 'SUPER_ADMIN') && (
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
                                                                                <button onClick={() => handleShowModal(user.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                                                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                        //     (user.role === 'USERS') && 
                                                                        //     <div className="bg-red-100 px-6 border border-red-400 text-red-700 py-3 rounded relative" role="alert">
                                                                        //     <span className="block sm:inline">No data</span>

                                                                        // </div>
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        )}
                                                        {(user.role === 'USER') && (
                                                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-full rounded relative" role="alert">
                                                                <strong class="font-bold pr-10">Please be advised!</strong>
                                                                <span class="block sm:inline">You are not Allowed to View User List Module.</span>
                                                                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                                                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                                                </span>
                                                            </div>
                                                        )}
                                                        {showModal ? (
                                                            <>
                                                                <div
                                                                    className="md:ml-60 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                                >
                                                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                                        {/*content*/}
                                                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                            {/*header*/}
                                                                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                                                <h3 className="text-3xl font-semibold">
                                                                                    Modify Information
                                                                                </h3>
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
                                                                                <div className="w-5/6 mx-auto bg-white rounded shadow">
                                                                                    <div className="py-4 px-8">
                                                                                        <form>
                                                                                            <div className="mb-4">
                                                                                                <div className="mb-4">
                                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Username</label>
                                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={user.username} name="username" type="text" placeholder="Your username" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="flex mb-4">
                                                                                                <div className="w-1/2 mr-1">
                                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">First Name</label>
                                                                                                    <input required onChange={setCredentials} type="text" name="first_name" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={user.first_name} placeholder="Your first name" />
                                                                                                </div>
                                                                                                <div className="w-1/2 ml-1">
                                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Middle Initial</label>
                                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={user.middle_name} name="middle_name" type="text" placeholder="Your middle initial" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="flex mb-4">
                                                                                                <div className="w-1/2 mr-1">
                                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstname">Last Name</label>
                                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={user.last_name} name="last_name" type="text" placeholder="Your last name" />
                                                                                                </div>
                                                                                                <div className="w-1/2 ml-1">
                                                                                                    <label disable="true" className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Suffix </label>
                                                                                                    <input onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={user.suffix} name="suffix" type="text" placeholder="Your Suffix" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="flex mb-4">
                                                                                                <div className="w-1/2 mr-1">
                                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="email" type="email" value={user.email} placeholder="Your email address" onChange={setCredentials} />
                                                                                                </div>
                                                                                                <div className="w-1/2 ml-1">
                                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Username</label>
                                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={user.username} name="username" type="text" placeholder="Your username" />
                                                                                                </div></div>
                                                                                            {/* <div className="mb-4">
                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                                                                                    <input onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={user.password}  name="password" type="password" placeholder="Your secure password" />
                                                                                    <p className="text-grey text-xs mt-1">At least 6 characters</p>
                                                                                </div> */}
                                                                                            <div className="flex items-center justify-between m-auto w-80">
                                                                                                <button onClick={() => handleUpdateUser(user.id)} className="bg-blue-700 w-full hover:bg-blue-dark text-white font-bold  py-2 px-4 rounded-full" type="submit">
                                                                                                    Update Now
                                                                                                </button>
                                                                                                {/* <button
                                                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                                        type="button"
                                                                                        onClick={() => setShowModal(false)}
                                                                                    >
                                                                                        Close
                                                                                    </button> */}
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            {/*footer*/}
                                                                            {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                                    <button
                                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                        type="button"
                                                                        onClick={() => setShowModal(false)}
                                                                    >
                                                                        Close
                                                                    </button>
                                                                    <button
                                                                        className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                        type="button"
                                                                        onClick={() => setShowModal(false)}
                                                                    >
                                                                        Save Changes
                                                                    </button>
                                                                </div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                            </>
                                                        ) : null
                                                        }
                                                    </div>
                                                </div>
                                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                    <div className="font-sans antialiased bg-grey-lightest">

                                                        {/* Content */}
                                                        <div className="w-full bg-gray-500" >
                                                            <div className="container mx-auto py-8">
                                                                <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                                                                    <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter m-auto">Register User</div>


                                                                    {
                                                                        registerState.hasError &&
                                                                        <div className="bg-red-100 px-6 border border-red-400 text-red-700 py-3 rounded relative" role="alert">
                                                                            <span className="block sm:inline">{registerState.message}</span>
                                                                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                                                                <svg onClick={toggleHasError} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                                                            </span>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        registerState.isAuthenticated &&
                                                                        <div className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
                                                                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                                                            <p>{registerState.message}</p>
                                                                        </div>
                                                                    }
                                                                    <div className="py-4 px-8">
                                                                        <form onSubmit={handleSubmit}>
                                                                            <div className="mb-4">
                                                                                <div className="mb-4"></div>
                                                                            </div>
                                                                            <div className="flex mb-4">
                                                                                <div className="w-1/2 mr-1">
                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">First Name</label>
                                                                                    <input required onChange={setCredentials}
                                                                                        type="text"
                                                                                        name="first_name" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Your first name" />
                                                                                </div>
                                                                                <div className="w-1/2 ml-1">
                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Middle Initial</label>
                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="middle_name" type="text" placeholder="Your middle initial" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex mb-4">
                                                                                <div className="w-1/2 mr-1">
                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstname">Last Name</label>
                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="last_name" type="text" placeholder="Your last name" />
                                                                                </div>
                                                                                <div className="w-1/2 ml-1">
                                                                                    <label disable="true" className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Suffix </label>
                                                                                    <input onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="suffix" type="text" placeholder="Your Suffix" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex mb-4">
                                                                                <div className="w-1/2 mr-1">
                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="email" type="email" placeholder="Your email address" onChange={setCredentials} />
                                                                                </div>
                                                                                <div className="w-1/2 ml-1">
                                                                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Username</label>
                                                                                    <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="username" type="text" placeholder="Your username" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="mb-4">
                                                                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                                                                                <input required onChange={setCredentials} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="password" type="password" placeholder="Your secure password" />
                                                                                <p className="text-grey text-xs mt-1">At least 6 characters</p>
                                                                            </div>
                                                                            <div className="flex items-center justify-between m-auto w-80">
                                                                                <button type="submit" className="bg-blue-700 w-full hover:bg-blue-dark text-white font-bold  py-2 px-4 rounded-full" type="submit">
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
