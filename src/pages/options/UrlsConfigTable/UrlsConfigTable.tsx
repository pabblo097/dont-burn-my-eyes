import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { UrlsConfigTableProps } from './constants';

const generateDummyData = (quantity: number): number[] => {
   const dummyData: number[] = [];

   for (let i = 0; i < quantity; i++) {
      dummyData.push(Math.random() * 1000000);
   }

   return dummyData;
};

const EverywhereExceptTable = ({ tableMode }: UrlsConfigTableProps) => {
   return (
      <TableContainer
         w={'full'}
         overflowY={'auto'}
         h={'600px'}
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
               {generateDummyData(tableMode === 'onlyOn' ? 100 : 5).map((value) => (
                  <Tr key={value}>
                     <Td>{value}</Td>
                     <Td>millimetres (mm)</Td>
                  </Tr>
               ))}
            </Tbody>
         </Table>
      </TableContainer>
   );
};

export default EverywhereExceptTable;
