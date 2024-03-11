import {
   VStack,
   Flex,
   Tag,
   TagLabel,
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   Text,
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
            <Text
               fontSize={'md'}
               fontWeight={'medium'}
               color={'white'}
            >
               {t('intensity')}
            </Text>
            <Tag colorScheme={'blue'}>
               <TagLabel>{`${Math.round(dimmerOpacity)}%`}</TagLabel>
            </Tag>
         </Flex>
         <Slider
            aria-label={t('intensity')}
            value={dimmerOpacity}
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
