import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayouts = () => {
    


    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-384px)]">
                <Outlet />
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default MainLayouts;
