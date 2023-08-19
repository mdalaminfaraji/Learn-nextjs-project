import React from 'react';
export const metadata = {
    title: 'Dashboard || Learn-next',
    description: 'next app',
  }
const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>Sidebar</div>
           {children} 
        </div>
    );
};

export default DashboardLayout;