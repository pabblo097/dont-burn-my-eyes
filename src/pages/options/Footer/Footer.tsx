import { VStack, Link } from '@chakra-ui/react';
import FooterLinks from '@root/src/shared/components/FooterLinks';

const Footer = () => {
   return (
      <VStack
         w={'full'}
         justify={'center'}
         align={'center'}
         spacing={2}
      >
         <Link
            href={'https://github.com/pabblo097/dont-burn-my-eyes/blob/main/LICENSE'}
            color={'gray.400'}
            isExternal
         >
            &copy; 2024 Paweł Wiewióra
         </Link>

         <FooterLinks />
      </VStack>
   );
};

export default Footer;
