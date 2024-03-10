import { Container, HStack, StackDivider, VStack } from '@chakra-ui/react';
import DividerWithHeading from './DividerWithHeading';
import DimmerSwitch from './DimmerSwitch';
import DimmerOperatingModeSelect from './DimmerOperatingModeSelect';
import UrlsConfig from './UrlsConfig';
import Footer from './Footer';
import DimmerOpacitySlider from '../popup/DimmerOpacitySlider';
import Logo from '@root/src/shared/components/Logo';
import useStorage from '@root/src/shared/hooks/useStorage';
import dimmerStateStorage from '@root/src/shared/storages/DimmerStateStorage';
import dimmerOpacityStorage from '@root/src/shared/storages/DimmerOpacityStorage';

const Options = () => {
   const isDimmerEnabled = useStorage(dimmerStateStorage);
   const dimmerOpacity = useStorage(dimmerOpacityStorage);

   return (
      <Container
         maxW={'container.md'}
         bg={'gray.800'}
         px={8}
         py={4}
         my={4}
         borderRadius={'lg'}
      >
         <VStack>
            <Logo areRedPathsVisible={!isDimmerEnabled || dimmerOpacity === 0} />

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
