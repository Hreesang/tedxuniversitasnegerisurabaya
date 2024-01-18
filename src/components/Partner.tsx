import { Flex, Image } from '@chakra-ui/react';

const partners = [
  { name: 'Wardah', imageSrc: '/partner/wardah.png' },
  { name: 'Rakyatuku', imageSrc: '/partner/rakyatuku.png' },
];

export default function Partner() {
  return (
    <Flex
      width="100%"
      backgroundColor="#2A0C4E"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap="1.5em"
      paddingTop="1em"
      paddingBottom="1em"
    >
      {partners.map((partner, idx) => (
        <EachPartner key={`partner-${idx}`} {...partner} />
      ))}
    </Flex>
  );
}

interface EachPartnerProps {
  name: string;
  imageSrc: string;
}

const EachPartner = (props: EachPartnerProps) => {
  const { name, imageSrc } = props;

  return (
    <Image
      alt={name}
      src={imageSrc}
      width={{ base: '5em', md: '7.5em' }}
      padding="0.5em"
      bgColor="white"
      borderRadius="md"
    />
  );
};
