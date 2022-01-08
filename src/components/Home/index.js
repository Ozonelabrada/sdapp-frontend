import React from 'react'
import PropTypes from 'prop-types'


const Home = props => {
    return (
        <div className='bg-bgHome pt-10 lg:overflow-y-hidden'>
            <div className="w-full h-screen flex flex-wrap">
                <div className="w-screen md:w-1/2 flex flex-colpb-4 2xl:px-24">
                <h1 className="md:p-16 p-2 xl:text-6xl md:text-5xl text-3xl font-black leading-snug md:mt-20"
                    style={{ fontFamily: "Montserrat" }}>
                    AI-BASED
                    SOCIAL
                    DISTANCING
                    MONITORING
                    SYSTEM
                </h1>
                </div>
                <div className="flex-col md:w-1/2 justify-center h-screen justify-self-center block m-auto md:pt-16">
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
