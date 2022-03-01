import { Box } from '@chakra-ui/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';

function DeleteButton() {
  const { avatar, setControllerEditing, deleteAvatar } = useAvatarUpload();

  useEffect(() => {
    setControllerEditing(true);

    return () => {
      setControllerEditing(false);
    };
  }, []);

  return (
    <Box
      color="var(--text-color)"
      transition=".9s"
      _hover={{
        color: 'rgba(60, 70, 100, 0.7)',
      }}
      cursor="pointer"
      onClick={() => deleteAvatar(avatar.id)}
      fontSize={{ base: '12', md: '16', xl: '20' }}
    >
      <FontAwesomeIcon icon={faTimes} />
    </Box>
  );
}

export default DeleteButton;
