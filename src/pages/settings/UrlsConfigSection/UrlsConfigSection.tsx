import {
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   Text,
   VStack
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import useStorage from '@root/src/shared/hooks/useStorage';
import operatingModeStorage from '@root/src/shared/storages/OperatingModeStorage';
import { useState } from 'react';

import UrlsConfigTab from '../UrlsConfigTab';

const UrlsConfigSection = () => {
   const operatingMode = useStorage(operatingModeStorage);
   const [tabIndex, setTabIndex] = useState(operatingMode === 'whitelist' ? 1 : 0);

   return (
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

         <Tabs
            isFitted
            index={tabIndex}
            variant={'enclosed'}
            w={'full'}
            onChange={setTabIndex}
         >
            <TabList>
               <Tab>{t('blacklist')}</Tab>

               <Tab>{t('whitelist')}</Tab>
            </TabList>

            <TabPanels>
               <TabPanel px={0}>
                  <UrlsConfigTab tabMode={'blacklist'} />
               </TabPanel>

               <TabPanel px={0}>
                  <UrlsConfigTab tabMode={'whitelist'} />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </VStack>
   );
};

export default UrlsConfigSection;
