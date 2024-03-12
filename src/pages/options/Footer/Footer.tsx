import { VStack, Text } from '@chakra-ui/react';
import FooterLinks from '@root/src/shared/components/FooterLinks';

const Footer = () => {
   return (
      <VStack
         w={'full'}
         justify={'center'}
         align={'center'}
         spacing={2}
      >
         <Text color={'gray.500'}>Paweł Wiewióra &copy; 2024</Text>

         <FooterLinks />
      </VStack>
   );
};

export default Footer;
