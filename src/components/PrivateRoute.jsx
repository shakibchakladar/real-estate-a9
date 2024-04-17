import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user}=useAuth();
    const location=useLocation();
    // console.log(location);
    if(!user){
        return <Navigate to="/login" state={location?.pathname ||'/home'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;