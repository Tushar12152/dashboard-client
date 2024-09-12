import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const TransectionNo = () => {

  const axiosSecure = useAxiosSecure();  


    const { data: transections = [] } = useQuery({
        queryKey: ['transection'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/transections`);
          return res.data;
        }
      });

      console.log('..', transections)

    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
       
     
        <th>Email</th>
        <th>Tramsection No.</th>
      </tr>
    </thead>
    <tbody>
      {
        transections.map(transection=> <tr key={transection?._id}>
       
          
          <td>{transection?.email}</td>
          <td>{transection?.transection}</td>
        </tr>)
      }
      
     
    </tbody>
  </table>
</div>
             
        </div>
    );
};

export default TransectionNo;