import React from 'react';
import Sidebar from './sidebar';
export const metadata = {
    title: 'Dashboard || Learn-next',
    description: 'next app',
  }
const DashboardLayout = ({children}) => {
    return (
        <div className='flex container'>
            <Sidebar></Sidebar>
           {children} 
        </div>
    );
};

export default DashboardLayout;