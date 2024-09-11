import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Subscriptions = () => {
  const { user } = useAuth();
  const loggedMail = user?.email;
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  });

  const existingUser = users.find(user => user?.email === loggedMail);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transection = e.target.transection.value;
    const transectionNo = { transection, email: loggedMail };

    const result = await axiosSecure.post('/transections', transectionNo);

    if (result.data.insertedId) {
      toast.success('Your transaction ID is successfully submitted. Admin will respond within the next 12 hours.');
      setSubmitted(true);  // Hide the input field after submission
    }
  };

  return (
    <div>
      <h1 className="font-bold text-blue-400 text-2xl">
        Hey {existingUser?.name}, Welcome to our underworld.
      </h1>

      <p className="text-center font-bold my-5">User Instructions</p>
      <h3 className="mb-12">
        Please purchase a subscription plan for 3 months with 5000 TAKA, send the money on bkash to
        <span className="font-bold text-lg text-red-400"> 01705458741</span>,
        and submit the transaction number in the box below. Admin will manually check your transaction and approve you within the next 12 hours.
      </h3>

      <form className="flex gap-4" onSubmit={handleSubmit}>
        {!submitted && (
          <input
            type="text"
            placeholder="Transaction No."
            name="transection"
            className="input input-bordered input-lg w-full max-w-xs"
            required
          />
        )}

        <input
          className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition-all ease-in-out duration-200"
          type="submit"
          value={submitted ? "Already Submitted please wait for admin response" : 'Submit'}
          disabled={submitted}
        />
      </form>
    </div>
  );
};

export default Subscriptions;
