import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Icon,
  Button,
  Link,
} from '@chakra-ui/react';
import Slider, { type Settings as SliderSettings } from 'react-slick';
import { FaArrowRightLong } from 'react-icons/fa6';
import useMobile from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

export default function Merch() {
  return (
    <Box pt="3em" overflow="hidden" position="relative">
      <Shape />
      <Title />
      <Description />
      <Items />
      <OrderSection />
    </Box>
  );
}

const Shape = () => {
  return (
    <Image
      alt="Shape"
      src="/merch/rims-shape.png"
      position="absolute"
      right={{ base: 'unset', md: '-5em' }}
      top={{ base: 'unset', md: '5em' }}
      transform="rotate(158deg)"
      width={{ base: '35%', md: '30em' }}
      display={{ base: 'none', md: 'unset' }}
    />
  );
};

const Title = () => {
  return (
    <Image
      alt="Merchandise"
      src="/merch/title.png"
      margin="0 auto"
      mb="2em"
      width={{ base: '17.5em', md: '25em' }}
    />
  );
};

const Description = () => {
  return (
    <Box textAlign="center" fontSize={{ base: 'sm', md: 'lg' }} mb="3em">
      <Text>The official merchandise of</Text>
      <Text textColor="#9E2B25" fontWeight="medium">
        TEDxUniversitasNegeriSurabaya
      </Text>
    </Box>
  );
};

interface ItemProps {
  title: string;
  isSoldOut: boolean;
  isOpen: boolean;
  items: Array<{
    imgSrc: string;
    price: string;
  }>;
}

const Items = () => {
  const merchItems: Array<ItemProps> = [
    {
      title: 'Early Bird',
      isSoldOut: false,
      isOpen: true,
      items: [{ imgSrc: '/merch/items/early-bird.png', price: '85K' }],
    },
    {
      title: 'Presale 1',
      isSoldOut: false,
      isOpen: false,
      items: [
        { imgSrc: '/merch/items/djiwa-1.png', price: '99K' },
        { imgSrc: '/merch/items/nava-1.png', price: '109K' },
        { imgSrc: '/merch/items/aksata-1.png', price: '139K' },
        { imgSrc: '/merch/items/agra-1.png', price: '149K' },
        { imgSrc: '/merch/items/swara-1.png', price: '119K' },
      ],
    },
    {
      title: 'Presale 2',
      isSoldOut: false,
      isOpen: false,
      items: [
        { imgSrc: '/merch/items/djiwa-2.png', price: '104K' },
        { imgSrc: '/merch/items/nava-2.png', price: '114K' },
        { imgSrc: '/merch/items/aksata-2.png', price: '144K' },
        { imgSrc: '/merch/items/agra-2.png', price: '154K' },
        { imgSrc: '/merch/items/swara-2.png', price: '124K' },
      ],
    },
  ];

  return (
    <Flex flexDir="column" gap={{ base: '3em', md: '1em' }}>
      {merchItems.map((item, idx) => (
        <Item
          key={`merch-${idx}`}
          title={item.title}
          isSoldOut={item.isSoldOut}
          isOpen={item.isOpen}
          items={item.items}
        />
      ))}
    </Flex>
  );
};

const Item = ({ title, isSoldOut, isOpen, items }: ItemProps) => {
  const isMobile = useMobile();

  const initialSliderSettings: SliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    arrows: true,
  };
  const [sliderSettings, setSliderSettings] = useState<SliderSettings>(
    initialSliderSettings
  );

  useEffect(() => {
    if (isMobile) {
      setSliderSettings({
        dots: false,
        infinite: false,
        speed: 500,
        centerMode: true,
        arrows: true,
      });
    } else {
      setSliderSettings({
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        arrows: true,
      });
    }
  }, [isMobile]);

  return (
    <Box
      textAlign="center"
      width={{ base: '100%', md: '25em' }}
      mx="auto"
      mb={{ base: 'unset', md: '1em' }}
    >
      <Heading
        mb="0.5em"
        fontSize={{ base: 'xl', md: '3xl' }}
        textColor="#9E2B25"
      >
        {title}
      </Heading>
      <Slider {...sliderSettings}>
        {items.map((item, idx) => (
          <Box
            key={`merch-${title}-itm-${idx}`}
            position="relative"
            mb={isMobile ? 'unset' : '0.5em'}
          >
            <Image
              alt={`${title}-${idx}`}
              src={item.imgSrc}
              mx="auto"
              width="15em"
              filter={
                isSoldOut
                  ? 'blur(0.25em)'
                  : !isOpen
                  ? 'blur(0.25em) grayscale(100%)'
                  : 'unset'
              }
            />
            <Text
              bgColor="#9E2B25"
              width="fit-content"
              mx="auto"
              mt="1em"
              textColor="white"
              px="1em"
              borderRadius="full"
              fontSize="sm"
              border="1px"
            >
              IDR {isOpen ? item.price : '??'}
            </Text>
            {(!isOpen || isSoldOut) && (
              <Text
                position="absolute"
                bgColor="#9E2B25"
                margin="auto"
                width="fit-content"
                top="45%"
                left="50%"
                transform="translate(-50%, -50%)"
                px="1em"
                textColor="white"
                borderRadius="md"
              >
                {isSoldOut ? 'SOLD OUT' : !isOpen ? 'CLOSE ORDER' : ''}
              </Text>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const OrderSection = () => {
  return (
    <Box
      bgColor="#9E2B25"
      bgImage="url(/merch/background.png)"
      bgSize="contain"
      mt="3em"
      pl="1.5em"
      py={{ base: '3em', md: '5em' }}
      position="relative"
      zIndex="1"
    >
      <Image
        alt="Merch Items"
        src="/merch/all-items.png"
        position="absolute"
        width={{ base: '13em', md: '25em' }}
        top="0"
        right={{ base: '-1.5em', md: '7em' }}
        zIndex="1"
        filter="blur(0.25em) grayscale(100%)"
      />
      <Box w={{ base: 'unset', md: '25em' }} mx={{ base: 'unset', md: 'auto' }}>
        <Image
          alt="Get Yours Now"
          src="/merch/get-yours-now.png"
          w={{ base: '15em', md: '25em' }}
          mb="1em"
          position="relative"
          zIndex="2"
        />
        <Text
          textColor="white"
          fontSize={{ base: 'xs', md: 'xl' }}
          w={{ base: '17.5em', md: '100%' }}
          fontWeight="light"
          mb="1em"
          position="relative"
          zIndex="2"
        >
          Order now to get the limited-offer merch bundle at a special price
        </Text>
        <Link href="https://bit.ly/tedxtiketpawanaterbungkam" isExternal>
          <Button
            size={{ base: 'sm', md: 'lg' }}
            textColor="#9E2B25"
            fontSize={{ base: 'xs', md: 'lg' }}
          >
            Order Here <Icon as={FaArrowRightLong} ml="0.75em" />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
