import { FileItem, StorageInfo } from './types.ts';

export const mockStorage: StorageInfo = {
  total: 128 * 1024 * 1024 * 1024, // 128 GB
  used: 84.5 * 1024 * 1024 * 1024, // 84.5 GB
  categories: {
    images: 12.4 * 1024 * 1024 * 1024,
    videos: 34.2 * 1024 * 1024 * 1024,
    audio: 5.1 * 1024 * 1024 * 1024,
    documents: 2.8 * 1024 * 1024 * 1024,
    apks: 8.5 * 1024 * 1024 * 1024,
    other: 21.5 * 1024 * 1024 * 1024,
  }
};

export const mockFiles: FileItem[] = [
  { id: '1', name: 'Downloads', type: 'folder', size: 0, dateModified: '2026-05-20T14:30:00Z', path: '/Downloads' },
  { id: '2', name: 'DCIM', type: 'folder', size: 0, dateModified: '2026-05-18T09:15:00Z', path: '/DCIM' },
  { id: '3', name: 'Documents', type: 'folder', size: 0, dateModified: '2026-05-21T08:00:00Z', path: '/Documents' },
  { id: '4', name: 'Music', type: 'folder', size: 0, dateModified: '2026-05-10T16:45:00Z', path: '/Music' },
  
  { id: '5', name: 'vacation_photo.jpg', type: 'image', size: 4.2 * 1024 * 1024, dateModified: '2026-05-19T11:20:00Z', path: '/DCIM/Camera/vacation_photo.jpg', isFavorite: true },
  { id: '6', name: 'Project_Proposal_Final.pdf', type: 'document', size: 2.8 * 1024 * 1024, dateModified: '2026-05-21T07:30:00Z', path: '/Documents/Project_Proposal_Final.pdf' },
  { id: '7', name: 'summer_vibes.mp4', type: 'video', size: 284 * 1024 * 1024, dateModified: '2026-05-17T18:00:00Z', path: '/DCIM/Camera/summer_vibes.mp4' },
  { id: '8', name: 'podcast_ep_42.mp3', type: 'audio', size: 45 * 1024 * 1024, dateModified: '2026-05-15T08:30:00Z', path: '/Music/podcast_ep_42.mp3' },
  { id: '9', name: 'app-release.apk', type: 'apk', size: 32.5 * 1024 * 1024, dateModified: '2026-05-20T22:15:00Z', path: '/Downloads/app-release.apk' },
  { id: '10', name: 'Invoice_May.pdf', type: 'document', size: 0.8 * 1024 * 1024, dateModified: '2026-05-01T09:00:00Z', path: '/Documents/Invoice_May.pdf', isFavorite: true },
  { id: '11', name: 'screenshot_1204.png', type: 'image', size: 1.5 * 1024 * 1024, dateModified: '2026-05-21T05:00:00Z', path: '/DCIM/Screenshots/screenshot_1204.png' },
  { id: '12', name: 'movie_ticket.pdf', type: 'document', size: 0.5 * 1024 * 1024, dateModified: '2026-05-20T20:00:00Z', path: '/Downloads/movie_ticket.pdf' },
];
