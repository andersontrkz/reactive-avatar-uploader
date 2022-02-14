import { Box } from '@chakra-ui/react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import PreviewCard from '../Preview/Preview';

import DropMessage from './DropMessage';

export const DropContainer = () => {
  const { avatar } = useAvatarUpload();

  return <Box>{avatar.preview ? <PreviewCard /> : <DropMessage />}</Box>;
};

export default DropContainer;
