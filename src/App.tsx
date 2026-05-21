/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StorageChart } from './components/StorageChart.tsx';
import { CategoryGrid } from './components/CategoryGrid.tsx';
import { FileList } from './components/FileList.tsx';
import { BottomNavigation } from './components/BottomNavigation.tsx';
import { mockStorage, mockFiles } from './data.ts';
import { Search, Bell, Menu } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const recentFiles = mockFiles.filter(f => f.type !== 'folder').slice(0, 5);

  return (
    <div className="w-full max-w-md h-full sm:h-[850px] bg-surface-dark relative sm:rounded-[2.5rem] sm:shadow-2xl overflow-hidden sm:border-[8px] border-surface-border flex flex-col">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Nativefiles</h1>
            <p className="text-sm font-medium text-white/50">Internal Storage</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-500 rounded-full border border-surface-dark" />
          </button>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-6 pb-32 scrollbar-none">
        <AnimatePresence mode="wait">
          {currentTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              <StorageChart storage={mockStorage} />
              
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight">Categories</h2>
              </div>
              <CategoryGrid storage={mockStorage} />
              
              <FileList title="Recent Files" files={recentFiles} />
            </motion.div>
          )}

          {currentTab === 'files' && (
            <motion.div
              key="files"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 relative">
                <Search className="w-5 h-5 text-white/50 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search files..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all font-inter"
                />
              </div>
              <FileList title="Internal Storage" files={mockFiles} />
            </motion.div>
          )}
          
          {currentTab === 'search' && (
            <motion.div
              key="search"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-xl font-semibold mb-6">Advanced Search</h2>
              <p className="text-white/50 flex flex-col items-center justify-center py-20">
                <Search className="w-12 h-12 mb-4 opacity-20" />
                Type to begin searching your device.
              </p>
            </motion.div>
          )}

          {currentTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-xl font-semibold mb-6">Settings</h2>
              <div className="glass-card p-4 flex flex-col divide-y divide-white/5">
                <div className="py-3 flex justify-between items-center">
                  <span>Theme</span>
                  <span className="text-brand-400">Dark</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span>Show Hidden Files</span>
                  <div className="w-10 h-5 bg-brand-500 rounded-full flex items-center p-0.5 justify-end">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="py-3 flex justify-between items-center text-white/50">
                  <span>App Version</span>
                  <span>1.0.0</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <BottomNavigation currentTab={currentTab} onChange={setCurrentTab} />
      
      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full sm:hidden z-50"></div>
    </div>
  );
}

