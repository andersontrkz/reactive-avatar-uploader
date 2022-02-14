import { Flex, Text } from '@chakra-ui/react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DropMessage = () => {
  return (
    <Flex
      flexDir="column"
      py="6"
      justify="center"
      alignItems="center"
      fontSize={{ base: '12', md: '16', xl: '20' }}
      color="var(--text-color)"
    >
      <Flex justify="center" alignItems="center">
        <FontAwesomeIcon icon={faImage} />
        <Text pl="1" fontWeight="700">
          Organization Logo
        </Text>
      </Flex>
      <Text>Drop the image here or click to browse</Text>
    </Flex>
  );
};

export default DropMessage;
