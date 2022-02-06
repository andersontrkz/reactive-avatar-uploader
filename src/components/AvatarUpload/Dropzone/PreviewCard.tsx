import { Flex, Image, Text, Link, Box } from '@chakra-ui/react';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useAvatarUpload from '../../../hooks/useAvatarUpload';

const PreviewCard = () => {
  const { avatar, deleteAvatar } = useAvatarUpload();

  return (
    <Flex
      flexDir="column"
      justify="center"
      border={`1px dashed black`}
      borderRadius="12px"
      bg="#cfe0e8"
      py="16"
    >
      <Flex h="100%" justify="space-around" alignItems="center">
        <Flex justify="space-between" alignItems="center">
          <Link mx="2" href={avatar?.preview} target="_blank">
            <Image
              border="1px solid #000000AA"
              src={avatar?.preview}
              borderRadius="8px"
              boxSize="12"
              fit="cover"
            />
          </Link>
          <Box>
            <Text mx="2">{avatar?.name}</Text>
            <Flex justify="flex-start" alignItems="center">
              <Text mx="2">{avatar?.readableSize}</Text>
              <FontAwesomeIcon icon={faCheckCircle} color="green" />
            </Flex>
          </Box>
        </Flex>

        <Box mx="2" p="2" cursor="pointer" onClick={() => deleteAvatar(avatar?.id || '')}>
          <FontAwesomeIcon icon={faTimes} color="#d96459" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default PreviewCard;
