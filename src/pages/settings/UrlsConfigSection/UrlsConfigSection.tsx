import { Text, VStack } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';

import UrlsConfigTab from '../UrlsConfigTab';

const UrlsConfigSection = () => (
   <VStack
      spacing={4}
      w={'full'}
   >
      <Text
         alignSelf={'self-start'}
         fontSize={'md'}
         fontWeight={'medium'}
      >
         {t('urlsConfig')}
      </Text>

      <UrlsConfigTab />
   </VStack>
);

export default UrlsConfigSection;
