import filesize from 'filesize';
import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AvatarUploadContext from './AvatarUploadContext';

interface IImage {
  id: string;
  name: string;
  readableSize: string;
  preview: string;
  file: File;
}

const AvatarUploadProvider: React.FC = ({ children }) => {
  const [avatar, setAvatar] = useState<IImage>();

  const handleUpload = (file: File[]) => {
    const [image] = file;

    if (image) {
      const newavatar: IImage = {
        file: image,
        id: uuidv4(),
        name: image.name,
        readableSize: filesize(image.size),
        preview: URL.createObjectURL(image),
      };

      setAvatar(newavatar);
    }
  };

  const deleteAvatar = useCallback(() => {
    setAvatar(undefined);
  }, []);

  return (
    <AvatarUploadContext.Provider value={{ avatar, deleteAvatar, handleUpload }}>
      {children}
    </AvatarUploadContext.Provider>
  );
};

export default AvatarUploadProvider;
