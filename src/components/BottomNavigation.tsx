import React from 'react';
import { motion } from 'motion/react';
import { FileStack, Search, Settings, Home } from 'lucide-react';
import { cn } from '../utils.ts';

interface NavItem {
  id: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'files', icon: FileStack, label: 'Files' },
  { id: 'search', icon: Search, label: 'Search' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

interface BottomNavigationProps {
  currentTab: string;
  onChange: (tab: string) => void;
}

export function BottomNavigation({ currentTab, onChange }: BottomNavigationProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full px-6 pb-6 pt-4 bg-gradient-to-t from-surface-bg via-surface-bg to-transparent z-50">
      <div className="glass-card px-6 py-4 flex justify-between items-center relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={cn(
                "relative flex flex-col items-center justify-center w-14 h-14 transition-colors",
                isActive ? "text-brand-500" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-brand-500/10 rounded-2xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="w-6 h-6 z-10 mb-1" />
              <span className="text-[10px] font-medium z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
