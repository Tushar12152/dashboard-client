import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-12 ">
                <div className="bg-blue-300 h-screen col-span-2">


                </div>
                <div className="bg-white col-span-10 pl-10">
                      <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;