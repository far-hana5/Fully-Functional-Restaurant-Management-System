import React from 'react';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { FaD } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const cart=useCart();
    //TODO: get isadmin value from the database
    const [isAdmin]=useAdmin();
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className='menu p-4 '>
                    {
                        isAdmin ?<>
                        <li><NavLink to='/dashboard/adminhome'>
                        <FaHome></FaHome>
                        Admin Home
                    </NavLink>
                    </li>

                    <li><NavLink to='/dashboard/addItems'>
                        <FaUtensils></FaUtensils>
                       Add Items
                    </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/manageitems'>
                        <FaList></FaList>
                        Manage Items
                    </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/bookings'>
                        <FaBook></FaBook>
                        Manage Booking
                    </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/users'>
                        <FaUsers></FaUsers>
                        All Users
                    </NavLink>
                    </li>
                        </>:<>
                        <li><NavLink to='/dashboard/userhome'>
                        <FaHome></FaHome>
                        UserHome
                    </NavLink>
                    </li>

                    <li><NavLink to='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart
                    </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/reservation'>
                        <FaCalendar></FaCalendar>
                        Reservation
                    </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/review'>
                        <FaD></FaD>
                        Add aReview
                    </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/booking'>
                        <FaList></FaList>
                        My Bookings
                    </NavLink>
                    </li>
                        </>
                    }
                    {/* shared nav links */}
                    <div className='divider'></div>
                    <li><NavLink to='/'>
                        <FaHome></FaHome>
                        Home
                    </NavLink>
                    </li>
                    <li><NavLink to='/order/salad'>
                        <FaSearch></FaSearch>
                        Menu
                    </NavLink>
                    </li>
                    <li><NavLink to='/order/contact'>
                        <FaEnvelope></FaEnvelope>
                        Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;