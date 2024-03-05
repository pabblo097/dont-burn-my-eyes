import {
   AbsoluteCenter,
   Box,
   Container,
   Divider,
   FormControl,
   FormLabel,
   HStack,
   Heading,
   Radio,
   RadioGroup,
   StackDivider,
   Switch,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   VStack,
   Text,
   AlertIcon,
   Alert,
   Center,
} from '@chakra-ui/react';
import UrlsConfigTable from './UrlsConfigTable';

const Options = () => {
   return (
      <Container
         maxW={'container.md'}
         border={'2px'}
         borderColor={'gray.600'}
         p={8}
      >
         <VStack>
            <Heading
               size={'4xl'}
               py={8}
            >
               Logo placeholder
            </Heading>

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

            <VStack
               w={'full'}
               divider={<StackDivider />}
               spacing={4}
            >
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
               <Center h={'40px'}>
                  <Text color={'gray.500'}>Created by Paweł Wiewióra</Text>
               </Center>
            </VStack>
         </VStack>
      </Container>
   );
};

export default Options;
