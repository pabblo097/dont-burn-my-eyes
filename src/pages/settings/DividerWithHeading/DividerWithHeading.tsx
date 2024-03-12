import { Box, Divider, AbsoluteCenter, Heading } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';

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
            <Heading>{t('settings')}</Heading>
         </AbsoluteCenter>
      </Box>
   );
};

export default DividerWithHeading;
