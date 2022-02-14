import { useState, useCallback, useEffect } from 'react';
import Cropper from 'react-easy-crop';

import useAvatarUpload from '../../../hooks/useAvatarUpload';

function CropperBox({ setCroppedAreaPixels, zoom, setZoom }: any) {
  const { avatar, setControllerEditing } = useAvatarUpload();

  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  useEffect(() => {
    setControllerEditing(true);

    return () => {
      setControllerEditing(false);
    };
  }, []);

  return (
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
  );
}

export default CropperBox;
