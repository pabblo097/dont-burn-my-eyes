import { VStack, Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react';
import UrlsConfigTable from '../UrlsConfigTable';

const UrlsConfig = () => {
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
         >
            <TabList>
               <Tab>Everywhere except</Tab>
               <Tab>Only on</Tab>
            </TabList>
            <TabPanels>
               <TabPanel>
                  <UrlsConfigTable tableMode="everywhereExcept" />
               </TabPanel>
               <TabPanel>
                  <UrlsConfigTable tableMode="onlyOn" />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </VStack>
   );
};

export default UrlsConfig;
