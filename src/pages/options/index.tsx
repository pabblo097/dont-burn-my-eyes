import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from '@pages/options/Options';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@root/src/shared/chakraTheme';

refreshOnUpdate('pages/options');

function init() {
   const appContainer = document.querySelector('#app-container');
   if (!appContainer) {
      throw new Error('Can not find #app-container');
   }
   const root = createRoot(appContainer);
   root.render(
      <ChakraProvider theme={theme}>
         <Options />
      </ChakraProvider>,
   );
}

init();