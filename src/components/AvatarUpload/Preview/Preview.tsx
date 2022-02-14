import { Box } from '@chakra-ui/react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import Cropper from '../Cropper/Cropper';

import ImageBox from './ImageBox';

const PreviewCard = () => {
  const { controllerCropped } = useAvatarUpload();

  return <Box>{controllerCropped ? <ImageBox /> : <Cropper />}</Box>;
};

export default PreviewCard;
