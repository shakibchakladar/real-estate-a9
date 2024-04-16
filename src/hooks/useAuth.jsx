import  { useContext } from 'react';
import { AuthContext } from '../firebaaseProvider/FirebaseProvider';
// import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

const useAuth = () => {

    const all = useContext(AuthContext)
    return all;
};

export default useAuth;