import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";

const UsersRequest = () => {

    const axiosSecure = useAxiosSecure();
    const [aprove,setAprove]=useState(false)
    const { data: users = [] } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data
      }
    });

 

console.log(users)

    return (
        <div>
            {
                <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      
                      <th>Name</th>
                      <th>Email</th>
                      <th>NID</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                      {
                        users.map(user=>  <tr key={user?._id}>
                            
                            <td>
                              <div className="flex items-center gap-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle h-12 w-12">
                                    <img
                                      src={user?.imageURL}
                                      alt="image" />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">{user?.name}</div>
                                 
                                </div>
                              </div>
                            </td>
                            <td>{user?.email}</td>
                            <td>{user?.nid}</td>
                            <th>
                              <button className="btn btn-ghost btn-xs">{user?.Role}</button>
                            </th>
                          </tr>)
                      }
                   </tbody>
                </table>
              </div>
            }
        </div>
    );
};

export default UsersRequest;