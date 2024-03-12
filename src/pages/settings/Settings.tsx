import { Container, HStack, StackDivider, VStack } from '@chakra-ui/react';
import DividerWithHeading from './DividerWithHeading';
import SettingsMainSwitch from './SettingsMainSwitch';
import DimmerOperatingModeSelect from './DimmerOperatingModeSelect';
import UrlsConfig from './UrlsConfig';
import Footer from './Footer';
import Logo from '@root/src/shared/components/Logo';
import SettingsIntensitySlider from './SettingsIntensitySlider';
import SettingsDialogs from './SettingsDialogs';

const Settings = () => (
   <>
      <Container
         maxW={'container.md'}
         bg={'gray.800'}
         px={8}
         py={4}
         my={4}
         borderRadius={'lg'}
      >
         <VStack>
            <Logo />

            <DividerWithHeading />

            <VStack
               w={'full'}
               divider={<StackDivider />}
               spacing={4}
            >
               <HStack w={'full'}>
                  <SettingsMainSwitch />
                  <SettingsIntensitySlider />
               </HStack>

               <DimmerOperatingModeSelect />

               <UrlsConfig />

               <Footer />
            </VStack>
         </VStack>
      </Container>

      <SettingsDialogs />
   </>
);

export default Settings;
