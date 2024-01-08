import {
  Box,
  Image,
  Heading,
  Text,
  type TextProps,
  Flex,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const introImages = [
  { name: 'Temporary', imageSrc: '/intro/tmp.png' },
  { name: 'Temporary', imageSrc: '/intro/tmp.png' },
  { name: 'Temporary', imageSrc: '/intro/tmp.png' },
];

export default function Introduction() {
  return (
    <Box
      paddingTop="3em"
      paddingBottom="3em"
      position="relative"
      maxWidth="100%"
      overflowX="hidden"
    >
      <XBackground />
      <ImageSlider />
      <Content />
    </Box>
  );
}

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

  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
      <Box width={{ base: '60%', md: '25em' }}>
        <Slider {...sliderSettings}>
          {introImages.map(({ name, imageSrc }, idx) => (
            <Image key={`intro-img-${idx}`} alt={name} src={imageSrc} />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

const Content = () => {
  const textSettings: TextProps = {
    fontSize: 'md',
    textShadow: '-3px 8px 25px rgba(0,0,0,0.35)',
    textAlign: 'justify',
  };

  return (
    <Flex
      width="100%"
      marginTop="4em"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        fontFamily="`Poppins`, sans-serif"
        flexDirection="column"
        gap="1.5em"
        width={{ base: '80%', md: '50ch' }}
        justifyContent="center"
        alignItems="center"
      >
        <Heading width="100%" textColor="#9E2B25" fontWeight="bold">
          Already 2 Seasons!
        </Heading>
        <Text {...textSettings}>
          {`TEDxUniversitasNegeriSurabaya is an annual independently organized TED event held at Universitas Negeri Surabaya (State University of Surabaya). This year's theme, `}{' '}
          <b>{`"Pawana Terbungkam Bisiknya Tak Sampai Jua,"`}</b>
          {` focuses on amplifying the voices that are often silenced and unheard. The event aims to bring together a diverse range of speakers and ideas from various fields, including Career, Personal Branding, Art, Disability, and Sport. By showcasing speakers who have overcome obstacles, achieved success, and made a positive impact in their respective fields.`}
        </Text>
        <Text
          {...textSettings}
        >{`TEDxUniversitasNegeriSurabaya seeks to inspire attendees and encourage them to make a difference in their own lives and communities. The event provides a platform for sharing experiences, knowledge, and innovative ideas that can pave the way for positive change.`}</Text>
        <Text
          {...textSettings}
        >{`Throughout the event, attendees will have the opportunity to hear from individuals who have excelled in their careers, utilized personal branding to create a meaningful impact, harnessed the power of art as a form of expression and healing, highlighted the challenges faced by disabled individuals and advocated for inclusivity, and showcased the transformative power of sports in empowering individuals. TEDxUniversitasNegeriSurabaya serves as a catalyst for thought-provoking discussions, fostering connections, and inspiring action. By amplifying the voices that are often overlooked, the event aims to create a platform for ideas and experiences that have the potential to ignite change and make a positive difference in society.`}</Text>
      </Flex>
    </Flex>
  );
};

const XBackground = () => {
  return (
    <Image
      alt="X"
      src="/X.png"
      opacity="0.075"
      zIndex="-1000"
      position="absolute"
      top={{ base: '7.5em', md: '15em' }}
      left={{ base: '10em', md: '45em' }}
      width={{ base: 'unset', md: '30em' }}
    />
  );
};
