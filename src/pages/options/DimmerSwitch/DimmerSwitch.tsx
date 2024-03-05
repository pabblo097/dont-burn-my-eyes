import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerStateStorage from '@root/src/shared/storages/DimmerStateStorage';

const DimmerSwitch = () => {
   const isDimmerEnabled = useStorage(dimmerStateStorage);

   return (
      <FormControl
         display="flex"
         alignItems="center"
      >
         <FormLabel
            htmlFor="dimmer-switch"
            mb="0"
         >
            Enable screen dimmer
         </FormLabel>
         <Switch
            id="dimmer-switch"
            isChecked={isDimmerEnabled}
            onChange={dimmerStateStorage.toggle}
         />
      </FormControl>
   );
};

export default DimmerSwitch;
