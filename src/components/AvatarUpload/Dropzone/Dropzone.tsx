import { useDropzone } from 'react-dropzone';

import DropContainer from './DropContainer';

export const Dropzone = () => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'],
  });

  return (
    <DropContainer active={isDragActive} reject={isDragReject} root={getRootProps}>
      <input {...getInputProps()} />
    </DropContainer>
  );
};

export default Dropzone;
