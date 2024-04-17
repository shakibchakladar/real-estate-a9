import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="-mt-5">
            <Nav></Nav>
            </div>
            <div className="py-10">
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;