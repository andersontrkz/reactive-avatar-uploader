import { createContext, Dispatch, SetStateAction } from 'react';

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
  setAvatar: Dispatch<SetStateAction<IImage | undefined>>;
  controller: boolean;
  setController: Dispatch<SetStateAction<boolean>>;
}

const AvatarUploadContext = createContext<IAvatarUploadContext>({} as IAvatarUploadContext);

export default AvatarUploadContext;
