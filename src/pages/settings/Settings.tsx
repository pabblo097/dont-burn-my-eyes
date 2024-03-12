import { Container, HStack, StackDivider, VStack } from '@chakra-ui/react';
import DividerWithHeading from './DividerWithHeading';
import SettingsMainSwitch from './SettingsMainSwitch';
import DimmerOperatingModeSelect from './DimmerOperatingModeSelect';
import UrlsConfig from './UrlsConfig';
import Footer from './Footer';
import Logo from '@root/src/shared/components/Logo';
import useStorage from '@root/src/shared/hooks/useStorage';
import mainSwitchStorage from '@root/src/shared/storages/MainSwitchStorage';
import intensityStorage from '@root/src/shared/storages/IntensityStorage';
import SettingsIntensitySlider from './SettingsIntensitySlider';
import SettingsDialogs from './SettingsDialogs';

const Settings = () => {
   const mainSwitch = useStorage(mainSwitchStorage);
   const intensity = useStorage(intensityStorage);

   return (
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
               <Logo areRedPathsVisible={!mainSwitch || intensity === 0} />

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
};

export default Settings;
