import {
   FormControl,
   FormLabel,
   Slider,
   SliderFilledTrack,
   SliderThumb,
   SliderTrack,
   Tooltip,
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import intensityStorage from '@root/src/shared/storages/IntensityStorage';
import { useState } from 'react';

const SettingsIntensitySlider = () => {
   const [showTooltip, setShowTooltip] = useState(false);
   const intensity = useStorage(intensityStorage);

   return (
      <FormControl
         display="flex"
         alignItems="center"
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}
      >
         <FormLabel
            htmlFor="intensity-slider"
            mb="0"
         >
            {t('intensity')}
         </FormLabel>
         <Slider
            id="intensity-slider"
            aria-label={t('intensity')}
            value={intensity}
            step={5}
            onChange={(value) => intensityStorage.set(value)}
         >
            <SliderTrack>
               <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
               hasArrow
               bg="blue.500"
               color="white"
               placement="top"
               isOpen={showTooltip}
               label={`${intensity}%`}
            >
               <SliderThumb />
            </Tooltip>
         </Slider>
      </FormControl>
   );
};

export default SettingsIntensitySlider;
