import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    console.log(location);

   if(loading){
    return <div className="text-center"><span className="text-center loading loading-bars loading-lg"></span></div>
    
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