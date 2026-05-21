/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StorageChart } from './components/StorageChart.tsx';
import { CategoryGrid } from './components/CategoryGrid.tsx';
import { FileList } from './components/FileList.tsx';
import { BottomNavigation } from './components/BottomNavigation.tsx';
import { mockStorage, mockFiles } from './data.ts';
import { Search, Bell, Menu, Moon, Sun } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 15, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -15, scale: 0.98 }
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showHiddenFiles, setShowHiddenFiles] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const recentFiles = mockFiles.filter(f => f.type !== 'folder').slice(0, 5);

  return (
    <div className="w-full max-w-md h-full sm:h-[850px] bg-surface-bg text-text-primary relative sm:rounded-[2.5rem] sm:shadow-2xl overflow-hidden sm:border-[8px] border-surface-border flex flex-col transition-colors duration-500">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 rounded-full hover:bg-element-muted transition-colors">
            <Menu className="w-6 h-6 text-text-primary" />
          </button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Nativefiles</h1>
            <p className="text-sm font-medium text-text-secondary">Internal Storage</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-element-muted transition-colors relative">
            <Bell className="w-6 h-6 text-text-primary" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-500 rounded-full border border-surface-bg transition-colors duration-500" />
          </button>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-6 pb-32 scrollbar-none">
        <AnimatePresence mode="popLayout" initial={false}>
          {currentTab === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="flex flex-col h-full w-full"
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
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="w-full"
            >
              <div className="mb-6 relative">
                <Search className="w-5 h-5 text-text-secondary absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search files..." 
                  className="w-full bg-element-muted border border-surface-border rounded-2xl py-3.5 pl-12 pr-4 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all font-inter"
                />
              </div>
              <FileList title="Internal Storage" files={mockFiles} />
            </motion.div>
          )}
          
          {currentTab === 'search' && (
            <motion.div
              key="search"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="w-full"
            >
              <h2 className="text-xl font-semibold mb-6">Advanced Search</h2>
              <p className="text-text-secondary flex flex-col items-center justify-center py-20">
                <Search className="w-12 h-12 mb-4 opacity-20" />
                Type to begin searching your device.
              </p>
            </motion.div>
          )}

          {currentTab === 'settings' && (
            <motion.div
              key="settings"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="w-full"
            >
              <h2 className="text-xl font-semibold mb-6">Settings</h2>
              <div className="glass-card p-4 flex flex-col divide-y divide-surface-border">
                <div className="py-3 flex justify-between items-center">
                  <span>Appearance</span>
                  <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-element-muted text-sm font-medium hover:bg-surface-border transition-colors"
                  >
                    {isDarkMode ? (
                      <><Moon className="w-4 h-4 text-brand-400" /> Dark</>
                    ) : (
                      <><Sun className="w-4 h-4 text-orange-400" /> Light</>
                    )}
                  </button>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span>Show Hidden Files</span>
                  <button className="w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors border border-surface-border relative"
                          onClick={() => setShowHiddenFiles(!showHiddenFiles)}
                          style={{ background: showHiddenFiles ? 'var(--brand-500)' : 'var(--element-muted)' }}
                  >
                    <motion.div 
                      layout
                      className="w-4 h-4 bg-white rounded-full shadow-md absolute" 
                      animate={{ left: showHiddenFiles ? '1.5rem' : '0.25rem' }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </button>
                </div>
                <div className="py-3 flex justify-between items-center text-text-secondary">
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
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-text-primary/20 rounded-full sm:hidden z-50"></div>
    </div>
  );
}

