// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../firebaaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";

const Register = () => {
  const {createUser}=useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {email,password}=data
    createUser(email,password)
    .then(result=>{
      console.log(result);
    })
  };
  return (
        <>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div>
          <form onSubmit={handleSubmit(onSubmit)}
            className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="p-0 mt-6 form-control">
                <button className="btn btn-neutral">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
            </div>
            {/* <SocialLogin></SocialLogin> */}
          </form>
          <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;






// import { useForm } from "react-hook-form";
// import useAuth from "../hooks/useAuth";
// import { Link, useNavigate } from "react-router-dom";
// import SocialLogin from "../components/SocialLogin";

// const Register = () => {
//   const { createUser, updateUserProfile } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // navigation systems
//   const navigate = useNavigate();
//   const from = "/";

//   const onSubmit = (data) => {
//       const { email, password, image, fullName } = data;
      
//       //create user and update profile
//       createUser(email, password)
//           .then(() => {
//               updateUserProfile(fullName, image)
//                   .then(() => {
//                         navigate(from);
//       });
//     });
//   };

//   return (
//     <>
//       <div className="min-h-screen hero bg-base-200">
//         <div className="flex-col hero-content lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Register now!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//           </div>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100"
//           >
//             <div className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Full Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Full name"
//                   className="input input-bordered"
//                   {...register("fullName", { required: true })}
//                 />
//                 {errors.fullName && (
//                   <span className="text-red-500">This field is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="email"
//                   className="input input-bordered"
//                   {...register("email", { required: true })}
//                 />
//                 {errors.email && (
//                   <span className="text-red-500">This field is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Image Url</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="image url"
//                   className="input input-bordered"
//                   {...register("image")}
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="password"
//                   className="input input-bordered"
//                   {...register("password", { required: true })}
//                 />
//                 {errors.password && (
//                   <span className="text-red-500">This field is required</span>
//                 )}
//               </div>
//               <div className="p-0 mt-6 form-control">
//                 <button className="btn btn-neutral">Register</button>
//               </div>
//               <label className="label">
//                 Have an account?{" "}
//                 <Link to="/login" className="label-text-alt link link-hover">
//                   Please Login
//                 </Link>
//               </label>
//               <SocialLogin />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
