import React from 'react';
import { Link } from 'react-router-dom';
import { useTime } from 'react-timer-hook';

const VideoStream = () => {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date());

    const {
        // seconds,
        minutes,
        hours,
        ampm,
    } = useTime({ format: '12-hour' });
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
    // const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `Date: ${today.toLocaleDateString(locale, { month: 'long' }- {year: 'long'})}\n\n`;
    return (
        <div className='lg:overflow-y-hidden'>
            <div className="w-full h-screen md:flex md:flex-wrap bg-blue-200 md:pt-20 p-2">
                <div className=" md:w-2/3 sm:w-full flex flex-col">
                    <div id="" className="relative md:h-4/6 sm:h-full md:w-3/4 sm:w-full mr-auto ml-auto md:mt-14">
                        <iframe title="aa" className="md:relative w-full md:pr-0 h-full"
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className='text-right md:pt-10 mr-28 to-black md:text-lg cursor-pointer md:hover:to-gray-400'><Link to="/gallery">
                        G A L L E R Y <i class="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="sm:w-full md:w-1/3 md:pb-10 md:h-screen ">
                    <div className="col-auto bg-bgstreamImage w-full -mt-3 h-1/2 uppercase -mb-4">
                        <div className="pt-5 font-bold pl-2 grid-rows-1"><span>{date}</span></div>
                        <div className="pl-2 font-bold grid-rows-1">Time:  <span>{hours}</span>:<span>{minutes}</span> <span>{ampm}</span></div>
                        <div className="w-1/2pb-10s flex flex-col justify-center md:justify-start my-auto h-3/4">
                            <img className="object-cover  inline-flex justify-self-center md:mt-15  h-5/6  md:block md:m-auto md:w-3/4" alt="" src="./images/socialdistancing.jpg" />
                        </div>
                    </div>
                    <div className="md:col-auto bg-black md:w-full md:h-3/6 text-white overflow-y-scroll">

                        <div className="text-center h-full">
                            <div className="md:col-span-3 border-white md:py-2 md:inline-flex md:justify-self-center md:h-auto uppercase">{date}</div>
                            <table className="md:table-auto border-collapse border border-gray-400 w-full md:col-span-full md:py-3 md:mb-2 md:text-lg text-sm">
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
    )
}

export default VideoStream
