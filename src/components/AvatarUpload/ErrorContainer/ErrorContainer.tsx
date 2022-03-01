import { Flex, Text } from '@chakra-ui/react';
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
    <Flex
      width="100%"
      flexDir={{ base: 'column', sm: 'row' }}
      justify={{ base: 'center', sm: 'space-between' }}
      alignItems={{ base: 'center', sm: 'initial' }}
    >
      <Flex
        bg="rgb(200, 200, 215)"
        borderRadius="50%"
        minW={{ base: '24', md: '32' }}
        maxW={{ base: '24', md: '32' }}
        minH={{ base: '24', md: '32' }}
        maxH={{ base: '24', md: '32' }}
        justify="center"
        alignItems="center"
      >
        <FontAwesomeIcon size="lg" icon={faExclamationCircle} color="white" />
      </Flex>

      <Flex w="70%" flexDir="column" alignItems="flex-end" justify="space-between">
        <DeleteAvatar />
        <Flex
          pl={{ base: '0', md: '6' }}
          h="100%"
          w="100%"
          flexDir="column"
          alignItems={{ base: 'center', sm: 'flex-start' }}
        >
          <Text color="var(--alert-color)">Sorry, the upload failed.</Text>
          <Text
            {...root()}
            decoration="underline"
            textUnderlineOffset="3px"
            color="var(--action-color)"
          >
            Try again
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ErrorContainer;
