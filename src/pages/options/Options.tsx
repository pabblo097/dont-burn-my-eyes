import { Container, HStack, StackDivider, VStack } from '@chakra-ui/react';
import Logo from './Logo';
import DividerWithHeading from './DividerWithHeading';
import DimmerSwitch from './DimmerSwitch';
import DimmerOperatingModeSelect from './DimmerOperatingModeSelect';
import UrlsConfig from './UrlsConfig';
import Footer from './Footer';
import DimmerOpacitySlider from '../popup/DimmerOpacitySlider';

const Options = () => {
   return (
      <Container
         maxW={'container.md'}
         border={'2px'}
         borderColor={'gray.600'}
         p={8}
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
                  <DimmerSwitch />
                  <DimmerOpacitySlider />
               </HStack>

               <DimmerOperatingModeSelect />

               <UrlsConfig />

               <Footer />
            </VStack>
         </VStack>
      </Container>
   );
};

export default Options;
