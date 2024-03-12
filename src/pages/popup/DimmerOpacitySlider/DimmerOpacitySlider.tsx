import {
   VStack,
   Flex,
   Tag,
   TagLabel,
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   FormLabel,
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';

const DimmerOpacitySlider = () => {
   const dimmerOpacity = useStorage(dimmerOpacityStorage);

   return (
      <VStack
         w={'full'}
         bg={'gray.700'}
         borderRadius={'md'}
         py={2}
         px={3}
      >
         <Flex
            w={'full'}
            justify={'space-between'}
         >
            <FormLabel
               htmlFor="popup-menu-intensity-slider"
               mb="0"
            >
               {t('intensity')}
            </FormLabel>
            <Tag colorScheme={'blue'}>
               <TagLabel>{`${Math.round(dimmerOpacity)}%`}</TagLabel>
            </Tag>
         </Flex>
         <Slider
            id={'popup-menu-intensity-slider'}
            aria-label={t('intensity')}
            value={dimmerOpacity}
            step={5}
            onChange={(value) => dimmerOpacityStorage.set(value)}
         >
            <SliderTrack>
               <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
         </Slider>
      </VStack>
   );
};

export default DimmerOpacitySlider;
