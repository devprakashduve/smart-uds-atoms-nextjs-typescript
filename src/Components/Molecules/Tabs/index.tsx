import React, { useState } from 'react';
import { TabsProps } from './TabsProps.interface';

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  onTabChange,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex space-x-4 border-b border-atom-btn/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`border-b-2 border-transparent px-4 py-2 text-sm font-medium text-atom-btn-dark focus:outline-none ${
              activeTab === tab.id ? 'border-atom-btn/40' : ''
            } ${tab.disabled ? 'cursor-not-allowed text-atom-btn-light' : ''}`}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
