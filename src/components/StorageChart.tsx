import React from 'react';
import { motion } from 'motion/react';
import { StorageInfo } from '../types.ts';
import { formatBytes } from '../utils.ts';
import { HardDrive } from 'lucide-react';

interface StorageChartProps {
  storage: StorageInfo;
}

export function StorageChart({ storage }: StorageChartProps) {
  const percentage = (storage.used / storage.total) * 100;
  
  return (
    <div className="glass-card p-6 flex items-center mb-8 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
      
      <div className="flex-1 z-10">
        <div className="flex items-center gap-2 text-text-secondary mb-1">
          <HardDrive className="w-4 h-4" />
          <span className="font-medium text-sm font-inter tracking-wide uppercase">Internal Storage</span>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold text-text-primary">{formatBytes(storage.used, 1).split(' ')[0]}</span>
          <span className="text-xl font-medium text-text-secondary">{formatBytes(storage.used, 1).split(' ')[1]} / {formatBytes(storage.total, 0)}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-3 w-full bg-element-muted rounded-full overflow-hidden border border-surface-border relative">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-600 to-purple-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
