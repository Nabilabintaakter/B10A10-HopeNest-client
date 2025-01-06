import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto'>
            {children}
        </div>
    );
};

export default Container;