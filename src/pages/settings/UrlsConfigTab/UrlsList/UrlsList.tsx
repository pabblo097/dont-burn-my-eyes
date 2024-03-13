import { UrlsListProps } from './constants';
import { DeleteIcon } from '@chakra-ui/icons';
import { VStack, StackDivider, Flex, Box, Link, Highlight, IconButton } from '@chakra-ui/react';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';
import t from '@root/src/shared/helpers/t';

const UrlsList = ({ urls, searchValue, tabMode }: UrlsListProps) => (
   <Box
      w={'full'}
      overflowY={'auto'}
      maxH={'500px'}
      py={2}
   >
      <VStack
         divider={<StackDivider />}
         w={'full'}
      >
         {urls.map((url) => (
            <Flex
               key={url}
               justify={'space-between'}
               align={'center'}
               w={'full'}
            >
               <Link
                  href={`http://${url}`}
                  ml={2}
                  isExternal
               >
                  <Highlight
                     query={searchValue}
                     styles={{ bg: 'blue.100' }}
                  >
                     {url}
                  </Highlight>
               </Link>
               <IconButton
                  colorScheme={'red'}
                  variant={'ghost'}
                  aria-label={t('removeUrlAriaLabel')}
                  icon={<DeleteIcon />}
                  size={'sm'}
                  mr={4}
                  onClick={() => getUrlStorage(tabMode).remove(url)}
               />
            </Flex>
         ))}
      </VStack>
   </Box>
);

export default UrlsList;
