import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Navbar = () => {

const {user}= useContext(AuthContext)
console.log(user)

    const menuItems = <>

        <li> <Link>Home</Link> </li>
        <li><Link to="/instructors" >Instructors</Link></li>
        <li> <Link to="classes">Classes</Link> </li>
       { user &&
         <li> <Link to="/dashboard/mycart">Dashboard</Link> </li>
       }


    </>
    return (
        <div className='bg-gray-300 border-b-2 '>
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
                        <a className="btn btn-ghost normal-case text-xl">MusicLearner</a>
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
                               <img src={user?.photoURL } />
                           </div>
                       </label></>: <> <ul><li> <Link to="/login">Login</Link> </li></ul> </> 
                        }



                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;