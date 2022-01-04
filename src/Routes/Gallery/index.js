import React, { Component } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames';


class Gallery extends Component {
    render() {
        return (
            <div className="bg-bgAboutL h-screen xl:pt-28 md:pt-28 w-screen pt-8">
                <div class="p-0 grid grid-rows-2 ml-10 -mt-14 text-white grid-flow-col gap-4">
                    <div className='cursor-pointer self-center'>
                        <div class="grid grid-cols-6 gap-4">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className='w-80 font-bold xl:text-5xl md:text-4xl self-center'>
                                G A L L E R Y
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-96 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                            <Menu as="div" className="text-xl self-center">
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full  px-4 py-2  font-medium text-white ">
                                        YEAR
                                        <i class="mdi mdi-chevron-down"></i>
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="w-20 rounded-md bg-white ring-1 ring-opacity-5 focus:outline-none">
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
                            </Menu>

                    </div>
                </div>
                <div class="grid xl:grid-rows-4 xl:pl-24 grid-rows-6 grid-flow-col px-2 gap-4 w-screen text-white">
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>January</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>February</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>March</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>April</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>May</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>June</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>July</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>August</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>September</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>October</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>November</div>
                    </div>
                    <div class="grid grid-cols-6 self-center my-5 w-3/4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12 relative" fill="#f26d6f" viewBox="0 0 24 24" stroke="#b55458">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <div className='pl-10 text-xl float-left self-center'>December</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery