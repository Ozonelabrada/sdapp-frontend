import { mdiTab } from '@mdi/js'
import React from 'react'

const VideoStream = () => {
    return (
        <div>
            <div className="w-full h-screen flex flex-wrap bg-blue-200">
                <div className=" md:w-2/3 flex flex-col">
                    <div id="" className="relative md:h-5/6 md:w-3/4 md:m-auto p-0">
                        <iframe title="aa" className="relative md:w-full pr-0 md:h-full"
                            src="./video/sample.mp4"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="w-1/3 pb-10 bg-gray-700 md:h-screen">
                    <div className="col-auto bg-red-50 w-full h-1/2">
                        <div className="pt-5 font-bold pl-2 grid-rows-1">Date: 01-26-2022</div>
                        <div className="pl-2 font-bold grid-rows-1">Time:  12:10 PM</div>
                        <div className="w-1/2pb-10s flex flex-col justify-center md:justify-start my-auto h-3/4">
                            <img className="object-cover  inline-flex justify-self-center md:mt-15  h-5/6  md:block md:m-auto md:w-3/4" alt="" src="./images/socialdistancing.jpg" />
                        </div>
                    </div>
                    <div className="col-auto bg-black w-full h-2/4 text-white">

                        <div className="text-center h-full">
                            <div className="col-span-3 border-white py-2 inline-flex justify-self-center h-auto">DATE: 01-26-2022</div>
                            <table className="table-auto border-collapse border border-gray-400 md:w-full col-span-full py-3 mb-2">
                                <thead className="py-2">
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
