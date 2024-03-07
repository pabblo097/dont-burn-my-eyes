import {
   TableContainer,
   Table,
   Thead,
   Tr,
   Th,
   Tbody,
   Td,
   Center,
   Heading,
   Box,
   Link,
} from '@chakra-ui/react';
import { UrlsConfigTableProps } from './constants';
import useStorage from '@root/src/shared/hooks/useStorage';
import getUrlStorage from '@root/src/shared/helpers/getUrlsStorage';

const UrlsConfigTable = ({ tableMode }: UrlsConfigTableProps) => {
   const urls = useStorage(getUrlStorage(tableMode));

   if (urls.length === 0) {
      return (
         <Box
            w={'full'}
            h={'600px'}
         >
            <Center p={8}>
               <Heading>{'No data :('}</Heading>
            </Center>
         </Box>
      );
   }

   return (
      <TableContainer
         w={'full'}
         overflowY={'auto'}
         h={'600px'}
         mt={2}
      >
         <Table variant="simple">
            <Thead
               position={'sticky'}
               top={0}
               bgColor={'gray.800'}
            >
               <Tr>
                  <Th w={'full'}>URL</Th>
                  <Th>Actions</Th>
               </Tr>
            </Thead>
            <Tbody>
               {urls.map((url) => (
                  <Tr key={url}>
                     <Td>
                        <Link
                           href={`http://${url}`}
                           isExternal
                        >
                           {url}
                        </Link>
                     </Td>
                     <Td>millimetres (mm)</Td>
                  </Tr>
               ))}
            </Tbody>
         </Table>
      </TableContainer>
   );
};

export default UrlsConfigTable;
