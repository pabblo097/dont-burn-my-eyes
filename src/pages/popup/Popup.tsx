import { Center, StackDivider, VStack } from '@chakra-ui/react';
import PopupMainSwitch from '@root/src/pages/popup/PopupMainSwitch';
import Logo from '@root/src/shared/components/Logo';
import useStorage from '@root/src/shared/hooks/useStorage';
import operatingModeStorage from '@root/src/shared/storages/OperatingModeStorage';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import withSuspense from '@src/shared/hoc/withSuspense';

import AddUrlSection from './AddUrlSection';
import PopupFooter from './PopupFooter';
import PopupIntensitySlider from './PopupIntensitySlider';

const Popup = () => {
   const operatingMode = useStorage(operatingModeStorage);

   return (
      <VStack
         bgColor={'gray.800'}
         divider={<StackDivider />}
         p={'4'}
         spacing={'3'}
         width={320}
      >
         <Logo />

         <PopupMainSwitch />

         {operatingMode !== 'alwaysOn' && <AddUrlSection />}

         <PopupIntensitySlider />

         <PopupFooter />
      </VStack>
   );
};

export default withErrorBoundary(
   withSuspense(Popup, <div>{' Loading ... '}</div>),
   <Center
      bgColor={'gray.800'}
      height={100}
      width={300}
   >
      {'Error Occurred'}
   </Center>,
);
