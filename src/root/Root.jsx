import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="mb-7">
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;