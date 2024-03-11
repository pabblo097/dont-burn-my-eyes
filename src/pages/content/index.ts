interface StorageValues {
   isDimmerEnabled: boolean;
   dimmerOpacity: number;
   dimmerOperatingMode: string;
   blacklist: string[];
   whitelist: string[];
}

type ChangesValues = {
   [Property in keyof StorageValues]?: {
      newValue: StorageValues[Property];
      oldValue: StorageValues[Property];
   };
};

const getOpacityStyle = (shouldApplyDimmer: boolean, dimmerOpacity: number) =>
   shouldApplyDimmer ? (dimmerOpacity / 100).toString() : '0';

const getShouldApplyDimmer = (
   isDimmerEnabled: boolean,
   dimmerOperatingMode: string,
   blacklist: string[],
   whitelist: string[],
   currentUrl: string,
): boolean => {
   switch (dimmerOperatingMode) {
      case 'blacklist': {
         return isDimmerEnabled && !blacklist.some((url) => currentUrl.includes(url));
      }
      case 'whitelist': {
         return isDimmerEnabled && whitelist.some((url) => currentUrl.includes(url));
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
   let { isDimmerEnabled, dimmerOpacity, dimmerOperatingMode, blacklist, whitelist } =
      await getValuesFromStorage();
   const currentUrl = window.location.href;

   let shouldApplyDimmer: boolean = getShouldApplyDimmer(
      isDimmerEnabled,
      dimmerOperatingMode,
      blacklist,
      whitelist,
      currentUrl,
   );

   const dimmer = createDimmerElement(shouldApplyDimmer, dimmerOpacity);

   document.documentElement.appendChild(dimmer);

   chrome.storage.local.onChanged.addListener((changes: ChangesValues) => {
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

      if (Object.hasOwn(changes, 'whitelist')) {
         whitelist = changes.whitelist.newValue;
      }

      shouldApplyDimmer = getShouldApplyDimmer(
         isDimmerEnabled,
         dimmerOperatingMode,
         blacklist,
         whitelist,
         currentUrl,
      );
      dimmer.style.opacity = getOpacityStyle(shouldApplyDimmer, dimmerOpacity);
   });
})();
