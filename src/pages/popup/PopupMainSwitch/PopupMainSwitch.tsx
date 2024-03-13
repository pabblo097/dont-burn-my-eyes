import { Button, HStack } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import mainSwitchStorage from '@root/src/shared/storages/MainSwitchStorage';

const PopupMainSwitch = () => {
   const mainSwitchValue = useStorage(mainSwitchStorage);

   return (
      <HStack
         border={'2px'}
         borderColor={mainSwitchValue ? 'teal.200' : 'red.200'}
         borderRadius={'lg'}
         spacing={'0'}
         w={'full'}
      >
         <Button
            borderRightRadius={0}
            colorScheme={mainSwitchValue ? 'gray' : 'red'}
            variant={mainSwitchValue ? 'ghost' : 'solid'}
            w={'full'}
            onClick={() => mainSwitchStorage.set(false)}
         >
            {t('off')}
         </Button>

         <Button
            borderLeftRadius={0}
            colorScheme={mainSwitchValue ? 'teal' : 'gray'}
            variant={mainSwitchValue ? 'solid' : 'ghost'}
            w={'full'}
            onClick={() => mainSwitchStorage.set(true)}
         >
            {t('on')}
         </Button>
      </HStack>
   );
};

export default PopupMainSwitch;
