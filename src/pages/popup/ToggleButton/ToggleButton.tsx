import { Button, HStack } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerStateStorage from '@root/src/shared/storages/DimmerStateStorage';

const ToggleButton = () => {
   const isDimmerEnabled = useStorage(dimmerStateStorage);

   return (
      <HStack
         spacing={'0'}
         w={'full'}
         border={'2px'}
         borderColor={isDimmerEnabled ? 'teal.200' : 'red.200'}
         borderRadius={'lg'}
      >
         <Button
            w={'full'}
            colorScheme={isDimmerEnabled ? 'gray' : 'red'}
            variant={isDimmerEnabled ? 'ghost' : 'solid'}
            borderRightRadius={0}
            onClick={() => dimmerStateStorage.set(false)}
         >
            {t('off')}
         </Button>
         <Button
            w={'full'}
            colorScheme={isDimmerEnabled ? 'teal' : 'gray'}
            variant={isDimmerEnabled ? 'solid' : 'ghost'}
            borderLeftRadius={0}
            onClick={() => dimmerStateStorage.set(true)}
         >
            {t('on')}
         </Button>
      </HStack>
   );
};

export default ToggleButton;
