import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from '@/page/public/layout.js';
import Home from '@/page/public/home.js';
import Services from '@/page/public/services.js';
import Contact from '@/page/public/contact.js';
import Error from '@/utils/error.js';


const publicRouter = () => {
    return (
        <Routes>
        <Route element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="/home" element={<Home />} />
           <Route path="/services" element={<Services />} />
           <Route path="/contact" element={<Contact />} />         
         <Route path="*" element={<Error />} />
       </Route>
     </Routes>
    );
};

export default publicRouter;