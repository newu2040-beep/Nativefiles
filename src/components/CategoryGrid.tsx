import React from 'react';
import { motion } from 'motion/react';
import { Image, Video, Music, FileText, Download, LayoutGrid } from 'lucide-react';
import { StorageInfo } from '../types.ts';
import { formatBytes } from '../utils.ts';

const categoryConfig = [
  { id: 'images', icon: Image, label: 'Images', color: 'from-blue-400 to-blue-600', bg: 'bg-blue-500/10' },
  { id: 'videos', icon: Video, label: 'Videos', color: 'from-purple-400 to-purple-600', bg: 'bg-purple-500/10' },
  { id: 'audio', icon: Music, label: 'Audio', color: 'from-orange-400 to-orange-600', bg: 'bg-orange-500/10' },
  { id: 'documents', icon: FileText, label: 'Documents', color: 'from-emerald-400 to-emerald-600', bg: 'bg-emerald-500/10' },
  { id: 'apks', icon: LayoutGrid, label: 'APKs', color: 'from-pink-400 to-pink-600', bg: 'bg-pink-500/10' },
  { id: 'downloads', icon: Download, label: 'Downloads', color: 'from-gray-400 to-gray-600', bg: 'bg-gray-500/10' },
];

interface CategoryGridProps {
  storage: StorageInfo;
}

export function CategoryGrid({ storage }: CategoryGridProps) {
  const getCategorySize = (id: string) => {
    if (id === 'downloads') return 4.5 * 1024 * 1024 * 1024; // Mock download size
    return storage.categories[id as keyof typeof storage.categories] || 0;
  };

  return (
    <div className="grid grid-cols-3 gap-3 mb-8">
      {categoryConfig.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 glass-card cursor-pointer hover:bg-surface-card/90 transition-colors"
          >
            <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-3`}>
              <Icon className="w-6 h-6 text-white/90" />
            </div>
            <span className="text-sm font-medium text-white/90 mb-1">{item.label}</span>
            <span className="text-xs font-inter text-white/50">{formatBytes(getCategorySize(item.id), 1)}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
