export type FileType = 'image' | 'video' | 'audio' | 'document' | 'apk' | 'download' | 'folder' | 'other';

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size: number; // in bytes
  dateModified: string;
  path: string;
  isFavorite?: boolean;
}

export interface StorageInfo {
  total: number;
  used: number;
  categories: {
    images: number;
    videos: number;
    audio: number;
    documents: number;
    apks: number;
    other: number;
  };
}
