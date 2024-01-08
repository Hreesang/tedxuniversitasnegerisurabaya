import { Box, Image, Flex, Text } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box height="100vh" position="relative">
      <Background />
      <Theme />
      <Present />
    </Box>
  );
}

const Background = () => {
  return (
    <>
      {/* Background */}
      <Box
        backgroundImage="url(/hero/background.png)"
        //
        height="100vh"
        width="100%"
        zIndex="-1000"
        position="absolute"
        top="0"
        left="0"
        backgroundSize={{ base: 'cover', md: 'contain' }}
        backgroundPosition="center"
        backgroundColor="rgba(0, 0, 0, 0.75)"
      />

      {/* Splash */}
      <Box
        backgroundImage="url(/hero/splash.png)"
        opacity="0.2"
        //
        height="100vh"
        width="100%"
        zIndex="-1000"
        position="absolute"
        top="0"
        left="0"
        backgroundSize={{ base: 'cover', md: 'contain' }}
        backgroundPosition="center"
        backgroundColor="rgba(0, 0, 0, 0.75)"
      />
    </>
  );
};

const Theme = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Image
        src="/hero/theme.png"
        alt="pawana terbungkam."
        width={{ base: '80%', md: '25em' }}
      />
      <Text
        width={{ base: '75%', md: '35ch' }}
        mt="0.5em"
        fontFamily={`'Fakhwang', sans-serif`}
        textColor="#E8EBF7"
        fontSize="xl"
        lineHeight="1.25em"
        transform="scaleY(0.75)"
      >{`Just like some of us who might feel we don't have a chance to get a chance, either because of ourselves or 'something' around us.`}</Text>
    </Flex>
  );
};

const Present = () => {
  return (
    <Flex
      position="absolute"
      bottom="0.5em"
      left="0"
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textColor="#E8EBF7"
      lineHeight="1.25"
      transform="scaleY(0.75)"
    >
      <Text
        fontFamily={`'Fakhwang', sans-serif`}
        fontSize="1em"
        fontWeight="bold"
      >
        tedxuniversitasnegerisurabaya
      </Text>
      <Text fontFamily={`'Pinyon Script', sans-serif`} fontSize="1.5em">
        proudly present
      </Text>
    </Flex>
  );
};
