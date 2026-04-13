import { Center, StackDivider, VStack } from '@chakra-ui/react';
import PopupMainSwitch from '@root/src/pages/popup/PopupMainSwitch';
import Logo from '@root/src/shared/components/Logo';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import withSuspense from '@src/shared/hoc/withSuspense';

import AddUrlSection from './AddUrlSection';
import PopupFooter from './PopupFooter';
import PopupIntensitySlider from './PopupIntensitySlider';

const Popup = () => (
   <VStack
      bgColor={'gray.800'}
      divider={<StackDivider />}
      p={'4'}
      spacing={'3'}
      width={340}
   >
      <Logo />

      <PopupMainSwitch />

      <AddUrlSection />

      <PopupIntensitySlider />

      <PopupFooter />
   </VStack>
);

export default withErrorBoundary(
   withSuspense(Popup, <div>{' Loading ... '}</div>),
   <Center
      bgColor={'gray.800'}
      height={100}
      width={400}
   >
      {'Error Occurred'}
   </Center>,
);
