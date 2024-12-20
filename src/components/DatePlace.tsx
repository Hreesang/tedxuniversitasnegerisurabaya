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
import Slider, { type Settings as SliderSettings } from 'react-slick';

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
      On February 3, 2024, TEDxUniversitasNegeriSurabaya will host a captivating
      event starting at 08:00 AM WIB at the Auditorium T2, Faculty of Language
      and Arts, Universitas Negeri Surabaya. Join us for an inspiring day of
      thought-provoking talks and discussions that promise to spark ideas and
      ignite change. Don't miss the opportunity to be part of this intellectual
      gathering at one of Surabaya's esteemed university venues.
    </Text>
  );
};

const ImageSlider = () => {
  const sliderSettings: SliderSettings = {
    arrows: false,
    dots: true,
    draggable: true,
    infinite: true,
    swipe: true,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    lazyLoad: 'anticipated',
  };

  const images = [
    { alt: 'Behind The Scene 1', src: '/prev/season-1/bts-1.jpg' },
    { alt: 'Behind The Scene 2', src: '/prev/season-1/bts-2.jpg' },
    { alt: 'Behind The Scene 3', src: '/prev/season-1/bts-3.jpg' },
    { alt: 'Behind The Scene 4', src: '/prev/season-1/bts-4.jpg' },
    { alt: 'Behind The Scene 5', src: '/prev/season-1/bts-5.jpg' },
    { alt: 'Behind The Scene 6', src: '/prev/season-1/bts-6.jpg' },
    { alt: 'Behind The Scene 7', src: '/prev/season-1/bts-7.jpg' },
    { alt: 'Behind The Scene 8', src: '/prev/season-1/bts-8.jpg' },
    { alt: 'Behind The Scene 9', src: '/prev/season-1/bts-9.jpg' },
    { alt: 'Behind The Scene 10', src: '/prev/season-1/bts-10.jpg' },
  ];

  return (
    <Box
      width={{ base: '80%', md: '32em' }}
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
      title: 'Pre Event 1',
      content:
        'TEDxUniversitasNegeriSurabaya ft Rahasia Gadis. “All you need to know in building a brand”. Explore the secrets of successful branding in a dynamic session that delves into the essentials of crafting your own unique personal brand.',
    },
    {
      title: 'Pre Event 2',
      content:
        "TEDxUniversitasNegeriSurabaya is on the lookout for student speakers to explore the intersection of science and art in the event themed 'The Science of Art: A Catharsis for Our Struggle in Everyday's Life.' If you're a student with a passion for art's transformative power, seize this opportunity to share your unique perspective on how art becomes a cathartic force in our daily challenges.",
    },
    {
      title: 'Pre Event 3',
      content:
        'TEDxUniversitasNegeriSurabaya ft Wardah for an exhilarating Pre-Event centered around sports exploration. Engage in a dynamic and enjoyable fitness experience, encouraging participants to embrace physical activity with enthusiasm. Discover a fresh perspective on exercise and ignite a renewed passion for staying active at this exciting Pre-Event.',
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
              <Text fontSize={{ base: 'xs', md: 'md' }}>{item.content}</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Flex>
  );
};
