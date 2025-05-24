import React from 'react';
import SectionTitla from '../../../../components/SectionTitla';
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitla
                subHeading={"Check it out"} heading={"Featured Item"}
            ></SectionTitla>

            <div className='md:flex  bg-slate-500justify-center items-center py-8 px-16 '>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>{new Date().getFullYear()}</p>
                    <p>
                        WHERE CAN I GET SOME?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        Read More</p>
                        <button className='btn btn-outline border-0 border-b-2 mt-4'>Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;