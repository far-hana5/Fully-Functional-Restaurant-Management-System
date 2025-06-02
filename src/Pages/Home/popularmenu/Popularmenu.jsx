import React from 'react';
import SectionTitla from '../../../components/SectionTitla';
import MenuItem from '../../Shared/menuitem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const Popularmenu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category==='popular');
   /* const [menu,setMenu]=useState([]);

    useEffect( ()=>{
       fetch('menu.json')
       .then(res=>res.json())
       .then(data=>{
        const popularItems=data.filter(item=>item.category==='popular');
        setMenu(popularItems)
       })
    },[])
    */
    return (
        <section className='mb-12'>
            <SectionTitla
            subHeading={"Popular Items"}
            heading={"From Our menu"}
            >
                
            </SectionTitla>

            <div className='grid md:grid-cols-2 gap-9'>
                {
                    popular.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
             <button className='btn btn-outline border-0 border-b-2 mt-4'>View Full Menu</button>
        </section>
    );
};

export default Popularmenu;