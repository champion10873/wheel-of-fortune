import { Outlet } from "react-router-dom";

// project import


const AuthLayout = () => {
    return (
        <div className="w-[100vw] min-h-[100vh]  flex justify-center items-center bg-blue-950">
            <Outlet />
            <img src="./images/wheel-2.png" className="absolute animate-bounce w-6 h-4 right-10 top-[6em] w-72 h-72 hidden lg:block" alt="it's your time." />

        </div>

    );
};

export default AuthLayout;