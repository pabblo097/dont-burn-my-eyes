import {
   Container,
   HStack,
   StackDivider,
   VStack
} from '@chakra-ui/react';
import Logo from '@root/src/shared/components/Logo';

import Dialogs from './Dialogs';
import DividerWithHeading from './DividerWithHeading';
import OperatingModeSelect from './OperatingModeSelect';
import SettingsFooter from './SettingsFooter';
import SettingsIntensitySlider from './SettingsIntensitySlider';
import SettingsMainSwitch from './SettingsMainSwitch';
import UrlsConfigSection from './UrlsConfigSection';

const Settings = () => (
   <>
      <Container
         bg={'gray.800'}
         borderRadius={'lg'}
         maxW={'container.md'}
         my={4}
         px={8}
         py={4}
      >
         <VStack>
            <Logo />

            <DividerWithHeading />

            <VStack
               divider={<StackDivider />}
               spacing={4}
               w={'full'}
            >
               <HStack w={'full'}>
                  <SettingsMainSwitch />

                  <SettingsIntensitySlider />
               </HStack>

               <OperatingModeSelect />

               <UrlsConfigSection />

               <SettingsFooter />
            </VStack>
         </VStack>
      </Container>

      <Dialogs />
   </>
);

export default Settings;
