import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import dimmerStateStorage from '@root/src/shared/storages/DimmerStateStorage';
import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

chrome.runtime.onInstalled.addListener((details) => {
   if (details.reason === 'install') {
      dimmerStateStorage.set(true);
      dimmerOpacityStorage.set(0.5);
      dimmerOperatingModeStorage.set('everywhereExcept');
   }
});
