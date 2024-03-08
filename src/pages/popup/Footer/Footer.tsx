import { SettingsIcon } from '@chakra-ui/icons';
import { Flex, HStack, IconButton } from '@chakra-ui/react';

const Footer = () => {
   return (
      <Flex
         justify={'space-between'}
         w={'full'}
      >
         <HStack>
            {/* <IconButton
               aria-label={'Open settings'}
               icon={<SettingsIcon />}
            />
            <IconButton
               aria-label={'Open settings'}
               icon={<SettingsIcon />}
            /> */}
         </HStack>

         <IconButton
            variant={'ghost'}
            aria-label={'Open settings'}
            icon={<SettingsIcon />}
            onClick={() => chrome.runtime.openOptionsPage()}
         />
      </Flex>
   );
};

export default Footer;
