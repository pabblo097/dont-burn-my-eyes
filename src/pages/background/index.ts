import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import dimmerStateStorage from '@root/src/shared/storages/DimmerStateStorage';
import everywhereExceptUrlsStorage from '@root/src/shared/storages/EverywhereExceptUrlsStorage';
import onlyOnUrlsStorage from '@root/src/shared/storages/OnlyOnUrlsStorage';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

chrome.runtime.onInstalled.addListener(async (details) => {
   if (details.reason === 'install') {
      await dimmerStateStorage.init();
      await dimmerOpacityStorage.init();
      await dimmerOperatingModeStorage.init();
      await everywhereExceptUrlsStorage.init();
      await onlyOnUrlsStorage.init();
   }
});
