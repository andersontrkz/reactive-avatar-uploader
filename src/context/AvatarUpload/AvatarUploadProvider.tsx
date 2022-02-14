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
  const [avatar, setAvatar] = useState<IImage>({} as IImage);
  const [controllerCropped, setControllerCropped] = useState(false);
  const [controllerEditing, setControllerEditing] = useState(false);

  const handleUpload = (file: File[]) => {
    const [image] = file;

    if (image) {
      try {
        const newAvatar: IImage = {
          file: image,
          id: uuidv4(),
          name: image.name,
          readableSize: filesize(image.size),
          preview: URL.createObjectURL(image),
        };

        setControllerCropped(false);

        setAvatar(newAvatar);
        setAvatar({ preview: 'isError' } as IImage);
      } catch (e) {
        console.log(e);
        setAvatar({ preview: 'isError' } as IImage);
      }
    }
  };

  const deleteAvatar = () => {
    setAvatar({} as IImage);
  };

  return (
    <AvatarUploadContext.Provider
      value={{
        avatar,
        setAvatar,
        deleteAvatar,
        handleUpload,
        controllerCropped,
        setControllerCropped,
        controllerEditing,
        setControllerEditing,
      }}
    >
      {children}
    </AvatarUploadContext.Provider>
  );
};

export default AvatarUploadProvider;
