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
                            <img className="object-cover rounded-3xl inline-flex justify-self-center md:mt-15  h-5/6  md:block md:m-auto md:w-3/4" alt="" src="./images/socialdistancing.jpg" />
                        </div>
                    </div>
                    <div className="col-auto bg-black w-full h-2/4 text-white">
                        <div className="grid grid-cols-3 gap-1 text-center h-full border-collapse">
                            <div className="col-span-3 border-white border border-solid p-2">DATE: 01-26-2022</div>

                            <div className="border-white border border-solid p-2">TIME OF
                                VIOLATION:</div>
                            <div className="col-span-2 text-center border-white border border-solid p-2">02</div>

                            <div className="border-white border border-solid p-2">2:10 PM</div>
                            <div className="col-span-2 border-white border border-solid p-2">02</div>

                            <div className="border-white border border-solid p-2">10:30 AM</div>
                            <div className="col-span-2 border-white border border-solid p-2">02</div>

                            <div className="border-white border border-solid p-2">9:04 AM</div>
                            <div className="col-span-2 border-white border border-solid p-2">02</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoStream
