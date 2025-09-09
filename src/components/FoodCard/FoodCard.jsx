import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const FoodCard = ({ item }) => {
    const { image, price, name, recipe,_id } = item;
    const { user } = useAuth();
const navigate=useNavigate();
const location =useLocation();
const axiosSecure=useAxiosSecure();

    const handleAddtoCart = food => {
        
        
        if (user  && user.email) {
            //todo:send cart item to the database
            console.log(food, user.email);
const cartItem={

            menuId:_id,email:user.email,
            name,
            image,
            price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} added to your cart`,
  showConfirmButton: false,
  timer: 1500
});
            }
        })
        } else {
          
    Swal.fire({
  title: "Please login to add to carts?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Login!"
}).then((result) => {
  if (result.isConfirmed) {
   //navigate to login page
   navigate('/login',{state:{from:location}})
  }
});


        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 '>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddtoCart(item)}
                        className="btn btn-outline border-0 bg-slate-200 border-amber-400 border-b-2 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;