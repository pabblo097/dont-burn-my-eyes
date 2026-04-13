import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Flex, Highlight, IconButton, Link, StackDivider, VStack } from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import urlsStorage from '@root/src/shared/storages/UrlsStorage';

import { UrlsListProps } from './constants';

const UrlsList = ({ urls, searchValue }: UrlsListProps) => (
   <Box
      maxH={'500px'}
      overflowY={'auto'}
      py={2}
      w={'full'}
   >
      <VStack
         divider={<StackDivider />}
         w={'full'}
      >
         {urls.map((url) => (
            <Flex
               key={url}
               align={'center'}
               justify={'space-between'}
               w={'full'}
            >
               <Link
                  isExternal
                  href={`http://${url}`}
                  ml={2}
               >
                  <Highlight
                     query={searchValue}
                     styles={{ bg: 'blue.100' }}
                  >
                     {url}
                  </Highlight>
               </Link>

               <IconButton
                  aria-label={t('removeUrlAriaLabel')}
                  colorScheme={'red'}
                  icon={<DeleteIcon />}
                  mr={4}
                  size={'sm'}
                  variant={'ghost'}
                  onClick={() => urlsStorage.remove(url)}
               />
            </Flex>
         ))}
      </VStack>
   </Box>
);

export default UrlsList;
