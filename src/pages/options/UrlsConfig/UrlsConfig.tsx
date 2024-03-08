import { VStack, Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react';
import UrlsConfigTable from '../UrlsConfigTable';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import { useState } from 'react';

const UrlsConfig = () => {
   const operatingMode = useStorage(dimmerOperatingModeStorage);
   const [tabIndex, setTabIndex] = useState(operatingMode === 'whiteList' ? 1 : 0);

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
            {`URL's config`}
         </Text>

         <Tabs
            w={'full'}
            isFitted
            variant="enclosed"
            index={tabIndex}
            onChange={setTabIndex}
         >
            <TabList>
               <Tab>Black list</Tab>
               <Tab>White list</Tab>
            </TabList>
            <TabPanels>
               <TabPanel px={0}>
                  <UrlsConfigTable tableMode="blackList" />
               </TabPanel>
               <TabPanel px={0}>
                  <UrlsConfigTable tableMode="whiteList" />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </VStack>
   );
};

export default UrlsConfig;
