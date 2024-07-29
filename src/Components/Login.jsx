import { useState } from "react";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";


const Login = () => {

    const [visible, setVisible]=useState(true)

    
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse animate-fade-in">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl transform transition duration-500 hover:scale-105">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                          <div className="relative">
                          <input type="password" placeholder="Password" className="input input-bordered w-full" required />
                            <span className="absolute top-3 right-2">
                            {
                                visible?<BsEyeFill/>:<BsEyeSlash/>
                            }
                            </span>
                          </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture</span>
                            </label>
                            <input type="file" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">NID Number</span>
                            </label>
                            <input type="text" placeholder="NID Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
