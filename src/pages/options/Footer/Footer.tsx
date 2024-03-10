import { VStack, HStack, Icon, Text } from '@chakra-ui/react';
import IconButtonLink from '@root/src/shared/components/IconButtonLink';
import t from '@root/src/shared/helpers/t';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaDonate } from 'react-icons/fa';

const Footer = () => {
   return (
      <VStack
         w={'full'}
         justify={'center'}
         align={'center'}
         spacing={2}
      >
         <Text color={'gray.500'}>Paweł Wiewióra &copy; 2024</Text>
         <HStack align={'center'}>
            <IconButtonLink
               isExternal
               href={'https://github.com/pabblo097'}
               tooltipLabel={'GitHub'}
               icon={
                  <Icon
                     as={BsGithub}
                     boxSize={'24px'}
                  />
               }
            />
            <IconButtonLink
               isExternal
               href={'https://www.linkedin.com/in/pawel--wiewiora/'}
               tooltipLabel={'LinkedIn'}
               icon={
                  <Icon
                     as={BsLinkedin}
                     boxSize={'24px'}
                  />
               }
            />
            <IconButtonLink
               isExternal
               href={'https://paypal.me/pabblo097'}
               tooltipLabel={t('donate')}
               icon={
                  <Icon
                     as={FaDonate}
                     boxSize={'24px'}
                  />
               }
            />
         </HStack>
      </VStack>
   );
};

export default Footer;
