import {
   Flex,
   FormLabel,
   Slider,
   SliderFilledTrack,
   SliderThumb,
   SliderTrack,
   Tag,
   TagLabel,
   VStack,
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import intensityStorage from '@root/src/shared/storages/IntensityStorage';

const PopupIntensitySlider = () => {
   const intensity = useStorage(intensityStorage);

   return (
      <VStack
         bg={'gray.700'}
         borderRadius={'md'}
         px={3}
         py={2}
         w={'full'}
      >
         <Flex
            justify={'space-between'}
            w={'full'}
         >
            <FormLabel
               htmlFor={'popup-menu-intensity-slider'}
               mb={'0'}
            >
               {t('intensity')}
            </FormLabel>

            <Tag colorScheme={'blue'}>
               <TagLabel>{`${Math.round(intensity)}%`}</TagLabel>
            </Tag>
         </Flex>

         <Slider
            aria-label={t('intensity')}
            id={'popup-menu-intensity-slider'}
            step={5}
            value={intensity}
            onChange={(value) => intensityStorage.set(value)}
         >
            <SliderTrack>
               <SliderFilledTrack />
            </SliderTrack>

            <SliderThumb />
         </Slider>
      </VStack>
   );
};

export default PopupIntensitySlider;
