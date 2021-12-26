import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
    console.log(props.name);
    return (
        <div className="h-screen w-screen signIn-page justify row-span-full grid grid-flow-col gap-2">
            <br />
            <div className="bg-bgAboutL w-3/3 sm:w-1/1 col-span-1">
                <h1 className="text-center text-6xl l lg:text-8xl md:text-8xl  pt-40 sm:text-8xl  leading-9 font-extrabold text-white w-full mt-1" >KITA:</h1>
                <div className="w-full mt-5">
                    <h1 className="text-center text-4xl leading-10 font-black text-white w-full pl-24 pr-24"
                        style={{ fontFamily: "DM Sans" }}>
                        AI-BASED
                        SOCIAL
                        DISTANCING
                        MONITORING
                        SYSTEM</h1>
                </div>
            </div>
            <div className="col-span-3 text-2xl bg-bgAboutR mr-5  sm:w-1/1  sm:p-5 row-span-full grid grid-flow-col"
                style={{ fontFamily: "dm sans" }}>
                <div>
                    <p className="pt-40 pl-20">
                        KITA is a monitoring
                        system for social
                        distancing in a hallway
                        setting utilizing artificial
                        intelligence for object
                        detection, specifically
                        YOLOv4.</p>
                    <p className=" pl-20 pt-9">
                        This system comes with
                        an alarm to notify the
                        subjects that the required
                        social distancing has been
                        breached.
                    </p>
                </div>
                <div>
                    <p className="pt-40 p-10 pb-5">
                        The system will display the
                        data such as time and
                        number of violators of
                        when the breach occurred.
                    </p>
                    <p className="p-10">
                        It also captures an image
                        of when the breach
                        occurred.
                    </p>
                </div>
            </div>
        </div>
    )
}

About.propTypes = {
    name: PropTypes.bool,

}

export default About
