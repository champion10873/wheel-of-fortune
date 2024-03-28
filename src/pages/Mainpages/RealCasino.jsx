import { useState, useEffect } from "react";
import React from "react";
import SpinWheel from "../../Components/SpinWheel.jsx";
import { useSelector } from "../../store/index.js";

const RealCasino = (props) => {

    const players = useSelector((state) => state.memberinfo);
    // console.log(database);

    useEffect(() => {
        console.log(players);
    }, [players])

    return (

        <div className="flex flex-row flex-wrap bg-cover bg-center min-h-[100vh] w-[100vw] bg-black justify-center items-center "
        // style={{backgroundImage: "url('./6.png')", backgroundSize: "100vw 100vh"}}
        >
            <div className="flex flex-col flex-wrap items-center p-3 md:p-0 hidden xl:block ">
                <img src="./images/bonus2.png" alt="bonus" className="w-[30em] h-[25em] m-auto" />
                <div className="flex flex-row  items-center relative">
                    <img src="./icons/cup.png" alt="cup" className="w-[12em] min-h-[17em]" />
                    <img src="./icons/getmoney.png" alt="getmoney" className="w-[15em] h-[18em] ml-[-3em]" />
                    <div className="h-[15em]">
                        <img src="./icons/goldbar.png" alt="goldbar" className="w-[13em] md:w-[15em] h-[6em] ml-[-4em]" />
                    </div>
                    <img src="./icons/moneypocket.png" alt="moneypocket" className="absolute w-[12em] h-[14em] left-36 animate-bounce w-6 h-4" />
                    <img src="./icons/moneytower.png" alt="moneytower" className="absolute w-[12em] left-[18em] md:left-[23em] bottom-2" />
                </div>
            </div>
            <div className="flex flex-col items-center pl-5 pr-5 gap-6 justify-between p-10 " >
                <img src="./icons/jackpot.png" alt="jackpot" className="h-[10em] " />
                <SpinWheel />

            </div>
            <div className="relative p-12 flex lg:flex-col justify-around items-center overflow-auto w-[20em] h-[30em] border-8 border-solid border-[#f1ac50] rounded-[3em] pt-1 pb-2">
                <div className="flex flex-wrap lg:flex-col items-center justify-center gap-3 absolute top-3  ">
                    <p className="text-[#f1ac50] text-[3em] ">players</p>
                    {players.map((players) => 
                        <div className="flex w-[13em] h-[4em] bg-cover bg-center text-[1.3em] font-extrabold text-[#1c1b66] items-center justify-center" style={{ backgroundImage: "url('./icons/00.png')", backgroundSize: "13em 4em" }}>
                            {/* {players.user_id} */}
                            {players.prizeNumber}
                        </div>)
                    }
                </div>
                
            </div>

        </div>

    );

}

export default RealCasino;