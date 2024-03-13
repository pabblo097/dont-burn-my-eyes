import { MouseEvent , ChangeEvent } from 'react';

export interface SearchInputProps {
   value: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   onButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
