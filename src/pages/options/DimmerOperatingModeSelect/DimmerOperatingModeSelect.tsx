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
import { infoMessagesWithHighlight } from './constants';

const DimmerOperatingModeSelect = () => {
   const dimmerOperatingMode = useStorage(dimmerOperatingModeStorage);

   const { message, highlight } = infoMessagesWithHighlight[dimmerOperatingMode];

   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      if (!isDimmerOperatingMode(event.target.value)) {
         return;
      }

      dimmerOperatingModeStorage.set(event.target.value);
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
                  value="blackList"
                  selected={dimmerOperatingMode === 'blackList'}
               >
                  Black list
               </option>
               <option
                  value="whiteList"
                  selected={dimmerOperatingMode === 'whiteList'}
               >
                  White list
               </option>
               <option
                  value="alwaysOn"
                  selected={dimmerOperatingMode === 'alwaysOn'}
               >
                  Always on
               </option>
            </Select>
         </FormControl>

         <Alert status="info">
            <AlertIcon />

            <Text>
               <Highlight
                  query={highlight}
                  styles={{ fontWeight: 'bold', color: 'blue.100' }}
               >
                  {message}
               </Highlight>
            </Text>
         </Alert>
      </VStack>
   );
};

export default DimmerOperatingModeSelect;
