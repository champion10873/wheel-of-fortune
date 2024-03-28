import React from "react";
import Welcome from "../../Components/Welcome";

const WelcomePage = () => {
    return (
        <div className="flex flex-col items-center w-[100vw] h-[100vh] bg-black pt-[6em]">
            <img src="./images/winner.png" alt="winner" className="w-[35em] h-[15em] pl-3 pr-3" />
            <div className="flex justify-center w-[90vw] lg:w-[60vw] h-[28em] bg-cover bg-center bg-no-repeat mt-[1.5em] " style={{ backgroundImage: "url('./frames/3.png')", backgroundSize: "60vw 28em"}}>
                <div className="flex w-[13em] h-[4.2em] bg-cover bg-no-repeat bg-center text-[1.3em] font-extrabold text-[#1c1b66] items-center justify-center mt-[5em]" style={{ backgroundImage: "url('./icons/00.png')", backgroundSize: "13em 4.2em", backgroundPositionX: "center"}}>
                    UserName12345456
                </div>
            </div>

            <Welcome />
        </div>
    );
}

export default WelcomePage;