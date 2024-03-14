import '@fontsource/roboto';

import { extendTheme, ThemeOverride } from '@chakra-ui/react';

const defaultTheme: ThemeOverride = {
   config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
   },
   fonts: {
      heading: `'Roboto', sans-serif`,
      body: `'Roboto', sans-serif`,
   },
};

const theme = extendTheme(defaultTheme);

export default theme;
