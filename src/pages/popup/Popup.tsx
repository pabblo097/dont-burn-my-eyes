// import React from 'react';
// import logo from '@assets/img/logo.svg';
import '@pages/popup/Popup.css';
// import useStorage from '@src/shared/hooks/useStorage';
// import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { Button } from '@chakra-ui/react';

const Popup = () => {
  // const theme = useStorage(exampleThemeStorage);

  return <Button colorScheme="teal">Button</Button>;
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
