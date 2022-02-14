import { Flex } from '@chakra-ui/react';

import 'react-image-crop/dist/ReactCrop.css';

import AvatarUploadProvider from '../../../context/AvatarUpload/AvatarUploadProvider';
import { AvatarUpload } from '../../AvatarUpload';

const BACKGROUND = 'https://www.pngmagic.com/product_images/light-gray-background.jpg';

export const Home = () => {
  return (
    <Flex bgImage={BACKGROUND} alignItems="center" h="100vh" bgRepeat="no-repeat" bgSize="cover">
      <AvatarUploadProvider>
        <AvatarUpload />
      </AvatarUploadProvider>
    </Flex>
  );
};
