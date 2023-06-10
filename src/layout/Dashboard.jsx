import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBookOpen, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li> <Link to="/dashboard/mycart"> <FaHome/> User Home </Link> </li>
                        <li> <Link to="/dashboard/mycart"> <FaCalendarAlt/> Reservations </Link> </li>
                        <li> <Link to="/dashboard/mycart"> <FaWallet></FaWallet> Payment History </Link> </li>
                        <li> <Link to="/dashboard/mycart"> <FaShoppingCart></FaShoppingCart> My Cart </Link> </li>
                        <div className="divider"></div>
                        <li> <Link to="/"> <FaHome/> Home </Link> </li>
                        <li> <Link to="/classes"> <FaBookOpen></FaBookOpen> Classes </Link> </li>
                        <li> <Link to="/instructors"> <FaUsers></FaUsers> Instructors </Link> </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;