import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaBookOpen, FaCalendarAlt, FaHome, FaLaptopCode, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
// import UseAdmin from '../hooks/UseAdmin';
import UseInstructor from '../hooks/useInstructor';
import UseAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    

    const [isAdmin] = UseAdmin();
    const [isInstructor] = UseInstructor();
//   console.log(isInstructorLoading)
    return (
        <div className="container mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#5ab337d6] text-base-content">
                        {
                            isAdmin?.admin ? <> <li> <NavLink  className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/dashboard"> <FaHome /> Admin Home </NavLink> </li>
                            
                                <li>  <NavLink className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/dashboard/manageclass"> <FaLaptopCode></FaLaptopCode> Manage Class  </NavLink> </li>
                                
                                <li> <NavLink  className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"}  to="/dashboard/allusers"> <FaUsers></FaUsers> All Users </NavLink> </li>

                            </> : isInstructor?.instructor ?
                                <> <li> <NavLink  className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/dashboard/istructor"> <FaHome /> Instructors Home </NavLink> </li>
                                    <li> <NavLink  className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/dashboard/addclass"> <FaUtensils /> Add a Class </NavLink> </li>
                                    <li> <NavLink  className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/dashboard/myclasses"> <FaUser/> My Classes </NavLink> </li>
                                    {/* <li> <Link to="/dashboard/mycart"> <FaBook /> Total Enrolled Students </Link> </li>
                                    <li> <Link to="/dashboard/allusers"> <FaUsers></FaUsers> Feedback </Link> </li> */}

                                </> : <> <li> <NavLink className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/dashboard"> <FaHome /> User Home </NavLink> </li>
                                    <li> <NavLink className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/dashboard/mycart"> <FaCalendarAlt /> My Selected Classes</NavLink> </li>
                                    <li> <Link to="/dashboard"> <FaWallet></FaWallet> Payment History </Link> </li>
                                    <li> <Link to="/dashboard"> <FaShoppingCart></FaShoppingCart> My Enrolled Classes </Link> </li>

                                </>

                        }


                        <div className="divider"></div>
                        <li> <Link to="/"> <FaHome /> Home </Link> </li>
                        <li> <Link to="/classes"> <FaBookOpen></FaBookOpen> Classes </Link> </li>
                        <li> <Link to="/instructors"> <FaUsers></FaUsers> Instructors </Link> </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;