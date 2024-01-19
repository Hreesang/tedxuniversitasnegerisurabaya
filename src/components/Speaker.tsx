import {
  Flex,
  Box,
  type BoxProps,
  Image,
  Text,
  Heading,
} from '@chakra-ui/react';

export default function Speaker() {
  return (
    <Flex
      position="relative"
      backgroundColor="#2A0C4E"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={{ base: '3em', md: '5em' }}
      pt={{ base: '2em', md: '5em' }}
      pb={{ base: '2em', md: '5em' }}
      zIndex="-1000"
      overflowX="hidden"
    >
      <Clouds />
      <Title />
      {/** <SpeakerImage /> */}
      <Content />
      <FaceBackground />
      <PreEvent />
    </Flex>
  );
}

const Title = () => {
  return (
    <Image
      alt="Speaker Title"
      src="/speaker/title.png"
      width={{ base: 'unset', md: '25em' }}
    />
  );
};

/*
const SpeakerImage = () => {
  return (
    <Image
      alt="Speaker"
      src="/speaker/image.png"
      width={{ base: '60%', md: '25em' }}
    />
  );
};
*/

const Content = () => {
  const bgSettings: BoxProps = {
    margin: 'auto',
    backgroundImage: 'url(/speaker/text-background.png)',
    backgroundSize: 'contain',
    textColor: 'white',
    fontWeight: 'light',
    textAlign: 'justify',
    width: { base: '85%', md: '55ch' },
    fontSize: { base: 'sm', sm: 'md' },
  };

  const containerSettings: BoxProps = {
    margin: 'auto',
    pt: '0.75em',
    pb: '0.75em',
    width: { base: '85%', md: '50ch' },
  };

  return (
    <Box>
      {/* Theme Explanation */}
      <Box {...bgSettings}>
        <Box {...containerSettings}>
          <Text>
            The theme for this year's TEDxUniversitasNegeriSurabaya event
            is&nbsp;
            <b>"Pawana Terbungkam, Bisiknya Tak Sampai Jua."</b>&nbsp; This
            theme is all about the struggles faced by unheard voices and how
            their messages struggle to be heard.
          </Text>
        </Box>
        <Box {...containerSettings}>
          <Text>
            <b>"Pawana"</b>
          </Text>
          <Text>
            refers to voices that are hidden or suppressed in society. These
            voices are often silenced or overlooked and they have important
            messages that can bring about positive change. However, they face
            barriers that stop them from being heard.
          </Text>
        </Box>
        <Box {...containerSettings}>
          <Text>
            <b>"Terbungkam"</b>
          </Text>
          <Text>
            symbolizes the challenges and obstacles that prevent these voices
            from speaking out. It represents oppression, discrimination, and
            lack of platforms for expression.
          </Text>
        </Box>
        <Box {...containerSettings}>
          <Text>
            <b>"Bisiknya Tak Sampai Jua"</b>
          </Text>
          <Text>
            represents the struggle for these voices to reach a wider audience.
            Despite their efforts, their messages often go unheard due to
            dominant narratives or deliberate silence from those in power.
          </Text>
        </Box>
      </Box>

      {/* Aims */}
      <Box {...bgSettings} mt="1.5em">
        <Box {...containerSettings}>
          <Text>
            The event aims to shed light on these barriers and amplify the
            voices of the marginalized. It wants to create an inclusive platform
            where these voices can be heard and championed. Through diverse
            speakers and topics, the event hopes to address a wide range of
            experiences and offer a space for marginalized voices to share their
            stories and ideas.
          </Text>
        </Box>
        <Box {...containerSettings}>
          <Text>
            By focusing on this theme, <b>TEDxUniversitasNegeriSurabaya</b>
            &nbsp; wants to inspire attendees to examine power dynamics that
            silence voices and encourage them to actively listen, engage in
            dialogue, and work towards dismantling barriers. The event aims to
            ignite a sense of urgency and collective responsibility for
            amplifying unheard voices. It hopes to empower attendees to become
            advocates for change, challenge injustices, and create spaces where
            every voice is valued. The ultimate goal is to create a more just
            and inclusive world where no voice is stifled and everyone has the
            same opportunity to contribute.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const Clouds = () => {
  return (
    <>
      <Image
        position="absolute"
        alt="Clouds"
        src="/speaker/clouds.png"
        top={{ base: '6em', md: '10em' }}
        right={{ base: '6em', md: 'unset' }}
        left={{ base: 'unset', md: '5em' }}
        zIndex="-999"
        opacity="0.5"
      />
      {/**<Image
        position="absolute"
        alt="Clouds"
        src="/speaker/clouds.png"
        top={{ base: '17em', md: '30em' }}
        left={{ base: '10em', md: '50em' }}
  />*/}
    </>
  );
};

const FaceBackground = () => {
  return (
    <Image
      alt="Liberty"
      src="/speaker/face-bg.png"
      position="absolute"
      bottom="0"
      zIndex="-999"
      right="0"
      opacity="0.6"
      filter="brightness(30%)"
    />
  );
};

const PreEvent = () => {
  const preEvents = [
    { title: 'Pre Event 1', date: 'SEP 19, 2023' },
    { title: 'FSS', date: 'SEP 23, 2023' },
    { title: 'Pre Event 2', date: 'DEC 09, 2023' },
  ];

  return (
    <Flex
      flexDir="column"
      textColor="white"
      gap={{ base: '3em', md: '4em' }}
      alignItems="center"
    >
      <Image
        alt="Pre Events"
        src="/speaker/pre-events.png"
        width={{ base: '80%', md: '25em' }}
      />
      <Flex flexDir="row" gap={{ base: '1em', md: '2em' }}>
        {preEvents.map((preEvent) => (
          <Flex
            key={`pre-event-${preEvent.title}`}
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="0.25em"
          >
            <Heading fontSize={{ base: 'lg', md: '4xl' }}>
              {preEvent.title}
            </Heading>
            <PreEventLine />
            <Text fontSize={{ base: 'sm', md: 'lg' }}>{preEvent.date}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

const PreEventLine = () => {
  return (
    <Box
      height="0.1em"
      width={{ base: '6em', md: '11em' }}
      backgroundColor="white"
    />
  );
};
