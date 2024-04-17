import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const {googleLogin,gitHubLogin,twiter,facebookLogin}=useAuth();


  const navigate=useNavigate();
  const location=useLocation();
  const from=location?.state || "/";

const handleSocialLogin=socialProvider=>{
  socialProvider()
  .then(result=>{
    if(result.user){
      navigate(from)
    }
  })
}

  return (
    <div>
      <button onClick={()=>handleSocialLogin(googleLogin)}>Google</button>
      <button onClick={()=>handleSocialLogin(gitHubLogin)}>Github</button>
      <button onClick={()=>handleSocialLogin(twiter)}>Twiter</button>
      <button onClick={()=>handleSocialLogin(facebookLogin)}>Facebook</button>
    </div>
  );
};

export default SocialLogin;