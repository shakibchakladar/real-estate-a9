
// const UpdateProfile = () => {
//     return (
//         <div className="p-24">
//             <h2 className="text-8xl text-red-50">This is update profile page </h2>
           
//         </div>
//     );
// };

// export default UpdateProfile;






import {useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";


const UpdateProfile = () => {
  const { updateUser,user } = useAuth

  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  const handleNameChange = (e) => {

    setName(e.target.value)
  }


  const handlePhotoURLChange = (e) => {

    setPhotoURL(e.target.value)
  }
  useEffect(() => {

    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(name, photoURL)
      .then(result => {
        console.log(result)
        setPhotoURL()
        // setReload(true)
        // Navi("/");
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="flex items-center justify-center mt-10 mb-10 text-center dark:divide-gray-300">
    <div className="my-2 ">
      <form onSubmit={handleSubmit} className='space-y-3'>
        <h2 className='py-3 my-5 text-2xl text-center border-b-2 border-white'>{user?.email}</h2>
        <img src={user} alt="" />
        <div className='flex flex-col justify-center'>
          <label className='mb-1 text-lg font-semibold text-left '>Name:</label>
          <input type="text" className="w-full border-2 input input-bordered" placeholder="Name" value={name} onChange={handleNameChange} />
        </div>
        <div className='flex flex-col justify-center'>
          <label className='mb-1 text-lg font-semibold text-left '>Photo URL:</label>
          <input type="text" className="w-full border-2 input input-bordered" placeholder="Photo url" value={photoURL} onChange={handlePhotoURLChange} />
        </div>
        <button type="submit" className="btn bg-[#5BC0EB] text-white mt-5 mb-10">Save Changes</button>
      </form>
    </div>
  </div>

    );
};

export default UpdateProfile;