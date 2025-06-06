import React from 'react';

const MenuItem = ({item}) => {
    const {image,price,name,recipe}=item;
    return (
        <div className='flex gap-3 '>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
            <div>
               <h3 className='uppercase text-xl'>{name}_ _ _ _ _ _</h3>
               <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;