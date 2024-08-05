import React, { useState } from 'react';
import Sidebar from './DashBoardSidebar';
import UserDashboard from './UserDashboard';
import Transactions from './Transactions';
import Payments from './Payments';
import Settings from './Settings';

export default function UserPortal() {
    const [activeComponent, setActiveComponent] = useState('UserPortal');
  
    const handleSidebarItemClick = (component) => {
      setActiveComponent(component);
    };
    
    const renderDefaultComponent = () => {
      switch (activeComponent) {
        case 'UserPortal':
          return <UserDashboard />;
        case 'Transactions':
          return <Transactions />;
        case 'Payments':
          return <Payments />;
        case 'Settings':
          return <Settings />;
        default:
          return <UserDashboard />;
      }
    };

  return (
    <div className='Portal'>
      <div className='side'>
        <Sidebar onSidebarItemClick={handleSidebarItemClick} />
      </div>
      <div className='details'>
        {renderDefaultComponent()}
      </div>
    </div>
  );
}