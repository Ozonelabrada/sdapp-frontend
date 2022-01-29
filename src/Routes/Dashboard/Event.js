import React from "react";
import UserDropdown from "./components/UserDropdown.js";
import { Link } from "react-router-dom";
import NotificationDropdown from "./components/NotificationDropdown.js";

export default function Event() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");

    return (
        <>
            <div className="relative md:ml-64 bg-blueGray-100">
                <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                    <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                        {/* Brand */}
                        <Link
                            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                            to="/event"
                            onClick={e => e.preventDefault()}
                        >
                            Events
                        </Link>
                        {/* User */}
                        <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                            <UserDropdown />
                        </ul>
                    </div>
                </nav>
                {/* Header */}
                <div className="relative bg-bgAboutR pb-10 pt-24 h-screen">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            
                            {/* Card stats */}
                            <div className="flex flex-wrap max-h-96 overflow-y-auto ">
                                <table class="min-w-full border-collapse block md:table ">
                                    <thead class="block md:table-header-group">
                                        <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Violation ID</th>
                                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Type</th>
                                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Description</th>
                                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Location</th>
                                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Date / Time</th>
                                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="block md:table-row-group">
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Violatpion ID</span>001</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Type</span>distancing</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Description</span>jrios@icloud.com</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Location</span>wholeway</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date / Time</span>2022-01-15 01:27:34.000</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
