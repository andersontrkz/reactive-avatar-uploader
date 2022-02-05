import { Container, Text, Button, Link, Flex } from '@chakra-ui/react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DropContainer = () => {
  return (
    <Container textAlign="center" bg="gray" px="0">
      <Link>
        <Flex flexDir="column" justify="center">
          <Button
            leftIcon={<FontAwesomeIcon icon={faImage} />}
            bg="none"
            _hover={{
              bg: 'none',
            }}
          >
            Organization Logo
          </Button>
          <Text>Drop the image here or click to browse</Text>
        </Flex>
      </Link>
    </Container>
  );
};

export default DropContainer;
