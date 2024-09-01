import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Enrolled from './Enrolled';

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* dashboard side bar */}
            <div className="w-64 bg-gray-100 text-black">
                <ul className="menu p-4 lg:text-xl" >

                    <li className="mb-3 mt-5 ">
                        <NavLink to="/">
                            Home</NavLink>
                    </li>

                    <li className="mb-3 ml-3">
                        Contact
                    </li>

                    {/* shared nav links */}
                    <div className="divider divider-warning" ></div>
                    <li className="lg:mb-5 mb-3 ml-3">
                        Profile
                    </li>
                    <li className="lg:mb-5 mb-3 ml-3" >

                        Enroll Courses

                    </li>
                    <li className="lg:mb-5 mb-3 ml-3">
                        Give Feedback
                    </li>
                    <li className="lg:mb-5 mb-3 ml-3">
                        Logout
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Enrolled />
            </div>
        </div>
    );
};

export default Dashboard;