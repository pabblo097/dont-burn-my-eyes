import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { VStack, StackDivider, Center } from '@chakra-ui/react';
import PopupMainSwitch from '@root/src/pages/popup/PopupMainSwitch';
import PopupIntensitySlider from './PopupIntensitySlider';
import AddUrlButton from './AddUrlButton';
import useStorage from '@root/src/shared/hooks/useStorage';
import operatingModeStorage from '@root/src/shared/storages/OperatingModeStorage';
import PopupFooter from './PopupFooter';
import Logo from '@root/src/shared/components/Logo';

const Popup = () => {
   const operatingMode = useStorage(operatingModeStorage);

   return (
      <VStack
         spacing={'3'}
         bgColor={'gray.800'}
         width={320}
         p={'4'}
         divider={<StackDivider />}
      >
         <Logo />

         <PopupMainSwitch />

         {operatingMode !== 'alwaysOn' && <AddUrlButton />}

         <PopupIntensitySlider />

         <PopupFooter />
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
