import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const {googleLogin}=useAuth();
  return (
    <div>
      <button onClick={()=>googleLogin()}>Google</button>
    </div>
  );
};

export default SocialLogin;