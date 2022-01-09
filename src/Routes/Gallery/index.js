import React, { Component } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames';


const Gallery = () => {
    // // const button = document.getElementById('buttonmodal');
    // const closebutton = document.getElementById('closebutton');
    const modal = document.getElementById('modal');

    const openModal = document.getElementById('buttonmodal');
    if (openModal) {
        openModal.addEventListener('click', () => modal.classList.add('scale-100'));
    }
    const closeModal = document.getElementById('closebutton');
    if (closeModal) {
        closeModal.addEventListener('click', () => modal.classList.remove('scale-100'));
    }
    return (
        <div className="bg-bgAboutL xl:h-screen h-full md:pt-24 w-screen pt-8">
            <Menu>
                <div class="flex flex-wrap p-0 xl:ml-10 pl-3 text-white m-auto">
                    <div className='relative flex flex-wrap cursor-pointer w-full float-right'>
                        <div className=' inset-y-0 right-0 font-bold xl:text-5xl md:text-4xl  text-3xl'>
                            G A L L E R Y
                        </div>
                    </div>
                    <Menu.Button>
                        <div class="relative flex-wrap w-36 grid grid-cols-3 grid-rows-1 self-center cursor-pointer pt-5 float-right">
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute opacity-90 w-20 rounded-md bg-white ring-1 ring-opacity-5 focus:outline-none">
                                    <div className="">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    2020
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    2021
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    2022
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                            <div><svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            </div>
                            <div className="text-xl self-center">
                                <div className='grid grid-rows-1 grid-flow-col px-2 gap-4 text-white'>
                                    <div className="w-3/3 grid grid-cols-6 grid-rows-1 self-center cursor-pointer">
                                        <div className=' float-left self-center'>YEAR</div>
                                    </div>
                                </div>
                            </div>
                            <div className='m-auto md:ml-5'>
                                <i class="mdi mdi-chevron-down"></i></div>
                        </div>
                    </Menu.Button>
                </div>
                <div class="md:grid  xl:grid-rows-4  md:grid-rows-6 grid-rows-1 w-full xl:pl-24 md:pl-16 pl-2 m-auto grid-flow-col md:px-2 md:gap-4 gap-1 text-white">
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >January</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >February</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >March</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >April</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >May</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >June</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >July</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >August</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >September</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >October</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >November</div>
                    </div>
                    <div id="buttonmodal" type="submit" className="w-3/4 grid grid-cols-6 grid-rows-1 self-center my-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center' >December</div>
                    </div>
                    <div id="modal"
                        className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 transform scale-0 transition-transform duration-300">
                        {/* <!-- Modal content --> */}
                        <div className="bg-gray-700 md:w-1/2 md:h-1/2 p-5">
                            {/* <!--Close modal button--> */}
                            <div  className="focus:outline-none w-full cursor-pointer m-auto flex pb-4 text-3xl">
                                {/* <!-- Hero icon - close button --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" id="closebutton" type="submit" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            <div  className="w-10/12 block relative text-center ">
                                RECORDED VIOLATIONS
                            </div>
                            </div>
                            {/* <!-- Test content --> */}

                            <div className="wrap md:col-auto bg-black w-full whitespace-nowrap-full text-white overflow-y-scroll xl:h-5/6 h-3/5">
                                <div className="text-center">
                                    <div className="md:col-span-3 border-white md:inline-flex md:justify-self-center md:h-auto uppercase"></div>
                                    <table className="md:table-auto -mt-6 border-collapse border border-gray-400 w-full md:col-span-full md:text-lg text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 ...">
                                                    TIME OF
                                                    VIOLATION:
                                                </th>
                                                <th className="border border-gray-300 ...">
                                                    NUMBER OF VIOLATORS
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 ...">12:10 PM</td>
                                                <td className="border border-gray-300 ...">1</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">10:30 AM</td>
                                                <td className="border border-gray-300 ...">3</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">1</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">1</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">1</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">1</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">1</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">1</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">1</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">2</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">2</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">2</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">2</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">2</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 ...">9:04 AM</td>
                                                <td className="border border-gray-300 ...">8</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Menu>
        </div>
    )
}


export default Gallery