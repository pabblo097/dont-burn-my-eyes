import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

const DimmerSwitch = () => {
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
         <Switch id="dimmer-switch" />
      </FormControl>
   );
};

export default DimmerSwitch;
