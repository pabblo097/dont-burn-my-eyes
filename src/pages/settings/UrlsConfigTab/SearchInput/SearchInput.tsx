import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
   IconButton,
   Input,
   InputGroup,
   InputLeftElement,
   InputRightElement,
} from '@chakra-ui/react';
import t from '@root/src/shared/helpers/t';

import { SearchInputProps } from './constants';

const SearchInput = ({ value, onChange, onButtonClick }: SearchInputProps) => (
   <InputGroup>
      <InputLeftElement pointerEvents={'none'}>
         <SearchIcon color={'gray.300'} />
      </InputLeftElement>

      <Input
         placeholder={t('searchUrl')}
         value={value}
         onChange={onChange}
      />

      <InputRightElement>
         <IconButton
            aria-label={t('cleanSearchUrlInputAriaLabel')}
            icon={<CloseIcon />}
            size={'xs'}
            variant={'ghost'}
            onClick={onButtonClick}
         />
      </InputRightElement>
   </InputGroup>
);

export default SearchInput;
