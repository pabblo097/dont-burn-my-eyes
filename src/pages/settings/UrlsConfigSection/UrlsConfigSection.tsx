import { VStack, Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react';
import UrlsConfigTab from '../UrlsConfigTab';
import useStorage from '@root/src/shared/hooks/useStorage';
import operatingModeStorage from '@root/src/shared/storages/OperatingModeStorage';
import { useState } from 'react';
import t from '@root/src/shared/helpers/t';

const UrlsConfigSection = () => {
   const operatingMode = useStorage(operatingModeStorage);
   const [tabIndex, setTabIndex] = useState(operatingMode === 'whitelist' ? 1 : 0);

   return (
      <VStack
         w={'full'}
         spacing={4}
      >
         <Text
            fontSize={'md'}
            fontWeight={'medium'}
            alignSelf={'self-start'}
         >
            {t('urlsConfig')}
         </Text>

         <Tabs
            w={'full'}
            isFitted
            variant="enclosed"
            index={tabIndex}
            onChange={setTabIndex}
         >
            <TabList>
               <Tab>{t('blacklist')}</Tab>
               <Tab>{t('whitelist')}</Tab>
            </TabList>
            <TabPanels>
               <TabPanel px={0}>
                  <UrlsConfigTab tabMode="blacklist" />
               </TabPanel>
               <TabPanel px={0}>
                  <UrlsConfigTab tabMode="whitelist" />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </VStack>
   );
};

export default UrlsConfigSection;
