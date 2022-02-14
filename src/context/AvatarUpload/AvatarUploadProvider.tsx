import filesize from 'filesize';
import React, { useState } from 'react';
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
  const [controller, setController] = useState(false);

  const handleUpload = (file: File[]) => {
    const [image] = file;

    if (image) {
      const newAvatar: IImage = {
        file: image,
        id: uuidv4(),
        name: image.name,
        readableSize: filesize(image.size),
        preview: URL.createObjectURL(image),
      };

      setController(false);

      setAvatar(newAvatar);
    }
  };

  const deleteAvatar = () => {
    console.log(avatar);
    setAvatar(undefined);
  };

  return (
    <AvatarUploadContext.Provider
      value={{ avatar, setAvatar, deleteAvatar, handleUpload, controller, setController }}
    >
      {children}
    </AvatarUploadContext.Provider>
  );
};

export default AvatarUploadProvider;
