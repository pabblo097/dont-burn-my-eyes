import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { VStack, StackDivider, Center } from '@chakra-ui/react';
import ToggleButton from '@root/src/pages/popup/ToggleButton';
import DimmerOpacitySlider from './DimmerOpacitySlider';
import AddUrlButton from './AddUrlButton';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerOperatingModeStorage from '@root/src/shared/storages/DimmerOperatingModeStorage';
import Footer from './Footer';
import Logo from '@root/src/shared/components/Logo';
import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';
import dimmerStateStorage from '@root/src/shared/storages/DimmerStateStorage';

const Popup = () => {
   const operatingMode = useStorage(dimmerOperatingModeStorage);
   const isDimmerEnabled = useStorage(dimmerStateStorage);
   const dimmerOpacity = useStorage(dimmerOpacityStorage);

   return (
      <VStack
         spacing={'3'}
         bgColor={'gray.800'}
         width={320}
         p={'4'}
         divider={<StackDivider />}
      >
         <Logo areRedPathsVisible={!isDimmerEnabled || dimmerOpacity === 0} />

         <ToggleButton />

         {operatingMode !== 'alwaysOn' && <AddUrlButton />}

         <DimmerOpacitySlider />

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
