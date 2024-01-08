import { Box, Image } from '@chakra-ui/react';

export default function DatePlaceBgImage() {
  return (
    <Box position="relative">
      <Image
        alt="Background Image"
        src="/date-place/background-image.png"
        position="absolute"
        bottom={{ base: '-1.5em', md: '-3em' }}
        right="0"
        zIndex="1"
        width={{ base: 'unset', md: '50em' }}
      />
    </Box>
  );
}
