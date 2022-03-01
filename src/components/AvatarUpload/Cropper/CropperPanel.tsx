import {
  Button,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';
import DeleteAvatar from '../DeleteButton/DeleteButton';

import getCroppedImg from './cropImage';

function CropperPanel({ croppedAreaPixels, zoom, setZoom }: any) {
  const { avatar, setAvatar, setControllerCropped, setControllerEditing } = useAvatarUpload();

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(avatar.preview, croppedAreaPixels);

      setAvatar({ ...avatar, preview: croppedImage });
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  const altercontrollerCropped = () => {
    showCroppedImage();
    setControllerCropped(true);
  };

  useEffect(() => {
    setControllerEditing(true);

    return () => {
      setControllerEditing(false);
    };
  }, []);

  return (
    <Flex
      w="70%"
      flexDir="column"
      alignItems={{ base: 'center', sm: 'flex-end' }}
      justify="space-between"
    >
      <Flex w="100%" justify="flex-end">
        <DeleteAvatar />
      </Flex>
      <Flex pl={{ base: '0', sm: '2', md: '8' }} w="100%" flexDir="column" alignItems="flex-start">
        <Text fontSize={{ base: '12', md: '16', xl: '20' }} color="var(--text-color)">
          Crop
        </Text>
        <Slider
          value={zoom}
          defaultValue={zoom}
          min={1}
          max={3}
          step={0.1}
          onChange={(zoom) => setZoom(zoom)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb bg="#3882ce" />
        </Slider>
      </Flex>
      <Button
        fontSize={{ base: '12', md: '16' }}
        borderRadius="24px"
        px={{ base: '4', md: '12', xl: '12' }}
        py={{ base: '2', md: '4', xl: '6' }}
        bg="rgb(60, 70, 100)"
        color="white"
        onClick={altercontrollerCropped}
        transition=".9s"
        _hover={{
          bg: 'var(--action-color)',
        }}
        mt={{ base: '2', sm: '0' }}
      >
        Save
      </Button>
    </Flex>
  );
}

export default CropperPanel;
