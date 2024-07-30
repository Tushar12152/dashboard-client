import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const useAuth = () => {

   const result= useContext(AuthContext)


    return result;
};

export default useAuth;