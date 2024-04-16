import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const {googleLogin,gitHubLogin,twiter}=useAuth();
  return (
    <div>
      <button onClick={()=>googleLogin()}>Google</button>
      <button onClick={()=>gitHubLogin()}>Github</button>
      <button onClick={()=>twiter()}>Twiter</button>
    </div>
  );
};

export default SocialLogin;