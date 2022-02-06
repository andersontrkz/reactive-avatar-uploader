import { useContext } from 'react';

import AvatarUploadContext from '../context/AvatarUpload/AvatarUploadContext';

function useAvatarUpload() {
  const context = useContext(AvatarUploadContext);

  if (!context) {
    throw new Error('useAvatarUpload must be used within AvatarUploadContext');
  }

  return context;
}

export default useAvatarUpload;
