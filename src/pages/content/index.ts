interface StorageValues {
   mainSwitch: boolean;
   intensity: number;
   urlsList: string[];
}

type ChangesValues = {
   [Property in keyof StorageValues]?: {
      newValue: StorageValues[Property];
      oldValue: StorageValues[Property];
   };
};

const getOpacityStyle = (shouldApplyDimmer: boolean, intensity: number) =>
   shouldApplyDimmer ? (intensity / 100).toString() : '0';

const getShouldApplyDimmer = (
   mainSwitch: boolean,
   urlsList: string[],
   currentUrl: string,
): boolean => mainSwitch && !urlsList.some((url) => currentUrl.includes(url));

const createDimmerElement = (shouldApplyDimmer: boolean, intensity: number) => {
   const dimmer = document.createElement('div');
   dimmer.id = 'screen-dimmer';
   dimmer.ariaHidden = 'true';
   dimmer.setAttribute(
      'style',
      `opacity: ${getOpacityStyle(shouldApplyDimmer, intensity)}; display: block; z-index: 2147483647; margin: 0; border-radius: 0; padding: 0; background: rgb(40, 40, 40); pointer-events: none; position: fixed; top: -10%; right: -10%; width: 120%; height: 120%; mix-blend-mode: multiply; transition: .2s`,
   );

   return dimmer;
};

const getValuesFromStorage = async (): Promise<StorageValues> =>
   (await chrome.storage.local.get()) as StorageValues;

(async () => {
   let { mainSwitch, intensity, urlsList } = await getValuesFromStorage();
   const currentUrl = window.location.href;

   let shouldApplyDimmer: boolean = getShouldApplyDimmer(mainSwitch, urlsList, currentUrl);

   const dimmer = createDimmerElement(shouldApplyDimmer, intensity);

   document.documentElement.appendChild(dimmer);

   chrome.storage.local.onChanged.addListener((changes: ChangesValues) => {
      if (Object.hasOwn(changes, 'mainSwitch')) {
         mainSwitch = changes.mainSwitch.newValue;
      }

      if (Object.hasOwn(changes, 'intensity')) {
         intensity = changes.intensity.newValue;
      }

      if (Object.hasOwn(changes, 'urlsList')) {
         urlsList = changes.urlsList.newValue;
      }

      shouldApplyDimmer = getShouldApplyDimmer(
         mainSwitch,

         urlsList,
         currentUrl,
      );

      dimmer.style.opacity = getOpacityStyle(shouldApplyDimmer, intensity);
   });
})();
