import React, { useState, useRef } from 'react';
import { TabsProps } from './TabsProps.interface';

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  onTabChange,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    const enabledTabs = tabs.filter((t) => !t.disabled);
    const currentEnabledIndex = enabledTabs.findIndex(
      (t) => t.id === tabs[currentIndex].id
    );

    let nextTab: (typeof tabs)[0] | undefined;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextTab = enabledTabs[(currentEnabledIndex + 1) % enabledTabs.length];
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextTab =
        enabledTabs[
          (currentEnabledIndex - 1 + enabledTabs.length) % enabledTabs.length
        ];
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextTab = enabledTabs[0];
    } else if (e.key === 'End') {
      e.preventDefault();
      nextTab = enabledTabs[enabledTabs.length - 1];
    }

    if (nextTab) {
      setActiveTab(nextTab.id);
      onTabChange?.(nextTab.id);
      // Move focus to the newly active tab button
      const tabButtons =
        tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      const targetBtn = Array.from(tabButtons ?? []).find(
        (btn) => btn.dataset.tabId === nextTab!.id
      );
      targetBtn?.focus();
    }
  };

  return (
    <div className={`w-full ${className ?? ''}`}>
      <div
        ref={tabListRef}
        role="tablist"
        className="flex space-x-4 border-b border-atom-btn/30"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            data-tab-id={tab.id}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            aria-disabled={tab.disabled}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className={`border-b-2 border-transparent px-4 py-2 text-sm font-medium text-atom-btn-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-atom-btn ${
              activeTab === tab.id ? 'border-atom-btn/40' : ''
            } ${tab.disabled ? 'cursor-not-allowed text-atom-btn-light opacity-50' : ''}`}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
