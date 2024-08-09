import { useState } from 'react';
import { BsEyeFill, BsEyeSlash } from 'react-icons/bs';
import './globals.css'; // Import the CSS file
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { imageUpload } from '../APIS/ImageUpload';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';



const Register = () => {
    const [visible, setVisible] = useState(true);
    const { createUser, loading } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const image = e.target.image.files[0];
            const nid = e.target.nid.value;

            // Validate image file
            if (!image) {
                return toast.error('Please upload an image.');
            }

            const imageUrl = await imageUpload(image);
            const imageURL = imageUrl?.data?.display_url;
            if (!imageURL) {
                return toast.error('Failed to upload image.');
            }

            const user = {
                name,
                email,
                nid,
                imageURL,
                Role: 'user'
            };



            const result = await createUser(email, password);
            if (result.user) {
               
                // console.log(user);
                // data backend e jabe ekhan theke
                const result =await axiosSecure.post('/users', user) 
                // console.log(result)
                if (result.data.insertedId) {
                    toast.success('Registration completed.');
                    navigate('/')
                }
                
                
               

            }
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('An error occurred. Please try again.');
        }
    };




    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative">
            {/* Full-page sunshine effect */}
            <div>

                <div className="sunshine-container">
                    <div className="sunshine"></div>

                </div>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse ">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl transform transition duration-500 npm install firebase hover:shadow-3xl ">
                    <form onSubmit={handleSubmit} className="card-body p-8">
                        <h2 className="text-3xl font-bold text-center mb-1 text-gradient">Sign Up</h2>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered border-2 border-gray-300 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Email" className="input input-bordered border-2 border-gray-300 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="form-control mb-1 relative">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input name='password' type={visible ? "password" : "text"} placeholder="Password" className="input input-bordered border-2 border-gray-300 w-full transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" required />
                            <span onClick={() => setVisible(!visible)} className="absolute top-14 right-2 cursor-pointer text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
                                {visible ? <BsEyeFill size={20} /> : <BsEyeSlash size={20} />}
                            </span>
                        </div>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text text-lg">Picture</span>
                            </label>
                            <input name='image' type="file" className="input input-bordered border-2 border-gray-300 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="form-control mb-1">
                            <label className="label">
                                <span className="label-text text-lg">NID Number</span>
                            </label>
                            <input name='nid' type="text" placeholder="NID Number" className="input input-bordered border-2 border-gray-300 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" required />
                        </div>

                        <p>Already have an account? Please <Link className='text-blue-400' to='/'>login</Link></p>
                        <div className="form-control mt-6">
                            <button className={`${loading ? 'bg-red-400' : 'bg-blue-400'} "btn btn-primary  hover:bg-blue-700 transition duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-lg w-full shadow-md hover:shadow-lg"`}>
                                {loading ? '.....' : " Register"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
