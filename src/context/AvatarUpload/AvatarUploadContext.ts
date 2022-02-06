import { createContext } from 'react';

interface IImage {
  id: string;
  name: string;
  readableSize: string;
  preview: string;
  file: File;
}

interface IAvatarUploadContext {
  avatar: IImage | undefined;
  deleteAvatar(id: string): void;
  handleUpload(file: File[]): void;
}

const AvatarUploadContext = createContext<IAvatarUploadContext>({} as IAvatarUploadContext);

export default AvatarUploadContext;
