import { Flex, Text, Button } from '@chakra-ui/react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DropContent = () => {
  return (
    <Flex flexDir="column" py="6" justify="center" alignItems="center" w="100%">
      <Button
        as={Text}
        leftIcon={<FontAwesomeIcon icon={faImage} />}
        bg="none"
        _hover={{
          bg: 'none',
        }}
        _active={{
          bg: 'none',
        }}
      >
        Organization Logo
      </Button>
      <Text>Drop the image here or click to browse</Text>
    </Flex>
  );
};

export default DropContent;
