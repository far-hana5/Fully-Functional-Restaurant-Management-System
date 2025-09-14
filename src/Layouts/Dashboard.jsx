import React from 'react';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { FaD } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const cart = useCart();
  const [isAdmin, isAdminLoading] = useAdmin();

  // ✅ Add loading check here
  if (isAdminLoading) {
    return <div className="flex items-center justify-center w-full h-screen">Loading...</div>;
  }

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu p-4 ">
          {isAdmin ? (
            <>
              <li><NavLink to="/dashboard/adminhome"><FaHome /> Admin Home</NavLink></li>
              <li><NavLink to="/dashboard/additems"><FaUtensils /> Add Items</NavLink></li>
              <li><NavLink to="/dashboard/manageitems"><FaList /> Manage Items</NavLink></li>
              <li><NavLink to="/dashboard/bookings"><FaBook /> Manage Booking</NavLink></li>
              <li><NavLink to="/dashboard/users"><FaUsers /> All Users</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/dashboard/userhome"><FaHome /> User Home</NavLink></li>
              <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
              <li><NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li>
              <li><NavLink to="/dashboard/review"><FaD /> Add a Review</NavLink></li>
              <li><NavLink to="/dashboard/booking"><FaList /> My Bookings</NavLink></li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li><NavLink to="/"><FaHome /> Home</NavLink></li>
          <li><NavLink to="/order/salad"><FaSearch /> Menu</NavLink></li>
          <li><NavLink to="/order/contact"><FaEnvelope /> Contact</NavLink></li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
