import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';

export default function Partnership() {
  return (
    <Box pt="4em" pb="4em">
      <Title />
      <PartnerInfo />
    </Box>
  );
}

const Title = () => {
  return (
    <Box position="relative">
      <Image
        alt="Shape"
        src="/partnership/title-shape.png"
        position="absolute"
        left={{ base: '-4em', md: '-5em' }}
        top={{ base: '-2em', md: '-7em' }}
        transform="rotate(158deg)"
        width={{ base: '35%', md: '30em' }}
      />
      <Image
        alt="Partnership"
        src="/partnership/title.png"
        margin="auto"
        width={{ base: 'unset', md: '15em' }}
      />
    </Box>
  );
};

const PartnerInfo = () => {
  const partners = [
    {
      imgSrc: '/partner/wardah.png',
      title: 'Wardah',
      description:
        'Wardah is a beauty brand that cares and understands the wish of every women to always feel calm and comfortable with their look.',
    },
    {
      imgSrc: '/partner/rakyatuku.png',
      title: 'Rakyatuku',
      description:
        'Your go-to brand for unique custom t-shirts, embodying individuality and community spirit through personalized designs.',
    },
  ];

  return (
    <Flex
      flexDir="column"
      width={{ base: '80%', md: '30em' }}
      margin="auto"
      gap="1.5em"
      mt="3em"
    >
      {partners.map((partner, idx) => {
        const isEven = idx % 2 == 0 ? true : false;
        return (
          <Flex
            key={`partnership-${idx}`}
            flexDir={isEven ? 'row-reverse' : 'row'}
            gap={{ base: '1em', md: '2em' }}
            alignItems="center"
          >
            <Image
              alt={partner.title}
              src={partner.imgSrc}
              width={{ base: '8em', md: '12em' }}
              padding="0.5em"
              bgColor="#FFF8F0"
              borderRadius="md"
              border="1px"
            />
            <Box>
              <Heading
                fontSize={{ base: 'md', md: '2xl' }}
                textAlign={isEven ? 'left' : 'right'}
                textColor="#9E2B25"
              >
                {partner.title}
              </Heading>
              <Text fontSize={{ base: 'xs', md: 'md' }} textAlign="justify">
                {partner.description}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
