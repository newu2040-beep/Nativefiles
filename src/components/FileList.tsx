import React from 'react';
import { motion } from 'motion/react';
import { FileItem } from '../types.ts';
import { formatBytes, formatDate } from '../utils.ts';
import { Folder, Image, Video, Music, FileText, Package, MoreVertical, Heart } from 'lucide-react';

interface FileListProps {
  files: FileItem[];
  title?: string;
  onFileClick?: (file: FileItem) => void;
}

const getFileIcon = (type: FileItem['type']) => {
  switch (type) {
    case 'folder': return <Folder className="w-6 h-6 text-blue-400 fill-blue-400/20" />;
    case 'image': return <Image className="w-5 h-5 text-emerald-400" />;
    case 'video': return <Video className="w-5 h-5 text-purple-400" />;
    case 'audio': return <Music className="w-5 h-5 text-orange-400" />;
    case 'document': return <FileText className="w-5 h-5 text-brand-400" />;
    case 'apk': return <Package className="w-5 h-5 text-pink-400" />;
    default: return <FileText className="w-5 h-5 text-gray-400" />;
  }
};

export function FileList({ files, title, onFileClick }: FileListProps) {
  return (
    <div className="flex flex-col">
      {title && (
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          <button className="text-sm text-brand-400 font-medium hover:text-brand-300">View All</button>
        </div>
      )}
      
      <div className="flex flex-col gap-2">
        {files.map((file, index) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onFileClick?.(file)}
            className="flex items-center p-3 sm:p-4 rounded-2xl hover:bg-white/5 cursor-pointer group transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors">
              {getFileIcon(file.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-white/90 truncate">{file.name}</h3>
                {file.isFavorite && <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 flex-shrink-0" />}
              </div>
              <div className="flex items-center text-xs font-inter text-white/50 mt-1">
                <span>{formatDate(file.dateModified)}</span>
                {file.type !== 'folder' && (
                  <>
                    <span className="mx-2 w-1 h-1 rounded-full bg-white/20" />
                    <span>{formatBytes(file.size)}</span>
                  </>
                )}
              </div>
            </div>
            
            <button className="p-2 text-white/40 hover:text-white/90 rounded-full hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
              <MoreVertical className="w-5 h-5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
