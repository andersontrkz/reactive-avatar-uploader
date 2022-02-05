import { Flex, Container, Image, Text, Link, Box } from '@chakra-ui/react';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbar } from 'react-circular-progressbar';

const IMAGE =
  'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300';

const PreviewCard = () => {
  return (
    <Container p="0">
      <Flex justify="space-between" alignItems="center">
        <Flex justify="space-between" alignItems="center">
          <Link mx="2" href="#" target="_blank">
            <Image src={IMAGE} borderRadius="12px" boxSize="12" fit="cover" />
          </Link>
          <Text mx="2">minhaimagem.png (24KB)</Text>
          <Box mx="2">
            <FontAwesomeIcon icon={faCheckCircle} color="green" />
          </Box>
        </Flex>

        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: 'blue' },
          }}
          strokeWidth={10}
          text="50%"
          value={100}
        />
        <Box mx="2">
          <FontAwesomeIcon icon={faTimes} color="red" />
        </Box>
      </Flex>
    </Container>
  );
};

export default PreviewCard;
