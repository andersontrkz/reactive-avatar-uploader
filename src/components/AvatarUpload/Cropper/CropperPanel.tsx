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
    <Flex w="70%" flexDir="column" alignItems="flex-end" justify="space-between">
      <DeleteAvatar />
      <Flex pl="2" w="100%" flexDir="column" alignItems="flex-start">
        <Text color="rgb(60, 70, 100)">Crop</Text>
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
        borderRadius="24px"
        px="12"
        py="4"
        bg="rgb(60, 70, 100)"
        color="white"
        onClick={altercontrollerCropped}
        transition=".9s"
        _hover={{
          bg: 'rgba(60, 70, 100, 0.7)',
        }}
      >
        Save
      </Button>
    </Flex>
  );
}

export default CropperPanel;
