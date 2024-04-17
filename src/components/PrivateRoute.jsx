import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    console.log(location);

   if(loading){
    return <h2 className="p-2 text-5xl text-red-500">LOading........</h2>
   }

    if(!user){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;