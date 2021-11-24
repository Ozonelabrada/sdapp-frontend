import React from 'react'

const Home = () => {
    return (
        <div className="h-screen w-screen signIn-page justify- m-3 row-span-full grid grid-flow-col gap-2">
            <br />
            <div className="bg-gray-900 w-3/3 sm:w-1/1  sm:p-5 p-20 col-span-1">
                    <h1 className="text-center text-6xl l lg:text-8xl md:text-8xl sm:text-8xl  leading-9 font-extrabold text-white w-full mt-1" >KITA:</h1>
                <div className="w-full mt-5">
                    <h1 className="text-center text-3xl leading-10 font-extrabold text-white w-full pl-10 pt-5 pr-10">AI-BASED
                        SOCIAL
                        DISTANCING
                        MONITORING
                        SYSTEM</h1>
                </div>
            </div>
            <div className="col-span-5 bg-purple-900 p-10  sm:w-1/1  sm:p-5">Thank you, @dogukan. I am just wondering - I used the 20-80% width ratio as an example, what if I need one column to be like 40px and the other one 260px? Can I still use the grid system here? – 
user98462</div>
            {/* <div class="bg-local md:bg-fixed" style="background-image: url('../images/logo512.png')"></div> */}
        </div>
    )
}

export default Home
