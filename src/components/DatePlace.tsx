import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import Slider from 'react-slick';

export default function DatePlace() {
  return (
    <Box>
      <Flex
        flexDir="column"
        pt="3em"
        pb="3em"
        gap="2em"
        height="fit-content"
        zIndex="2"
      >
        <Title />
        <Description />
        <ImageSlider />
        <Breakdown />
      </Flex>
    </Box>
  );
}

const Title = () => {
  return (
    <Image
      alt="Date & Place"
      src="/date-place/title.png"
      margin="auto"
      width={{ base: 'unset', md: '15em' }}
    />
  );
};

const Description = () => {
  return (
    <Text
      fontSize={{ base: 'sm', md: 'md' }}
      width={{ base: '80%', md: '50ch' }}
      margin="auto"
      textAlign="justify"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    </Text>
  );
};

const ImageSlider = () => {
  const sliderSettings = {
    arrows: false,
    autoPlay: true,
    dots: true,
    draggable: true,
    infinite: true,
    swipe: true,
    touchMove: true,
  };

  const images = [
    { alt: 'Temporary', src: '/date-place/images/tmp.png' },
    { alt: 'Temporary', src: '/date-place/images/tmp.png' },
    { alt: 'Temporary', src: '/date-place/images/tmp.png' },
    { alt: 'Temporary', src: '/date-place/images/tmp.png' },
    { alt: 'Temporary', src: '/date-place/images/tmp.png' },
    { alt: 'Temporary', src: '/date-place/images/tmp.png' },
    { alt: 'Temporary', src: '/date-place/images/tmp.png' },
  ];

  return (
    <Box
      width={{ base: '60%', md: '25em' }}
      margin="auto"
      mb="1.5em"
      zIndex="2"
    >
      <Slider {...sliderSettings}>
        {images.map(({ alt, src }, idx) => (
          <Image key={`date-place-img-${idx}`} alt={alt} src={src} />
        ))}
      </Slider>
    </Box>
  );
};

const Breakdown = () => {
  const breakdownItems = [
    {
      title: 'Pre Event',
      imgSrc: '/date-place/breakdown/tmp.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    },
    {
      title: 'Main Event',
      imgSrc: '/date-place/breakdown/tmp.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    },
    {
      title: 'FSS & RTF',
      imgSrc: '/date-place/breakdown/tmp.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    },
  ];

  return (
    <Flex
      flexDir="column"
      width={{ base: '80%', md: '50ch' }}
      margin="auto"
      textAlign="justify"
      gap="1em"
      zIndex="2"
    >
      <Heading
        fontSize="xl"
        fontWeight="semibold"
        textColor="#9E2B25"
      >{`Here's How It Breaks Down:`}</Heading>
      {breakdownItems.map((item, idx) => (
        <Accordion
          key={`date-place-accordion-${idx}`}
          allowToggle
          backgroundColor="white"
        >
          <AccordionItem border="1px">
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              textColor="#9E2B25"
            >
              <Heading fontSize="md" fontWeight="medium">
                {item.title}
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              backgroundColor="#FFF8F0"
              borderTop="1px"
              display="flex"
              alignItems="center"
              gap="1em"
              pt="1.25em"
            >
              <Image
                alt={item.title}
                src={item.imgSrc}
                boxSize={{ base: '7.5em', md: '10em' }}
              />
              <Text fontSize={{ base: 'xs', md: 'md' }}>{item.content}</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Flex>
  );
};
