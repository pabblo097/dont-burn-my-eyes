import { ChakraProvider } from '@chakra-ui/react';
import Popup from '@pages/popup/Popup';
import theme from '@root/src/shared/chakraTheme';
import setHtmlLang from '@root/src/shared/helpers/setHtmlLang';
import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/popup');

function init() {
   const appContainer = document.querySelector('#app-container');
   if (!appContainer) {
      throw new Error('Can not find #app-container');
   }
   const root = createRoot(appContainer);
   root.render(
      <ChakraProvider theme={theme}>
         <Popup />
      </ChakraProvider>,
   );
}

init();
setHtmlLang();
