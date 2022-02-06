import AvatarUploadProvider from '../../context/AvatarUpload/AvatarUploadProvider';

import { Dropzone } from './Dropzone';

export const AvatarUpload = () => {
  return (
    <AvatarUploadProvider>
      <Dropzone />
    </AvatarUploadProvider>
  );
};

export default AvatarUpload;
