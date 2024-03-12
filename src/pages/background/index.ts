import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import mainSwitchStorage from '@root/src/shared/storages/MainSwitchStorage';
import { blacklistStorage, whitelistStorage } from '@root/src/shared/storages/UrlsStorage';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

chrome.runtime.onInstalled.addListener(async (details) => {
   if (details.reason === 'install') {
      await mainSwitchStorage.init();
      await dimmerOpacityStorage.init();
      await dimmerOperatingModeStorage.init();
      await blacklistStorage.init();
      await whitelistStorage.init();
   }
});
