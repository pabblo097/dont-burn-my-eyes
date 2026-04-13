import 'webextension-polyfill';

import intensityStorage from '@root/src/shared/storages/IntensityStorage';
import mainSwitchStorage from '@root/src/shared/storages/MainSwitchStorage';
import urlsStorage from '@root/src/shared/storages/UrlsStorage';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';

reloadOnUpdate('pages/background');

chrome.runtime.onInstalled.addListener(async (details) => {
   if (details.reason === 'install') {
      await mainSwitchStorage.init();
      await intensityStorage.init();
      await urlsStorage.init();
   }
});
