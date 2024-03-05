import { Container, StackDivider, VStack } from '@chakra-ui/react';
import Logo from './Logo';
import DividerWithHeading from './DividerWithHeading';
import DimmerSwitch from './DimmerSwitch';
import DimmerWorkingModeRadio from './DimmerWorkingModeRadio';
import UrlsConfig from './UrlsConfig';
import Footer from './Footer';

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
               <DimmerSwitch />

               <DimmerWorkingModeRadio />

               <UrlsConfig />

               <Footer />
            </VStack>
         </VStack>
      </Container>
   );
};

export default Options;
