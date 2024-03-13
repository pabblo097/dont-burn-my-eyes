import { ChakraProvider } from '@chakra-ui/react';
import Settings from '@pages/settings/Settings';
import theme from '@root/src/shared/chakraTheme';
import { DialogContextProvider } from '@root/src/shared/contexts/DialogContext';
import setHtmlLang from '@root/src/shared/helpers/setHtmlLang';
import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

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
