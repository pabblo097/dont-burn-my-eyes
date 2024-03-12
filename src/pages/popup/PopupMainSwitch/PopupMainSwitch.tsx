import { Button, HStack } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import mainSwitchStorage from '@root/src/shared/storages/MainSwitchStorage';

const PopupMainSwitch = () => {
   const mainSwitchValue = useStorage(mainSwitchStorage);

   return (
      <HStack
         spacing={'0'}
         w={'full'}
         border={'2px'}
         borderColor={mainSwitchValue ? 'teal.200' : 'red.200'}
         borderRadius={'lg'}
      >
         <Button
            w={'full'}
            colorScheme={mainSwitchValue ? 'gray' : 'red'}
            variant={mainSwitchValue ? 'ghost' : 'solid'}
            borderRightRadius={0}
            onClick={() => mainSwitchStorage.set(false)}
         >
            {t('off')}
         </Button>
         <Button
            w={'full'}
            colorScheme={mainSwitchValue ? 'teal' : 'gray'}
            variant={mainSwitchValue ? 'solid' : 'ghost'}
            borderLeftRadius={0}
            onClick={() => mainSwitchStorage.set(true)}
         >
            {t('on')}
         </Button>
      </HStack>
   );
};

export default PopupMainSwitch;
