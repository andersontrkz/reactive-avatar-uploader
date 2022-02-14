import { Container, Flex } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import ErrorContainer from '../ErrorContainer/ErrorContainer';

import DropContainer from './DropContainer';

export const Dropzone = () => {
  const { avatar, handleUpload, controllerEditing } = useAvatarUpload();

  const onDrop = useCallback(
    (image) => {
      handleUpload(image);
    },
    [handleUpload],
  );

  const { getRootProps, isDragActive, isDragReject } = useDropzone({
    accept: ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'],
    onDrop,
  });

  const setBorderColor = () => {
    if (isDragReject) {
      return '#c83349';
    }
    if (isDragActive) {
      return '#82b74b';
    }
    return 'black';
  };

  const setBackgroundColor = () => {
    if (isDragReject) {
      return '#f9d5e5';
    }
    if (isDragActive) {
      return '#ddeedd';
    }
    return '#cfe0e8';
  };

  return (
    <Container textAlign="center" px="0">
      <Flex
        transition=".9s"
        {...(controllerEditing ? {} : { ...getRootProps() })}
        flexDir="column"
        justify="center"
        border={`2px dashed ${setBorderColor()}`}
        borderRadius="12px"
        bg={setBackgroundColor()}
        p="8"
      >
        {avatar.preview === 'isError' ? <ErrorContainer root={getRootProps} /> : <DropContainer />}
      </Flex>
    </Container>
  );
};

export default Dropzone;
