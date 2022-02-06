import { Container, Text, Button, Flex } from '@chakra-ui/react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useAvatarUpload from '../../../hooks/useAvatarUpload';

import PreviewCard from './PreviewCard';

type DropContainerProps = {
  active: boolean;
  reject: boolean;
  children: JSX.Element;
  root: any;
};

export const DropContainer = ({ active, reject, children, root }: DropContainerProps) => {
  const { avatar } = useAvatarUpload();

  const setBorderColor = () => {
    if (reject) {
      return '#c83349';
    }
    if (active) {
      return '#82b74b';
    }
    return 'black';
  };

  const setBackgroundColor = () => {
    if (reject) {
      return '#f9d5e5';
    }
    if (active) {
      return '#ddeedd';
    }
    return '#cfe0e8';
  };

  return (
    <Container textAlign="center" px="0">
      {!avatar ? (
        <Flex
          transition=".9s"
          {...root()}
          flexDir="column"
          justify="center"
          border={`2px dashed ${setBorderColor()}`}
          borderRadius="12px"
          bg={setBackgroundColor}
          py="16"
        >
          <>
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
          </>
        </Flex>
      ) : (
        <PreviewCard />
      )}
    </Container>
  );
};

export default DropContainer;
