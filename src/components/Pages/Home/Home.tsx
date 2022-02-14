import { Flex } from '@chakra-ui/react';

import 'react-image-crop/dist/ReactCrop.css';

import AvatarUploadProvider from '../../../context/AvatarUpload/AvatarUploadProvider';
import { AvatarUpload } from '../../AvatarUpload';

const BACKGROUND = 'https://i.pinimg.com/originals/3b/83/e7/3b83e7833a14419e13555a9e56bc3d0b.jpg';

export const Home = () => {
  return (
    <Flex bgImage={BACKGROUND} alignItems="center" h="100vh">
      <AvatarUploadProvider>
        <AvatarUpload />
      </AvatarUploadProvider>
    </Flex>
  );
};
