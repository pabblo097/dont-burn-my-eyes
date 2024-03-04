import { useState } from 'react';
import useStorage from '@src/shared/hooks/useStorage';
import dimmerStateStorage from '@root/src/shared/storages/DimmerStateStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import {
   Button,
   VStack,
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   Text,
   Flex,
   Tag,
} from '@chakra-ui/react';
import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';

const Popup = () => {
   const isDimmerEnabled = useStorage(dimmerStateStorage);
   const dimmerOpacity = useStorage(dimmerOpacityStorage);

   const [opacityValue, setOpacityValue] = useState(dimmerOpacity * 100);

   const buttonColor = isDimmerEnabled ? 'teal' : 'red';
   const buttonLabel = isDimmerEnabled ? 'Enabled' : 'Disabled';

   const handleOpacityValueChange = (value: number) => {
      setOpacityValue(value);
      dimmerOpacityStorage.set(Math.round(value) / 100);
   };

   return (
      <VStack
         spacing={'6'}
         bgColor={'gray.800'}
         width={300}
         height={500}
         p={'4'}
      >
         <Button
            colorScheme={buttonColor}
            onClick={dimmerStateStorage.toggle}
            w={'full'}
         >
            {buttonLabel}
         </Button>
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
               <Tag
                  justifyContent={'end'}
                  w={50}
               >{`${Math.round(opacityValue)}%`}</Tag>
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
