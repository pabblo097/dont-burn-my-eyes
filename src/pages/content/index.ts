interface StorageValues {
   isDimmerEnabled: boolean;
   dimmerOpacity: number;
   dimmerOperatingMode: string;
   blacklist: string[];
   whiteList: string[];
}

const getOpacityStyle = (shouldApplyDimmer: boolean, dimmerOpacity: number) =>
   shouldApplyDimmer ? (dimmerOpacity / 100).toString() : '0';

const getShouldApplyDimmer = (
   isDimmerEnabled: boolean,
   dimmerOperatingMode: string,
   blacklist: string[],
   whiteList: string[],
   currentUrl: string,
): boolean => {
   switch (dimmerOperatingMode) {
      case 'blacklist': {
         return isDimmerEnabled && !blacklist.includes(currentUrl);
      }
      case 'whitelist': {
         return isDimmerEnabled && whiteList.includes(currentUrl);
      }
      case 'alwaysOn': {
         return isDimmerEnabled;
      }
   }
};

const createDimmerElement = (shouldApplyDimmer: boolean, dimmerOpacity: number) => {
   const dimmer = document.createElement('div');
   dimmer.id = 'screen-dimmer';
   dimmer.ariaHidden = 'true';
   dimmer.setAttribute(
      'style',
      `opacity: ${getOpacityStyle(shouldApplyDimmer, dimmerOpacity)}; display: block; z-index: 2147483647; margin: 0; border-radius: 0; padding: 0; background: rgb(70, 70, 70); pointer-events: none; position: fixed; top: -10%; right: -10%; width: 120%; height: 120%; mix-blend-mode: multiply; transition: .2s`,
   );

   return dimmer;
};

const getValuesFromStorage = async (): Promise<StorageValues> =>
   (await chrome.storage.local.get()) as StorageValues;

(async () => {
   let { isDimmerEnabled, dimmerOpacity, dimmerOperatingMode, blacklist, whiteList } =
      await getValuesFromStorage();
   const currentUrl = window.location.hostname;

   let shouldApplyDimmer: boolean = getShouldApplyDimmer(
      isDimmerEnabled,
      dimmerOperatingMode,
      blacklist,
      whiteList,
      currentUrl,
   );

   const dimmer = createDimmerElement(shouldApplyDimmer, dimmerOpacity);

   document.documentElement.appendChild(dimmer);

   chrome.storage.local.onChanged.addListener((changes) => {
      if (Object.hasOwn(changes, 'isDimmerEnabled')) {
         isDimmerEnabled = changes.isDimmerEnabled.newValue;
      }

      if (Object.hasOwn(changes, 'dimmerOpacity')) {
         dimmerOpacity = changes.dimmerOpacity.newValue;
      }

      if (Object.hasOwn(changes, 'dimmerOperatingMode')) {
         dimmerOperatingMode = changes.dimmerOperatingMode.newValue;
      }

      if (Object.hasOwn(changes, 'blacklist')) {
         blacklist = changes.blacklist.newValue;
      }

      if (Object.hasOwn(changes, 'whiteList')) {
         whiteList = changes.whiteList.newValue;
      }

      shouldApplyDimmer = getShouldApplyDimmer(
         isDimmerEnabled,
         dimmerOperatingMode,
         blacklist,
         whiteList,
         currentUrl,
      );
      dimmer.style.opacity = getOpacityStyle(shouldApplyDimmer, dimmerOpacity);
   });
})();
