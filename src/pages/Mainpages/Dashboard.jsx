import React from "react";
import {useNavigate} from "react-router-dom";



const Dashboard = () => {
    const navigate = useNavigate();

    return (
       
        <div className="flex flex-col min-h-[100vh] bg-gradient-to-t from-[#0c1a73] to-[#0f1f99] w-[100vw] justify-center items-center pb-6">
            <div className="flex flex-row flex-wrap-reverse items-center justify-between md:justify-center">

                <img src="./images/firstpagewheel.png" className=" w-[50em] h-[50em] hidden xl:block" alt="topic image" />
                <div className="flex flex-col justify-center items-center">
                    <img src="./images/bonus1.png" className=" w-[40em] h-[20em] " alt="topic image" />
                    <img src="./images/casino.png" className=" w-[50em] h-[15em] md:h-[20em] mt-[-6em] peer-auto" alt="topic image" />
                    <div className="flex gap-[1em] justify-center flex-wrap pt-6">
                        <div class='button mb-7 h-16 w-[80vw] md:w-[15em] bg-gradient-to-t from-[#d25642] to-[#ffd828]  cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b520e5b,0_0px_0_0_#1b520e5b] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1bf3333d,0_15px_0_0_#1bf3333d] rounded-full  border-[1px] border-[#d25642]' onClick={navigate('')}>
                            <span class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Enjoy for Free!</span>
                        </div>
                        <div class='button h-16 w-[80vw] md:w-[15em]  bg-gradient-to-t from-[#42d25a] to-[#28a9ff]  cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#1bf7cd43,0_0px_0_0_#1bf7cd43] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1bf7cd43,0_15px_0_0_#1bf7cd43] rounded-full  border-[1px] border-[#d25642]' onClick={()=>navigate('registerpage')}>
                            <span class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Real Casino</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>



    );
};

export default Dashboard;