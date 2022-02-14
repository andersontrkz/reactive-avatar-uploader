import { Flex, Image } from '@chakra-ui/react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import DropContent from '../Dropzone/DropContent';

const ImageBox = () => {
  const { avatar } = useAvatarUpload();

  return (
    <Flex justify="space-between" alignItems="center" color="rgb(60, 70, 100)">
      <Image
        borderRadius="50%"
        boxSize="32"
        border="1px solid #000000AA"
        src={avatar.preview}
        fit="cover"
        id="ReactCrop__image"
      />
      <DropContent />
    </Flex>
  );
};

export default ImageBox;
