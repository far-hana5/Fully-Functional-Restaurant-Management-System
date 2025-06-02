import React from 'react';
import MenuItem from '../../Shared/menuitem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

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
        </div>
    );
};

export default MenuCategory;