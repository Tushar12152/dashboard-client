import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const Subscriptions = () => {

    const { user } = useAuth()
    const loggedMail = user?.email

    // console.log(loggedMail)

    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    });

    // console.log(users)


    const existingUser = users.find(user => user?.email === loggedMail)

    // console.log(existingUser)


    const handleSubmit=(e)=>{
        e.preventDefault()

         const transection= e.target.transection.value;

         console.log(transection)
    }

    return (
        <div>
            subscriptions for new user page

            <h1 className="font-bold text-blue-400 text-2xl"> Hey {existingUser?.name}, Welcome to our under world.  </h1>

            <p className="text-center font-bold my-5">User Instructions</p>
            <h3 className="mb-12">Please purchase a subscription plan for 3 months with 5000 TAKA, send the money on bkash to <span className="font-bold text-lg text-red-400">01705458741</span>, and submit the transaction number on the bellow box. Admin will manually check your transection and aprove you within the next 12 hour.</h3>

            <form className="flex gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Transection No."
                    name="transection"
                    className="input input-bordered input-lg w-full max-w-xs" />

                    <input className="bg-blue-400 p-5 rounded-lg" type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default Subscriptions;