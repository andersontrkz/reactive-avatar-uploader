import { Flex, Image, Link, Box, Button, Text } from '@chakra-ui/react';
import { faTimes, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import CropArea from '../CropArea/CropArea';

const PreviewCard = ({ root }: any) => {
  const { avatar, deleteAvatar, controller } = useAvatarUpload();

  return (
    <Flex
      flexDir="column"
      justify="normal"
      border={`1px dashed black`}
      borderRadius="12px"
      bg="#cfe0e8"
      p="6"
    >
      <Box>
        {controller ? (
          <Flex {...root()} justify="space-between" alignItems="center" color="rgb(60, 70, 100)">
            <Link mx="2" href={avatar?.preview} target="_blank">
              <Image
                borderRadius="50%"
                boxSize="32"
                border="1px solid #000000AA"
                src={avatar?.preview}
                fit="cover"
                id="ReactCrop__image"
              />
            </Link>
            <Flex flexDir="column" width="70%">
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
          </Flex>
        ) : (
          <CropArea>
            <Box
              color="rgb(60, 70, 100)"
              transition=".9s"
              _hover={{
                color: 'rgba(60, 70, 100, 0.7)',
              }}
              cursor="pointer"
              onClick={() => deleteAvatar(avatar?.id || '')}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Box>
          </CropArea>
        )}
      </Box>
    </Flex>
  );
};

export default PreviewCard;
