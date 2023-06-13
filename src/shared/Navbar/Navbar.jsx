import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log("console " + user)
    const handleLogOut = () => {
        logOut()
            .then(data => {
                toast.success('Log Out Success!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }).catch(error => {
                console.log(error)
            })
    }

    const menuItems = <>

        <li> <NavLink className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"}>Home</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/instructors" >Instructors</NavLink></li>
        <li> <NavLink className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="classes">Classes</NavLink> </li>
        {user &&
            <li> <NavLink className={({ isActive }) => isActive ? "text-white transition hover:bg-transparent text-lg font-semibold" : "text-lg font-semibold hover:text-white transition hover:bg-transparent"} to="/dashboard/mycart">Dashboard</NavLink> </li>
        }


    </>
    return (
        <div className='bg-[#5ab337d6] border-b-2 '>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to="/" className="btn hover:bg-transparent btn-ghost normal-case text-xl">
                            <img src="https://i.ibb.co/f2hwxcv/logo.png" alt="" /> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user && user ? <> <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />

                                </div>
                            </label> <button onClick={handleLogOut} className='btn btn-sm leading-6 hover:text-black bg-[#255214d6] capitalize text-lg font-semibold text-white'>Logout</button>
                            </> : <> <ul><li> <Link className='btn btn-sm leading-6 hover:text-black bg-[#255214d6] capitalize text-lg font-semibold text-white' to="/login">Login</Link> </li></ul> </>
                        }


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;