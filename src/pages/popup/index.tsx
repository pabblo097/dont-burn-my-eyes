import { createRoot } from 'react-dom/client';
import Popup from '@pages/popup/Popup';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@root/src/shared/chakraTheme';
import setHtmlLang from '@root/src/shared/helpers/setHtmlLang';

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
