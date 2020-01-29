import React from 'react';

export type Tab = 'Feed' | 'Notifications' | 'Message';

type TabBarSetContext = (tab: Tab) => void;

export const TabBarContext = React.createContext<Tab>('Feed');
export const TabBarSetContext = React.createContext<TabBarSetContext>(() => {});
