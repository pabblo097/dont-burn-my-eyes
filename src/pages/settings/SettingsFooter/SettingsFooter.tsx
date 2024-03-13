import { Link, VStack } from '@chakra-ui/react';
import FooterLinks from '@root/src/shared/components/FooterLinks';

const SettingsFooter = () => {
   const currentYear = new Date().getFullYear();

   return (
      <VStack
         align={'center'}
         justify={'center'}
         spacing={2}
         w={'full'}
      >
         <Link
            isExternal
            color={'gray.400'}
            href={'https://github.com/pabblo097/dont-burn-my-eyes/blob/main/LICENSE'}
         >
            &copy;{` 2024${currentYear !== 2024 ? `-${currentYear}` : ''} Paweł Wiewióra`}
         </Link>

         <FooterLinks />
      </VStack>
   );
};

export default SettingsFooter;
