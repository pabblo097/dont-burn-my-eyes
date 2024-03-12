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
import operatingModeStorage, {
   isOperatingMode,
} from '@root/src/shared/storages/OperatingModeStorage';
import { ChangeEvent } from 'react';
import { infoMessagesWithHighlight } from './constants';
import t from '@root/src/shared/helpers/t';

const OperatingModeSelect = () => {
   const dimmerOperatingMode = useStorage(operatingModeStorage);

   const { message, highlight } = infoMessagesWithHighlight[dimmerOperatingMode];

   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      if (!isOperatingMode(event.target.value)) {
         return;
      }

      operatingModeStorage.set(event.target.value);
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
               htmlFor="dimmer-operating-mode"
               mb="0"
               flexShrink={0}
            >
               {t('operatingMode')}
            </FormLabel>

            <Select
               id={'dimmer-operating-mode'}
               onChange={handleSelectChange}
            >
               <option
                  value="blacklist"
                  selected={dimmerOperatingMode === 'blacklist'}
               >
                  {t('blacklist')}
               </option>
               <option
                  value="whitelist"
                  selected={dimmerOperatingMode === 'whitelist'}
               >
                  {t('whitelist')}
               </option>
               <option
                  value="alwaysOn"
                  selected={dimmerOperatingMode === 'alwaysOn'}
               >
                  {t('alwaysOn')}
               </option>
            </Select>
         </FormControl>

         <Alert
            status="info"
            borderRadius={'md'}
         >
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

export default OperatingModeSelect;