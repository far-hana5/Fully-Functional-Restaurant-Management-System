import React from 'react';

const SectionTitla = ({heading,subHeading}) => {
    return (
        <div className='w-3/12 mx-auto text-center my-9'>
            <p className='text-yellow-600 my-3'>--- { subHeading } ---</p>
            <h2 className='text-4xl border-y-2 py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitla;