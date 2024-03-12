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
import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';
import { useState } from 'react';

const IntensitySlider = () => {
   const [showTooltip, setShowTooltip] = useState(false);
   const dimmerOpacity = useStorage(dimmerOpacityStorage);

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
            value={dimmerOpacity}
            step={5}
            onChange={(value) => dimmerOpacityStorage.set(value)}
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
               label={`${dimmerOpacity}%`}
            >
               <SliderThumb />
            </Tooltip>
         </Slider>
      </FormControl>
   );
};

export default IntensitySlider;
