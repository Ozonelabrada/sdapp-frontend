import React from 'react'
import PropTypes from 'prop-types'


const Home = props => {
    return (
        <div>
            <div className="w-full h-screen flex flex-wrap bg-bgHome">
                <div className="w-screen md:w-1/2 flex flex-col">
                <h1 className="p-16 text-6xl font-black leading-snug md:mt-20"
                    style={{ fontFamily: "Montserrat" }}>
                    AI-BASED
                    SOCIAL
                    DISTANCING
                    MONITORING
                    SYSTEM
                </h1>
                </div>
                <div className="w-1/2 pb-10s">
                    <img className="object-cover rounded-3xl inline-flex justify-self-center md:mt-14  h-5/6  md:block md:m-auto md:w-3/4" alt="" src="./images/socialdistancing.jpg" />
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {
    name: PropTypes.bool,

}

export default Home
