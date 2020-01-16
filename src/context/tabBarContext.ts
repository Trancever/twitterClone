import React from 'react';

export type Tab = 'Feed' | 'Notifications' | 'Message';

type TabBarContext = Tab;
type TabBarSetContext = (tab: Tab) => void;

export const TabBarContext = React.createContext<TabBarContext>('Feed');
export const TabBarSetContext = React.createContext<TabBarSetContext>(() => {});
