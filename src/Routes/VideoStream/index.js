import { mdiTab } from '@mdi/js'
import React from 'react'
import { Link } from 'react-router-dom'

const VideoStream = () => {
    return (
        <div className='lg:overflow-y-hidden'>
            <div className="w-full h-screen md:flex md:flex-wrap bg-blue-200 pt-20">
                <div className=" md:w-2/3 sm:w-full flex flex-col">
                    <div id="" className="relative md:h-4/6 sm:h-full md:w-3/4 sm:w-full mr-auto ml-auto md:mt-14">
                        <iframe title="aa" className="md:relative w-full md:pr-0 h-full"
                            src="./video/sample.mp4"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className='md:text-right md:pt-10 md:mr-28 to-black md:text-lg cursor-pointer md:hover:to-gray-400'><Link to="/gallery">
                        G A L L E R Y <i class="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="sm:w-full md:w-1/3 md:pb-10 md:h-screen">
                    <div className="col-auto bg-red-50 w-full h-1/2">
                        <div className="pt-5 font-bold pl-2 grid-rows-1">Date: 01-26-2022</div>
                        <div className="pl-2 font-bold grid-rows-1">Time:  12:10 PM</div>
                        <div className="w-1/2pb-10s flex flex-col justify-center md:justify-start my-auto h-3/4">
                            <img className="object-cover  inline-flex justify-self-center md:mt-15  h-5/6  md:block md:m-auto md:w-3/4" alt="" src="./images/socialdistancing.jpg" />
                        </div>
                    </div>
                    <div className="md:col-auto bg-black md:w-full md:h-2/5 text-white">

                        <div className="text-center h-full">
                            <div className="md:col-span-3 border-white md:py-2 md:inline-flex md:justify-self-center md:h-auto">DATE: 01-26-2022</div>
                            <table className="md:table-auto border-collapse border border-gray-400 w-full md:col-span-full md:py-3 md:mb-2">
                                <thead className="md:py-2">
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoStream
