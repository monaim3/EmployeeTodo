import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;