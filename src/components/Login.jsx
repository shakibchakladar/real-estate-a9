// import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../firebaaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const {signInUser}=useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

// handle navigate
const navigate=useNavigate();
const location=useLocation();
const from=location?.state || "/";



      const onSubmit= (data) =>{
        const {email,password}=data;


        signInUser(email,password)
        .then(result=>{
            if(result.user){
              navigate(from)
            }
          })
        .catch(error=>{
            console.log(error);
        })
      }
    return (
        <>
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">If you want to access our website please log in here</p>
                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered"
                            {...register("email", { required: true })}
                            />
                             {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered"
                             {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                            {/* {/* <PasswordResetModal/> */}
                        </div>
                        <div className="p-0 mt-6 form-control">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                        <label className="label">
                            New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                        </label>
                        <SocialLogin/>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;