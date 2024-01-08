import { extendTheme } from '@chakra-ui/react';

// Fonts
import '@fontsource/fahkwang/400.css';
import '@fontsource/pinyon-script/400.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
      },
      'html, body': {
        margin: '0',
        padding: '0',
        position: 'relative',
        top: '0',
        right: '0',
      },
    },
  },
});

export default theme;
