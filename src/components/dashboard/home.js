import React from 'react'
import PropTypes from 'prop-types'
import socialdistancing from './images/socialdistancing.jpg'


const Home = props => {
    console.log(props.name);
    console.log({backgroundImage:`url("${socialdistancing}")`});
    return (
        <div className="h-screen w-screen  row-span-full grid grid-flow-col bg-green-200">
            <div className="col-span-1">
                <h1 className="p-16 text-6xl leading-20  md:w-1/2"
                    style={{ fontFamily: "DM Sans" }}>
                    AI-BASED
                    SOCIAL
                    DISTANCING
                    MONITORING
                    SYSTEM
                </h1>
            </div>
            <div className=" p-10 col-span-1" >
                <img className="rounded-3xl w-screen object-center" alt="" src="./images/socialdistancing.jpg" />
            </div>
        </div>
    )
}

Home.propTypes = {
    name: PropTypes.bool,

}

export default Home
