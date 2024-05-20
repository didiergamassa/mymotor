// TabBar.jsx
import React from 'react';
import './TabBar.css';

function TabBar({ activeTab, onTabChange }) {
  const tabs = ['GARNER_Energies','Activités','Clients','Mission','Vision','Log-in'];

  return (
    <nav className="tab-bar">
      {tabs.map(tab => (
        <div
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </div>
      ))}
    </nav>
  );
}

export default TabBar;
