import React from 'react'
import { Link } from 'react-router-dom'

const VideoStream = () => {
    return (
        <div>
            <div className="w-full h-screen flex flex-wrap bg-blue-200">
                <div className=" md:w-2/3 flex flex-col">
                    <div id="" className="relative md:h-5/6 md:w-3/4 md:m-auto p-0">
                        <iframe className="relative md:w-full pr-0 md:h-full"
                            src="./video/sample.mp4"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="w-1/3 pb-10 bg-gray-700">
                <div className="col-auto bg-red-50 w-full h-1/2">
                    <span className="text-justify">Date:</span>
                    <span className="row-span-full">Time:</span>

                </div>
                </div>
            </div>
        </div>
    )
}

export default VideoStream
