import { useState, useEffect } from 'react';
import { BsEyeFill, BsEyeSlash } from 'react-icons/bs';
import './globals.css'; // Import the CSS file

const Login = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Create raindrops dynamically when the component mounts
        const createRaindrops = () => {
            const rainContainer = document.createElement('div');
            rainContainer.className = 'rain';
            document.body.appendChild(rainContainer);

            const numberOfRaindrops = 100;
            for (let i = 0; i < numberOfRaindrops; i++) {
                const raindrop = document.createElement('div');
                raindrop.className = 'raindrop';
                raindrop.style.width = `${Math.random() * 2 + 1}px`;
                raindrop.style.height = `${Math.random() * 20 + 10}px`;
                raindrop.style.left = `${Math.random() * 100}vw`;
                raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
                raindrop.style.animationDelay = `-${Math.random() * 2}s`;
                rainContainer.appendChild(raindrop);
            }
        };

        createRaindrops();

        // Cleanup the rain container when the component unmounts
        return () => {
            const rainContainer = document.querySelector('.rain');
            if (rainContainer) {
                rainContainer.remove();
            }
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="hero-content flex-col lg:flex-row-reverse animate-fade-in">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl transform transition duration-500 hover:scale-110 hover:shadow-3xl hover:rotate-1">
                    <form className="card-body p-8">
                        <h2 className="text-3xl font-bold text-center mb-6 text-gradient">Sign In</h2>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered border-2 border-gray-300 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered border-2 border-gray-300 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="form-control mb-4 relative">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type={visible ? "password" : "text"} placeholder="Password" className="input input-bordered border-2 border-gray-300 w-full transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" required />
                            <span onClick={() => setVisible(!visible)} className="absolute top-3 right-2 cursor-pointer text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
                                {visible ? <BsEyeFill size={20} /> : <BsEyeSlash size={20} />}
                            </span>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-lg">Picture</span>
                            </label>
                            <input type="file" className="input input-bordered border-2 border-gray-300 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-lg">NID Number</span>
                            </label>
                            <input type="text" placeholder="NID Number" className="input input-bordered border-2 border-gray-300 transition duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-lg w-full shadow-md hover:shadow-lg">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
