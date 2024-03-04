import { Button, HStack } from '@chakra-ui/react';
import { ToggleButtonProps } from './constants';
import { useState } from 'react';

const ToggleButton = ({
   defaultValue = false,
   leftLabel,
   rightLabel,
   onChange,
}: ToggleButtonProps) => {
   const [isEnabled, setIsEnabled] = useState(defaultValue);

   const handleChange = (value: boolean) => {
      setIsEnabled(value);
      onChange(value);
   };

   return (
      <HStack
         spacing={'0'}
         w={'full'}
         border={'2px'}
         borderColor={isEnabled ? 'teal.200' : 'red.200'}
         borderRadius={'lg'}
      >
         <Button
            w={'full'}
            colorScheme={isEnabled ? 'gray' : 'red'}
            variant={isEnabled ? 'ghost' : 'solid'}
            borderRightRadius={0}
            onClick={() => handleChange(false)}
         >
            {leftLabel}
         </Button>
         <Button
            w={'full'}
            colorScheme={isEnabled ? 'teal' : 'gray'}
            variant={isEnabled ? 'solid' : 'ghost'}
            borderLeftRadius={0}
            onClick={() => handleChange(true)}
         >
            {rightLabel}
         </Button>
      </HStack>
   );
};

export default ToggleButton;
