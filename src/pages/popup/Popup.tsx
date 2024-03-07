import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { VStack, StackDivider } from '@chakra-ui/react';
import ToggleButton from '@root/src/pages/popup/ToggleButton';
import DimmerOpacitySlider from './DimmerOpacitySlider';
import AddUrlButton from './AddUrlButton';

const Popup = () => {
   return (
      <VStack
         spacing={'3'}
         bgColor={'gray.800'}
         width={300}
         height={500}
         p={'4'}
         divider={<StackDivider />}
      >
         <ToggleButton />

         <AddUrlButton />

         <DimmerOpacitySlider />
      </VStack>
   );
};

export default withErrorBoundary(
   withSuspense(Popup, <div> Loading ... </div>),
   <div> Error Occur </div>,
);
