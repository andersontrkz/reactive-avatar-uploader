import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import useAvatarUpload from '../../../hooks/useAvatarUpload';

import DropContainer from './DropContainer';

export const Dropzone = () => {
  const { handleUpload } = useAvatarUpload();

  const onDrop = useCallback(
    (image) => {
      handleUpload(image);
    },
    [handleUpload],
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'],
    onDrop,
  });

  return (
    <DropContainer active={isDragActive} reject={isDragReject} root={getRootProps}>
      <input {...getInputProps()} />
    </DropContainer>
  );
};

export default Dropzone;
