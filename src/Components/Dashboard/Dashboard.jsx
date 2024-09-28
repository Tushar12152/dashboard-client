import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    logout();
    navigate("/");
  };

  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const existingUser = users.find((use) => use?.email === user?.email);

  return (
    <div className="bg-gradient-to-b from-green-100 to-gray-100 min-h-screen">
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <div className="bg-gray-900 text-white h-screen col-span-2 p-5">
          <div className="text-white text-2xl font-bold mb-5">Welcome</div>
          <div className="flex items-center mb-8">
           
            <div>
              <p>{existingUser?.name}</p>
              <p className="text-sm text-gray-400">Status: {existingUser?.Role}</p>
            </div>
          </div>

          {/* User Role-based Navigation */}
          {existingUser?.Role === "admin" ? (
            <div className="space-y-4">
              <div className="hover:bg-gray-700 text-center rounded-lg p-2">
                <Link to="/dashboard/usersRequest" className="text-white">
                  Users Request
                </Link>
              </div>
              <div className="hover:bg-gray-700 text-center rounded-lg p-2">
                <Link to="/dashboard/transection" className="text-white">
                  All Transactions
                </Link>
              </div>
            </div>
          ) : existingUser?.Role === "user" ? (
            <div className="hover:bg-gray-700 text-center rounded-lg p-2">
              <Link to="/dashboard/subscriptions" className="text-white">
                Subscriptions
              </Link>
            </div>
          ) : (
            <div>
               
               <Link to="/dashboard/settings" className="text-white text-center">
                Settings
              </Link>

            </div>
          )}

          {/* Sign Out Button */}
          <div className="border-t-2 border-gray-600 mt-10 pt-5">
            <button
              className="text-center hover:bg-gray-300 w-full p-2 rounded-lg text-white hover:text-black"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="bg-white col-span-10 p-10">
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
                <div className="absolute right-0 mt-2 w-36 bg-gray-100 rounded-lg shadow-lg z-10 p-5">
                  <div className="hover:bg-gray-300 text-center rounded-lg mb-2">
                    <Link className="p-2 text-gray-800">Profile</Link>
                  </div>
                  <div className="hover:bg-gray-300 text-center rounded-lg mb-2">
                    <Link className="p-2 text-gray-800">Settings</Link>
                  </div>
                  <div
                    className="hover:bg-red-300 text-center rounded-lg"
                    onClick={handleSignout}
                  >
                    <Link className="p-2 text-gray-800">Logout</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dashboard Content */}
        

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;












// import { Link, Outlet, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";

// const Dashboard = () => {

//   const [open, setOpen] = useState(false)
//   const { logout, user } = useAuth()
//   const navigate = useNavigate()

//   const handleSignout = () => {
//     logout()
//     navigate('/')
//   }

//   const axiosSecure = useAxiosSecure();

//   const { data: users = [] } = useQuery({
//     queryKey: ['user'],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users`)
//       return res.data
//     }
//   });

//   // console.log(user?.email)

//   // console.log(users)

//   const existingUser = users.find(use => use?.email === user?.email)

//   console.log(existingUser)


//   // const handleOpen=()=>{

//   // }



//   return (
//     <div>


//       <div className="grid grid-cols-12  bg-gradient-to-r from-green-100 to-white">
//         <div className="bg-gradient-to-r from-green-100 to-gray-400 h-screen col-span-2">
//           {/* Dashboards all routs */}


//           {
//             existingUser?.Role == "admin" ? <div className="py-5">
//               <div className="hover:bg-gray-300 text-center rounded-lg mb-2"> <Link to='/dashboard/usersRequest' className="p-2 mb-2 text-center text-white">Users request</Link></div>
//               <div className="hover:bg-gray-300 text-center rounded-lg mb-2"> <Link to='/dashboard/transection' className="p-2 mb-2 text-center text-white">All Transections</Link></div>
//             </div>
//               :

//               <div>
//                 {
//                     existingUser?.Role == "user" ? <div> 
//                             <div className="hover:bg-gray-300 text-center rounded-lg my-2"> <Link to='/dashboard/subscriptions' className="p-2 mb-2 text-center text-white">Subscriptions</Link></div>
//                        </div> : 
                       
//                        <div>  aprroved user </div>
//                 }
//               </div>
//           }



//           <div className="border-t-2  mt-10">
//             <button className='text-center hover:bg-gray-100 w-full  p-1  rounded-lg mt-5 text-white hover:text-black ' >...............</button>
//           </div>



//         </div>
//         <div className="bg-white col-span-10 pl-10 relative">
//           <div className="h-14 flex justify-between w-[95%]">
//             <div></div>
//             <div className="relative">
//               <img
//                 onClick={() => setOpen(!open)}
//                 className="w-14 h-14 rounded-full cursor-pointer p-2"
//                 src={existingUser?.imageURL}
//                 alt=""
//               />

//               {/* Dropdown */}
//               {open && (
//                 <div className="absolute right-0 mt-2 w-36 bg-blue-300 rounded-lg shadow-lg z-10 p-5">
//                   {/* Dropdown content here */}
//                   <div className="hover:bg-gray-300 text-center rounded-lg"> <Link className="p-2 mb-2 text-center text-white">Profile</Link></div>
//                   <div className="hover:bg-gray-300 text-center rounded-lg"> <Link className="p-2 mb-2 text-center text-white">Settings</Link></div>
//                   <div className="hover:bg-gray-300 text-center rounded-lg" onClick={handleSignout}> <Link className="p-2 mb-2 text-center text-white">Logout</Link></div>


//                 </div>
//               )}
//             </div>
//           </div>

//           <Outlet />
//         </div>

//       </div>


//     </div>
//   );
// };

// export default Dashboard;






