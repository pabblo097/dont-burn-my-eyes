import {
   FormControl,
   FormLabel,
   RadioGroup,
   HStack,
   Radio,
   Alert,
   AlertIcon,
} from '@chakra-ui/react';

const DimmerWorkingModeRadio = () => {
   return (
      <FormControl as="fieldset">
         <FormLabel as="legend">Mode</FormLabel>
         <RadioGroup defaultValue="Everywhere except">
            <HStack spacing="24px">
               <Radio value="Everywhere except">Everywhere except</Radio>
               <Radio value="Only on">Only on</Radio>
            </HStack>
         </RadioGroup>
         <Alert
            status="info"
            mt={3}
         >
            <AlertIcon />
            Chakra is going live on August 30th. Get ready!
         </Alert>
      </FormControl>
   );
};

export default DimmerWorkingModeRadio;
