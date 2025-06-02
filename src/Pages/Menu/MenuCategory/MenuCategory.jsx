import React from 'react';
import MenuItem from '../../Shared/menuitem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,coverimg}) => {
    return (
        <div className='pt-8'>
            {title &&  <Cover img1={coverimg} title={title}></Cover>}
             <div className='grid md:grid-cols-2 gap-9 mt-16'>
                {
                    items.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}>
             <button className='btn btn-outline border-0 border-b-2 mt-4'>Order Now</button>

            </Link>

        </div>
    );
};

export default MenuCategory;