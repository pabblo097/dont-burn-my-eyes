import { Box, Divider, AbsoluteCenter, Heading } from '@chakra-ui/react';

const DividerWithHeading = () => {
   return (
      <Box
         position="relative"
         w={'full'}
         py={8}
      >
         <Divider border={'1px'} />
         <AbsoluteCenter
            px="4"
            bgColor={'gray.800'}
         >
            <Heading>Settings</Heading>
         </AbsoluteCenter>
      </Box>
   );
};

export default DividerWithHeading;
