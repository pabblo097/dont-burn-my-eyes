import { Container, HStack, StackDivider, VStack } from '@chakra-ui/react';
import DividerWithHeading from './DividerWithHeading';
import SettingsMainSwitch from './SettingsMainSwitch';
import OperatingModeSelect from './OperatingModeSelect';
import UrlsConfig from './UrlsConfig';
import SettingsFooter from './SettingsFooter';
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

               <OperatingModeSelect />

               <UrlsConfig />

               <SettingsFooter />
            </VStack>
         </VStack>
      </Container>

      <SettingsDialogs />
   </>
);

export default Settings;
