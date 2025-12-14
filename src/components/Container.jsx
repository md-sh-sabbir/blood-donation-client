import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 lg:w-[87.5%] mx-auto'>
           {children} 
        </div>
    );
};

export default Container;