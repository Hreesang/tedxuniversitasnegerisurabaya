import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  type FlexProps,
  AspectRatio,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useEffect, useState } from 'react';

export default function MainEvent() {
  return (
    <Box
      backgroundImage="url(/main-event/background.png)"
      backgroundColor="#9E2B25"
      pt="3.5em"
      pb="3.5em"
      position="relative"
    >
      <BackgroundShape />
      <Title />
      <Counter />
      <VideoPlayer />
    </Box>
  );
}

const Title = () => {
  return (
    <Image
      alt="Main Event"
      src="/main-event/title.png"
      margin="auto"
      width={{ base: 'unset', md: '15em' }}
    />
  );
};

const Counter = () => {
  const eventTimeStr = 'February 3, 2024 at 08:00 WIB';
  dayjs.extend(customParseFormat);
  dayjs.extend(utc);
  dayjs.extend(timezone);

  interface ITimeDifferent {
    totalInSecond: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  }

  const [timeDiff, setTimeDiff] = useState<ITimeDifferent>({
    totalInSecond: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const tid = setInterval(() => {
      const getTimeDiff = (): ITimeDifferent => {
        const eventDate = dayjs(eventTimeStr, 'MMMM D, YYYY at hh:mm').tz(
          'Asia/Jakarta'
        );
        const nowDate = dayjs();
        const diffInSec = eventDate.diff(nowDate, 'second');

        const secInMin = 60;
        const secInHour = 3_600;
        const secInDay = 86_400;

        let secondsLeft = 0;
        const day = Math.floor(diffInSec / secInDay);
        secondsLeft = diffInSec % (day * secInDay);

        const hour = Math.floor(secondsLeft / secInHour);
        secondsLeft = secondsLeft % (hour * secInHour);

        const minute = Math.floor(secondsLeft / secInMin);
        secondsLeft = secondsLeft % (minute * secInMin);

        const second = Math.floor(secondsLeft);

        return {
          totalInSecond: diffInSec,
          day,
          hour,
          minute,
          second,
        };
      };

      const curTimeDiff = getTimeDiff();
      if (curTimeDiff.totalInSecond !== timeDiff.totalInSecond) {
        setTimeDiff(curTimeDiff);
      }
    }, 500);

    return () => {
      clearInterval(tid);
    };
  }, [timeDiff]);

  const pad = (num: string | number, n = 2) => {
    if (typeof num !== 'string') {
      num = num.toString();
    }

    while (num.length < n) num = '0' + num;
    return num;
  };

  const counterContainerSettings: FlexProps = {
    flexDir: 'column',
    textAlign: 'center',
  };

  return (
    <Flex
      justifyContent="center"
      flexDir="column"
      w="100%"
      textColor="white"
      gap={{ base: '1.5em', md: '3em' }}
      mt={{ base: '1.5em', md: '3em' }}
    >
      <Text
        textAlign="center"
        fontSize={{ base: 'lg', md: '2xl' }}
        fontWeight="semibold"
      >
        starts on
      </Text>
      <Flex
        justifyContent="center"
        flexDir="column"
        textAlign="center"
        gap="1em"
      >
        <Text fontSize={{ base: 'lg', md: '3xl' }}>{eventTimeStr}</Text>
        <Line />
      </Flex>
      <Flex justifyContent="center" gap={{ base: '2em', md: '6em' }}>
        <Flex {...counterContainerSettings}>
          <Heading fontSize={{ base: '4xl', md: '6em' }}>
            {pad(timeDiff.day)}
          </Heading>
          <Text
            fontSize={{ base: 'sm', md: '4xl' }}
            fontWeight={{ base: 'unset', md: 'semibold' }}
          >
            Days
          </Text>
        </Flex>
        <Flex {...counterContainerSettings}>
          <Heading fontSize={{ base: '4xl', md: '6em' }}>
            {pad(timeDiff.hour)}
          </Heading>
          <Text
            fontSize={{ base: 'sm', md: '4xl' }}
            fontWeight={{ base: 'unset', md: 'semibold' }}
          >
            Hours
          </Text>
        </Flex>
        <Flex {...counterContainerSettings}>
          <Heading fontSize={{ base: '4xl', md: '6em' }}>
            {pad(timeDiff.minute)}
          </Heading>
          <Text
            fontSize={{ base: 'sm', md: '4xl' }}
            fontWeight={{ base: 'unset', md: 'semibold' }}
          >
            Minutes
          </Text>
        </Flex>
        <Flex {...counterContainerSettings}>
          <Heading fontSize={{ base: '4xl', md: '6em' }}>
            {pad(timeDiff.second)}
          </Heading>
          <Text
            fontSize={{ base: 'sm', md: '4xl' }}
            fontWeight={{ base: 'unset', md: 'semibold' }}
          >
            Seconds
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Line = () => (
  <Box
    height={{ base: '0.1em', md: '0.25em' }}
    width={{ base: '65%', md: '50ch' }}
    backgroundColor="white"
    margin="auto"
  />
);

const VideoPlayer = () => {
  return (
    <AspectRatio
      ratio={16 / 9}
      w={{ base: '90%', md: '50em' }}
      margin="auto"
      mt={{ base: '3em', md: '7em' }}
    >
      <iframe
        src="https://drive.google.com/file/d/1xDIlol1nJXmGGWLgqdA1cvkdYXQJpFRm/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
    </AspectRatio>
  );
};

const BackgroundShape = () => {
  return (
    <>
      <Image
        alt="Shape"
        src="/main-event/background-shape.png"
        position="absolute"
        transform="scaleX(-1)"
        bottom={{ base: '0', md: '15em' }}
        width={{ base: 'unset', md: '40%' }}
        right={{ base: 'unset', md: '0' }}
      />
      <Image
        alt="Shape"
        src="/main-event/background-shape.png"
        position="absolute"
        display={{ base: 'none', md: 'unset' }}
        bottom="15em"
        width="40%"
        left="0"
      />
    </>
  );
};
