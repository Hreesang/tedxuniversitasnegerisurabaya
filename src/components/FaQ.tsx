import {
  Box,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Heading,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export default function FaQ() {
  return (
    <Box position="relative" overflowX="hidden">
      <BackgroundShape />
      <Title />
      <Breakdown />
    </Box>
  );
}

const BackgroundShape = () => {
  return (
    <Image
      alt="Background"
      src="/faq/background-shape.png"
      position="absolute"
      zIndex="-1"
      transform="rotate(50deg)"
      opacity="0.5"
      width={{ base: '75%', md: '25em' }}
      top="3em"
      right={{ base: '-7.5em', md: '20em' }}
    />
  );
};

const Title = () => {
  return (
    <Image
      alt="FaQ"
      src="/faq/title.png"
      margin="auto"
      mt="4em"
      width={{ base: 'unset', md: '12.5em' }}
    />
  );
};

const Breakdown = () => {
  const items = [
    {
      title: 'What is TEDxUniversitasNegeriSurabaya?',
      description:
        'TEDxUniversitasNegeriSurabaya is an independent conference event inspired by TED Talks. TEDxUniversitasNegeriSurabaya aims to provide a platform for local and international speakers to share inspirational ideas with a diverse audience.',
    },
    {
      title: 'What is the difference between TEDx and TED?',
      description:
        'TED is a global non-profit organization that hosts an annual conference where leading thinkers and speakers from around the world give talks. TEDx is a local program that allows communities worldwide to organize TED-like events at the local level. TEDxUniversitasNegeriSurabaya is one such event organized by Universitas Negeri Surabaya.',
    },
    {
      title: 'When and where will TEDxUniversitasNegeriSurabaya be held?',
      description: `Information about the date and location of the TEDxUniversitasNegeriSurabaya event will be officially announced by the organizing committee. Be sure to follow TEDxUniversitasNegeriSurabaya's official social media channels and website for the latest updates.`,
    },
    {
      title: 'How can I attend TEDxUniversitasNegeriSurabaya?',
      description:
        'To attend TEDxUniversitasNegeriSurabaya, you will need to purchase tickets. Details about tickets and how to buy them will be available on the official TEDxUniversitasNegeriSurabaya website.',
    },
    {
      title:
        'Can I submit an idea or become a speaker at TEDxUniversitasNegeriSurabaya?',
      description: `TEDxUniversitasNegeriSurabaya typically opens opportunities for community members to submit ideas or become speakers through our event FSS (Finding Student Speaker 2023) TEDxUniversitasNegeriSurabaya. Be sure to follow TEDxUniversitasNegeriSurabaya's official social media channels and website for the latest updates.`,
    },
    {
      title: 'What is FSS TEDxUniversitasNegeriSurabaya?',
      description:
        'The 2023 TEDxUniversitasNegeriSurabaya Finding Student Speaker program will focus on Art as the chosen scope. In this day and age, our way of self-expression may be hindered due to the struggles and hurdles that life throws at us. In a perfect world, societal pressure and expectations demand us to only show the beautiful and desired aspects of our lives— leaving the harsh cold truth of reality locked inside our minds and hearts that leave us feeling heavy and trapped. Art has always been used for centuries on grounds of self-expression. Art as a tool can be used to liberate our deepest thoughts, and to share our unique experiences in life. Correlating with our grand theme, we want you to raise the sub-theme of “The Science of Art: A Catharsis for Our Struggle in Everyday Life”. We wish you to advocate and address the said issues at hand and be the voice of your own.',
    },
  ];

  return (
    <Accordion
      allowMultiple
      width={{ base: '80%', md: '30em' }}
      margin="auto"
      mt="3em"
      border="1px"
      mb="3em"
    >
      {items.map((item, idx) => (
        <AccordionItem key={`faq-breakdown-${idx}`} bgColor="white">
          {({ isExpanded }) => (
            <>
              <AccordionButton
                display="flex"
                justifyContent="space-between"
                width="100%"
                _expanded={{ textColor: '#9E2B25' }}
              >
                <Heading
                  fontWeight="semibold"
                  fontSize={{ base: 'xs', md: 'md' }}
                  textAlign="left"
                >
                  {item.title}
                </Heading>
                {isExpanded ? (
                  <MinusIcon boxSize="10px" />
                ) : (
                  <AddIcon boxSize="10px" />
                )}
              </AccordionButton>
              <AccordionPanel bgColor="#FFF8F0" borderTop="1px" pt="1.25em">
                <Text fontSize={{ base: 'xs', md: 'md' }} textAlign="justify">
                  {item.description}
                </Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
