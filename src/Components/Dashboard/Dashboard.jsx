import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Dashboard = () => {

    const [open,setOpen]=useState(false)
    const {logout,user}=useAuth()
    const navigate=useNavigate()

    const handleSignout=()=>{
         logout()
         navigate('/')
    }

    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data
      }
    });

    // console.log(user?.email)

// console.log(users)

const existingUser= users.find(use=>use?.email===user?.email)

console.log(existingUser)


// const handleOpen=()=>{

// }



    return (
        <div>


            <div className="grid grid-cols-12 ">
                <div className="bg-blue-300 h-screen col-span-2">
                   {/* Dashboards all routs */}




                     <div className="border-t-2  mt-10">
                           <button className='text-center hover:bg-gray-100 w-full  p-1  rounded-lg mt-5 text-white hover:text-black ' >...............</button>
                     </div>



                </div>
                <div className="bg-white col-span-10 pl-10 relative">
  <div className="h-14 flex justify-between w-[95%]">
    <div></div>
    <div className="relative">
      <img
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full cursor-pointer p-2"
        src={existingUser?.imageURL}
        alt=""
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-blue-300 rounded-lg shadow-lg z-10 p-5">
          {/* Dropdown content here */}
       <div className="hover:bg-gray-300 text-center rounded-lg"> <Link className="p-2 mb-2 text-center text-white">Profile</Link></div>
       <div className="hover:bg-gray-300 text-center rounded-lg"> <Link className="p-2 mb-2 text-center text-white">Settings</Link></div>
       <div className="hover:bg-gray-300 text-center rounded-lg" onClick={handleSignout}> <Link className="p-2 mb-2 text-center text-white">Logout</Link></div>
       
    
        </div>
      )}
    </div>
  </div>

  <Outlet />
</div>

            </div>


        </div>
    );
};

export default Dashboard;