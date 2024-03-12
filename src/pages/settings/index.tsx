import React from 'react';
import { createRoot } from 'react-dom/client';
import Settings from '@pages/settings/Settings';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@root/src/shared/chakraTheme';
import setHtmlLang from '@root/src/shared/helpers/setHtmlLang';
import { DialogContextProvider } from '@root/src/shared/contexts/DialogContext';

refreshOnUpdate('pages/settings');

function init() {
   const appContainer = document.querySelector('#app-container');
   if (!appContainer) {
      throw new Error('Can not find #app-container');
   }
   const root = createRoot(appContainer);
   root.render(
      <ChakraProvider theme={theme}>
         <DialogContextProvider>
            <Settings />
         </DialogContextProvider>
      </ChakraProvider>,
   );
}

init();
setHtmlLang();
