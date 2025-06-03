import React from 'react';

const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
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
                    <button className="btn btn-outline border-0 bg-slate-200 border-amber-400 border-b-2 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;