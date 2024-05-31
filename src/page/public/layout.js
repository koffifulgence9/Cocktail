import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/public/header';

const layout = () => {
    return (

        <div className='layout'>
          <Header/>
           <Outlet/>
        </div>

    );
};

export default layout;