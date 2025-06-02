import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import Popularmenu from '../../Home/popularmenu/Popularmenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitla from '../../../components/SectionTitla';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (



        <div>
            <Helmet>
                <title>Bistro Boss| Menu</title>
            </Helmet>

            {/*main cover */}
            <Cover img1={menuImg} title="our menu"
            ></Cover>
            <SectionTitla subHeading="DON'T MISS" heading='todays offer'></SectionTitla>
            {/*ofered cover */}
            <MenuCategory items={offered}></MenuCategory>

            {/*dessert items */}
            <MenuCategory items={desserts}
                title="desert"
                coverimg={desertImg}
            ></MenuCategory>

            {/*pizza items */}
            <MenuCategory items={pizza}
                title="pizza"
                coverimg={pizzaImg}
            ></MenuCategory>


            {/*soup items */}
            <MenuCategory items={soup}
                title="soup"
                coverimg={soupImg}
            ></MenuCategory>


            {/*salad items */}
            <MenuCategory items={salad}
                title="salad"
                coverimg={saladImg}
            ></MenuCategory>

        </div>


    );
};

export default Menu;