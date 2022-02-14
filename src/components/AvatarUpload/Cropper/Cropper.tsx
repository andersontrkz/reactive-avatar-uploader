import { Box, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import useAvatarUpload from '../../../hooks/useAvatarUpload';

import CropperImageBox from './CropperBox';
import CropperPanel from './CropperPanel';

function Cropper() {
  const { setControllerEditing } = useAvatarUpload();
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setControllerEditing(true);

    return () => {
      setControllerEditing(false);
    };
  }, []);

  return (
    <Flex width="100%" justify="space-between">
      <Box borderRadius="50%" boxSize="32" pos="relative">
        <CropperImageBox
          zoom={zoom}
          setZoom={setZoom}
          setCroppedAreaPixels={setCroppedAreaPixels}
        />
      </Box>

      <CropperPanel zoom={zoom} setZoom={setZoom} croppedAreaPixels={croppedAreaPixels} />
    </Flex>
  );
}

export default Cropper;