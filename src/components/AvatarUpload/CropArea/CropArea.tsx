import {
  Button,
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

import useAvatarUpload from '../../../hooks/useAvatarUpload';

import getCroppedImg from './cropImage';

type CropAreaProps = {
  children: JSX.Element;
};

function CropArea({ children }: CropAreaProps) {
  const { avatar, setAvatar, setControllerCropped } = useAvatarUpload();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(avatar?.preview, croppedAreaPixels);

      setAvatar({ ...avatar, preview: croppedImage });
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  const altercontrollerCropped = () => {
    showCroppedImage();
    setControllerCropped(true);
  };

  return (
    <Flex width="100%" justify="space-between">
      <Box borderRadius="50%" boxSize="32" pos="relative">
        <Cropper
          image={avatar.preview}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          style={{
            containerStyle: {
              borderRadius: '50%',
              backgroundColor: 'red',
            },
            mediaStyle: { maxWidth: 'initial' },
            cropAreaStyle: {
              transform: 'none',
              left: 0,
              top: 0,
              minHeight: '100%',
              minWidth: '100%',
            },
          }}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          objectFit="vertical-cover"
        />
      </Box>
      <Flex w="70%" flexDir="column" alignItems="flex-end" justify="space-between">
        {children}
        <Flex w="100%" flexDir="column" alignItems="flex-start">
          <Text color="rgb(60, 70, 100)">Crop</Text>
          <Slider defaultValue={zoom} min={1} max={3} step={0.1} onChange={(zoom) => setZoom(zoom)}>
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
    </Flex>
  );
}

export default CropArea;
