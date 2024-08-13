import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {

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

    console.log(user?.email)

console.log(users)

const existingUser= users.find(users?.email===user?.email)

console.log(existingUser)

    return (
        <div>
            <div className="grid grid-cols-12 ">
                <div className="bg-blue-300 h-screen col-span-2">
                   {/* Dashboards all routs */}




                     <div className="border-t-2  mt-10">
                           <button className='text-center hover:bg-gray-100 w-full  p-1  rounded-lg mt-5 text-white hover:text-black ' onClick={handleSignout}>Log out</button>
                     </div>



                </div>
                <div className="bg-white col-span-10 pl-10">
                    <div className="h-14 bg-gray-100 flex justify-between w-[95%]">
                          <div></div>
                          <div>
                               <img className="w-14 h-14 rounded-full" src='https://i.ibb.co/ZWC97rH/blog-3.jpg' alt="" />
                          </div>
                    </div>
                      <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;