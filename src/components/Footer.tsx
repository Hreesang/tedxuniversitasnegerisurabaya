import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <Flex
      bgColor="#2A0C4E"
      pt={{ base: '3em', md: '5em' }}
      height="100vh"
      flexDir="column"
      justifyContent="space-between"
      position="relative"
      w="100%"
      overflowX="hidden"
    >
      <XBackground />
      <MainContent />
      <BottomContent />
    </Flex>
  );
}

const MainContent = () => {
  return (
    <Flex
      flexDir="column"
      px={{ base: '2em', md: 'unset' }}
      pb="2em"
      width={{ base: 'unset', md: '30em' }}
      mx={{ base: 'unset', md: 'auto' }}
      justifyContent="space-between"
      h="100%"
    >
      <Box>
        <Image
          alt="Sign Up to Get Notified"
          src="/footer/title.png"
          width={{ base: '17em', md: '20em' }}
        />
        <Text
          mt="1.5em"
          textColor="white"
          textAlign="justify"
          width="70%"
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight="light"
        >{`Never miss a thing when it comes to TEDxUniversitasNegeriSurabaya! We’ll keep you up to date with all the latest info, schedules, and announcements!`}</Text>
        <Link
          href="https://www.instagram.com/tedxuniversitasnegerisurabaya/"
          isExternal
        >
          <Button textColor="#2A0C4E" mt="1.5em" width="10em">
            Subscribe
          </Button>
        </Link>
      </Box>
      <SocialMedia />
    </Flex>
  );
};

const SocialMedia = () => {
  const socialMedia = [
    {
      index: 'Instagram',
      href: 'https://www.instagram.com/tedxuniversitasnegerisurabaya/',
      icon: <FaInstagram />,
    },
    {
      index: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tedxuniversitasnegerisurabaya/',
      icon: <FaLinkedin />,
    },
    {
      index: 'YouTube',
      href: 'https://www.youtube.com/@TEDx',
      icon: <FaYoutube />,
    },
  ];

  return (
    <Flex gap="0.5em">
      {socialMedia.map((itm) => (
        <Link key={`footer-${itm.index}`} href={itm.href} isExternal>
          <IconButton
            aria-label={itm.index}
            icon={itm.icon}
            size={{ base: 'xs', md: 'sm' }}
          />
        </Link>
      ))}
    </Flex>
  );
};

const BottomContent = () => {
  return (
    <Box>
      <Copyright />
    </Box>
  );
};

const Copyright = () => {
  return (
    <Box
      borderTop="2px"
      borderColor="#51355A"
      textColor="white"
      fontSize={{ base: '9px', md: 'sm' }}
      fontWeight="light"
      textAlign="center"
      py="2em"
    >
      <Text>{'@2024 All Rights Reserved'}</Text>
      <Text>
        {'This independent '}
        <Link
          href="https://www.ted.com/about/programs-initiatives/tedx-program"
          isExternal
          textColor="#EB0028"
        >
          <b>
            <u>TEDx</u>
          </b>
        </Link>
        {' event is operated under license from TED.'}
      </Text>
    </Box>
  );
};

const XBackground = () => {
  return (
    <Image
      alt="X"
      src="X.png"
      position="absolute"
      width={{ base: '17.5em', md: '25em' }}
      right={{ base: '-6.5em', md: '10em' }}
      top="11.5em"
    />
  );
};
