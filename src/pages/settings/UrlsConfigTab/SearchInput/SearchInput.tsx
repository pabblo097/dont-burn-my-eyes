import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import {
   InputGroup,
   InputLeftElement,
   Input,
   InputRightElement,
   IconButton,
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';
import { SearchInputProps } from './constants';

const SearchInput = ({ value, onChange, onButtonClick }: SearchInputProps) => {
   return (
      <InputGroup>
         <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
         </InputLeftElement>
         <Input
            value={value}
            onChange={onChange}
            placeholder={t('searchUrl')}
         />
         <InputRightElement>
            <IconButton
               aria-label={t('cleanSearchUrlInputAriaLabel')}
               icon={<CloseIcon />}
               variant={'ghost'}
               size={'xs'}
               onClick={onButtonClick}
            />
         </InputRightElement>
      </InputGroup>
   );
};

export default SearchInput;
