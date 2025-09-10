import React from 'react';
import { FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaD } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className='menu p-4 '>
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