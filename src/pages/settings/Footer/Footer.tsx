import { VStack, Link } from '@chakra-ui/react';
import FooterLinks from '@root/src/shared/components/FooterLinks';

const Footer = () => {
   const currentYear = new Date().getFullYear();

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
            &copy; 2024{currentYear !== 2024 ? `-${currentYear}` : ''} Paweł Wiewióra
         </Link>

         <FooterLinks />
      </VStack>
   );
};

export default Footer;
