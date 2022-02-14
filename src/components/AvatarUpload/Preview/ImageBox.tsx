import { Flex, Image, Box } from '@chakra-ui/react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import DropMessage from '../Dropzone/DropMessage';

const ImageBox = () => {
  const { avatar } = useAvatarUpload();

  return (
    <Flex justify="space-between" alignItems="center" color="rgb(60, 70, 100)">
      <Box
        borderRadius="50%"
        minW={{ base: '24', md: '32' }}
        maxW={{ base: '24', md: '32' }}
        minH={{ base: '24', md: '32' }}
        maxH={{ base: '24', md: '32' }}
        pos="relative"
      >
        <Image borderRadius="50%" src={avatar.preview} fit="cover" id="ReactCrop__image" />
      </Box>
      <DropMessage />
    </Flex>
  );
};

export default ImageBox;
