import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { VStack, StackDivider, Center } from '@chakra-ui/react';
import PopupMainSwitch from '@root/src/pages/popup/PopupMainSwitch';
import PopupIntensitySlider from './PopupIntensitySlider';
import AddUrlButton from './AddUrlButton';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import Footer from './Footer';
import Logo from '@root/src/shared/components/Logo';
import intensityStorage from '@root/src/shared/storages/IntensityStorage';
import mainSwitchStorage from '@root/src/shared/storages/MainSwitchStorage';

const Popup = () => {
   const operatingMode = useStorage(dimmerOperatingModeStorage);
   const mainSwitch = useStorage(mainSwitchStorage);
   const intensity = useStorage(intensityStorage);

   return (
      <VStack
         spacing={'3'}
         bgColor={'gray.800'}
         width={320}
         p={'4'}
         divider={<StackDivider />}
      >
         <Logo areRedPathsVisible={!mainSwitch || intensity === 0} />

         <PopupMainSwitch />

         {operatingMode !== 'alwaysOn' && <AddUrlButton />}

         <PopupIntensitySlider />

         <Footer />
      </VStack>
   );
};

export default withErrorBoundary(
   withSuspense(Popup, <div> Loading ... </div>),
   <Center
      bgColor={'gray.800'}
      width={300}
      height={100}
   >
      Error Occurred
   </Center>,
);
