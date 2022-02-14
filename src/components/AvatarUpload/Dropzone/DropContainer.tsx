import { Box } from '@chakra-ui/react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import PreviewCard from '../Preview/Preview';

import DropContent from './DropContent';

export const DropContainer = () => {
  const { avatar } = useAvatarUpload();

  return <Box>{avatar.preview ? <PreviewCard /> : <DropContent />}</Box>;
};

export default DropContainer;
