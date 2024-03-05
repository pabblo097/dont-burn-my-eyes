import {
   Alert,
   AlertIcon,
   FormControl,
   FormLabel,
   Highlight,
   Select,
   VStack,
   Text,
} from '@chakra-ui/react';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerOperatingModeStorage, {
   isDimmerOperatingMode,
} from '@root/src/shared/storages/DimmerOperatingModeStorage';
import { ChangeEvent } from 'react';

const DimmerOperatingModeSelect = () => {
   const dimmerOperatingMode = useStorage(dimmerOperatingModeStorage);

   const infoMessage =
      dimmerOperatingMode === 'everywhereExcept'
         ? `Screen dimmer is going to be applied everywhere except of URL's specified in URL's config / Everywhere except section bellow.`
         : `Screen dimmer is going to be applied only on URL's specified in URL's config / Only on section bellow.`;

   const infoMessageHighlights =
      dimmerOperatingMode === 'everywhereExcept'
         ? ['everywhere except', `URL's config / Everywhere except`]
         : ['only on', `URL's config / Only on`];

   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const operatingMode = event.target.value;

      if (!isDimmerOperatingMode(operatingMode)) {
         return;
      }

      dimmerOperatingModeStorage.set(operatingMode);
   };

   return (
      <VStack
         w={'full'}
         spacing={4}
      >
         <FormControl
            display="flex"
            alignItems="center"
         >
            <FormLabel
               htmlFor="dimmer-switch"
               mb="0"
               flexShrink={0}
            >
               Operating mode
            </FormLabel>
            <Select onChange={handleSelectChange}>
               <option
                  value="everywhereExcept"
                  selected={dimmerOperatingMode === 'everywhereExcept' && true}
               >
                  Everywhere except
               </option>
               <option
                  value="onlyOn"
                  selected={dimmerOperatingMode === 'onlyOn' && true}
               >
                  Only on
               </option>
            </Select>
         </FormControl>
         <Alert status="info">
            <AlertIcon />
            <Text>
               <Highlight
                  query={infoMessageHighlights}
                  styles={{ fontWeight: 'bold', color: 'blue.100' }}
               >
                  {infoMessage}
               </Highlight>
            </Text>
         </Alert>
      </VStack>
   );
};

export default DimmerOperatingModeSelect;
