import { Box } from '@chakra-ui/react';

import Hero from '@/components/Hero';
import Partner from '@/components/Partner';
import Introduction from '@/components/Introduction';
import Speaker from '@/components/Speaker';
import DatePlace from '@/components/DatePlace';
import DatePlaceBgImage from '@/components/DatePlaceBgImage';
import MainEvent from '@/components/MainEvent';
import FaQ from '@/components/FaQ';
import Partnership from '@/components/Partnership';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <Box>
      <Hero />
      <Partner />
      <Introduction />
      <Speaker />
      <DatePlace />
      <DatePlaceBgImage />
      <MainEvent />
      <FaQ />
      <Partnership />
      <Footer />
    </Box>
  );
}
