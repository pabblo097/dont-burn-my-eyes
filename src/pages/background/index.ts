import intensityStorage from '@root/src/shared/storages/IntensityStorage';
import operatingModeStorage from '@root/src/shared/storages/OperatingModeStorage';
import mainSwitchStorage from '@root/src/shared/storages/MainSwitchStorage';
import { blacklistStorage, whitelistStorage } from '@root/src/shared/storages/UrlsStorage';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

chrome.runtime.onInstalled.addListener(async (details) => {
   if (details.reason === 'install') {
      await mainSwitchStorage.init();
      await intensityStorage.init();
      await operatingModeStorage.init();
      await blacklistStorage.init();
      await whitelistStorage.init();
   }
});
