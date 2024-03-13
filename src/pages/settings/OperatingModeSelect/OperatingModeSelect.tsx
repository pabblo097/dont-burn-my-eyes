import {
   Alert,
   AlertIcon,
   FormControl,
   FormLabel,
   Highlight,
   Select,
   Text,
   VStack,
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import operatingModeStorage, { isOperatingMode } from '@root/src/shared/storages/OperatingModeStorage';
import { ChangeEvent } from 'react';

import { infoMessagesWithHighlight } from './constants';

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
         spacing={4}
         w={'full'}
      >
         <FormControl
            alignItems={'center'}
            display={'flex'}
         >
            <FormLabel
               flexShrink={0}
               htmlFor={'dimmer-operating-mode'}
               mb={'0'}
            >
               {t('operatingMode')}
            </FormLabel>

            <Select
               id={'dimmer-operating-mode'}
               onChange={handleSelectChange}
            >
               <option
                  selected={dimmerOperatingMode === 'blacklist'}
                  value={'blacklist'}
               >
                  {t('blacklist')}
               </option>

               <option
                  selected={dimmerOperatingMode === 'whitelist'}
                  value={'whitelist'}
               >
                  {t('whitelist')}
               </option>

               <option
                  selected={dimmerOperatingMode === 'alwaysOn'}
                  value={'alwaysOn'}
               >
                  {t('alwaysOn')}
               </option>
            </Select>
         </FormControl>

         <Alert
            borderRadius={'md'}
            status={'info'}
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
