import { useState } from 'react';
import useStorage from '@src/shared/hooks/useStorage';
import dimmerStateStorage from '@root/src/shared/storages/DimmerStateStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import {
   VStack,
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   Text,
   Flex,
   Tag,
   StackDivider,
   TagLabel,
} from '@chakra-ui/react';
import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';
import ToggleButton from '@root/src/shared/components/ToggleButton';

const Popup = () => {
   const isDimmerEnabled = useStorage(dimmerStateStorage);
   const dimmerOpacity = useStorage(dimmerOpacityStorage);

   const [opacityValue, setOpacityValue] = useState(dimmerOpacity * 100);

   const handleOpacityValueChange = (value: number) => {
      setOpacityValue(value);
      dimmerOpacityStorage.set(Math.round(value) / 100);
   };

   return (
      <VStack
         spacing={'4'}
         bgColor={'gray.800'}
         width={300}
         height={500}
         p={'4'}
         divider={<StackDivider />}
      >
         <ToggleButton
            defaultValue={isDimmerEnabled}
            onChange={(value) => dimmerStateStorage.set(value)}
            leftLabel="Off"
            rightLabel="On"
         />

         <VStack w={'full'}>
            <Flex
               w={'full'}
               justify={'space-between'}
            >
               <Text
                  fontSize={'lg'}
                  color={'white'}
               >
                  Opacity
               </Text>
               <Tag colorScheme={'blue'}>
                  <TagLabel>{`${Math.round(opacityValue)}%`}</TagLabel>
               </Tag>
            </Flex>
            <Slider
               aria-label="opacity-slider"
               defaultValue={opacityValue}
               onChange={handleOpacityValueChange}
            >
               <SliderTrack>
                  <SliderFilledTrack />
               </SliderTrack>
               <SliderThumb />
            </Slider>
         </VStack>
      </VStack>
   );
};

export default withErrorBoundary(
   withSuspense(Popup, <div> Loading ... </div>),
   <div> Error Occur </div>,
);
