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
      color="rgb(60, 70, 100)"
      transition=".9s"
      _hover={{
        color: 'rgba(60, 70, 100, 0.7)',
      }}
      cursor="pointer"
      onClick={() => deleteAvatar(avatar.id)}
    >
      <FontAwesomeIcon icon={faTimes} />
    </Box>
  );
}

export default DeleteButton;
