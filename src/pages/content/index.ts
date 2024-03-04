(async () => {
   const storage = await chrome.storage.local.get(['isDimmerEnabled', 'dimmerOpacity']);

   let isDimmerEnabled = storage.isDimmerEnabled;
   let dimmerOpacity = storage.dimmerOpacity;

   const dimmer = document.createElement('div');
   dimmer.id = 'screen-dimmer';
   dimmer.ariaHidden = 'true';
   dimmer.style.opacity = isDimmerEnabled ? dimmerOpacity : '0';
   dimmer.style.display = 'block';
   dimmer.style.zIndex = '2147483647';
   dimmer.style.margin = '0';
   dimmer.style.borderRadius = '0';
   dimmer.style.padding = '0';
   dimmer.style.background = 'rgb(70, 70, 70)';
   dimmer.style.pointerEvents = 'none';
   dimmer.style.position = 'fixed';
   dimmer.style.top = '-10%';
   dimmer.style.right = '-10%';
   dimmer.style.width = '120%';
   dimmer.style.height = '120%';
   dimmer.style.mixBlendMode = 'multiply';
   dimmer.style.transition = '.2s';

   const html = document.documentElement;
   html.appendChild(dimmer);

   chrome.storage.local.onChanged.addListener((changes) => {
      if (Object.hasOwn(changes, 'isDimmerEnabled')) {
         isDimmerEnabled = changes.isDimmerEnabled.newValue;
      }

      if (Object.hasOwn(changes, 'dimmerOpacity')) {
         dimmerOpacity = changes.dimmerOpacity.newValue;
      }

      dimmer.style.opacity = isDimmerEnabled ? dimmerOpacity : '0';
   });
})();
