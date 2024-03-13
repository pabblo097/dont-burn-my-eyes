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
         alignItems={'center'}
         display={'flex'}
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}
      >
         <FormLabel
            htmlFor={'intensity-slider'}
            mb={'0'}
         >
            {t('intensity')}
         </FormLabel>

         <Slider
            aria-label={t('intensity')}
            id={'intensity-slider'}
            step={5}
            value={intensity}
            onChange={(value) => intensityStorage.set(value)}
         >
            <SliderTrack>
               <SliderFilledTrack />
            </SliderTrack>

            <Tooltip
               hasArrow
               bg={'blue.500'}
               color={'white'}
               isOpen={showTooltip}
               label={`${intensity}%`}
               placement={'top'}
            >
               <SliderThumb />
            </Tooltip>
         </Slider>
      </FormControl>
   );
};

export default SettingsIntensitySlider;
