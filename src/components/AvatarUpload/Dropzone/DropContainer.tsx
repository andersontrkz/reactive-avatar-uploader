import { Container, Text, Button, Flex } from '@chakra-ui/react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type DropContainerProps = {
  active: boolean;
  reject: boolean;
  children: JSX.Element;
  root: any;
};

export const DropContainer = ({ active, reject, children, root }: DropContainerProps) => {
  const setBorderColor = () => {
    if (reject) {
      return 'red';
    }

    if (active) {
      return 'green';
    }

    return 'gray';
  };

  return (
    <Container textAlign="center" px="0">
      <Flex
        height="124px"
        {...root()}
        flexDir="column"
        justify="center"
        border={`2px dashed ${setBorderColor()}`}
        borderRadius="12px"
      >
        {children}
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
    </Container>
  );
};

export default DropContainer;
