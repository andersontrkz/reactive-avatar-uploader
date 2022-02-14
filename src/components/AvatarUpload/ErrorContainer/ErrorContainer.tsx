import { Box, Flex, Text } from '@chakra-ui/react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import DeleteAvatar from '../DeleteButton/DeleteButton';

function ErrorContainer({ root }: any) {
  const { setControllerEditing } = useAvatarUpload();

  useEffect(() => {
    setControllerEditing(true);

    return () => {
      setControllerEditing(false);
    };
  }, []);

  return (
    <Flex width="100%" justify="space-between">
      <Box borderRadius="50%" boxSize="32" pos="relative">
        <Flex
          bg="rgb(200, 200, 215)"
          borderRadius="50%"
          minBlockSize="100%"
          justify="center"
          alignItems="center"
        >
          <FontAwesomeIcon size="lg" icon={faExclamationCircle} color="white" />
        </Flex>
      </Box>

      <Flex w="70%" flexDir="column" alignItems="flex-end" justify="space-between">
        <DeleteAvatar />
        <Flex h="100%" w="100%" flexDir="column" alignItems="flex-start">
          <Text color="red">Sorry, the upload failed.</Text>
          <Text {...root()} decoration="underline" textUnderlineOffset="3px">
            Try again
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ErrorContainer;
