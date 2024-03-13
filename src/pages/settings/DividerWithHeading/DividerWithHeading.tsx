import {
   AbsoluteCenter,
   Box,
   Divider,
   Heading
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';

const DividerWithHeading = () => (
   <Box
      position={'relative'}
      py={8}
      w={'full'}
   >
      <Divider border={'1px'} />

      <AbsoluteCenter
         bgColor={'gray.800'}
         px={'4'}
      >
         <Heading>{t('settings')}</Heading>
      </AbsoluteCenter>
   </Box>
);

export default DividerWithHeading;
