import React from 'react'
import PropTypes from 'prop-types'
import landing_img from './images/landing.webp'


const Home = props => {
    return (
        <div className="pt-20 flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:text-right text-center lg:w-4/12">
                <h1 className="pr-auto mx-auto  xl:text-5xl md:text-4xl text-4xl font-black"
                    style={{ fontFamily: "Montserrat" }}>
                    AI-BASED SOCIAL DISTANCING MONITORING SYSTEM
                </h1>
            </div>
            <div className="hidden md:block mx-10 lg:w-8/12">
                <img className="object-cover rounded-2xl" alt="" src={landing_img} />
            </div>
        </div>
    )
}

Home.propTypes = {
    name: PropTypes.bool,

}

export default Home
