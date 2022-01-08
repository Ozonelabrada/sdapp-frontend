import React from 'react'
import PropTypes from 'prop-types'


const Home = props => {
    return (
        <div className='overflow-hidden'>
            <div className='bg-bgHome'>
                <div className="h-full pt-2 w-full flex flex-wrap">
                    <div className="w-full md:w-1/2 flex flex-col pb-4 2xl:px-24">
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
                        <img className="object-cover rounded-3xl h-full w-screen" alt="" src="./images/socialdistancing.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {
    name: PropTypes.bool,

}

export default Home
