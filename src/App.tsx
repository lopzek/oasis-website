import React from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';
import Doc from './components/doc';
import { translationsData } from './constants/locale';

function App() {
  return (
    <IntlProvider locale={navigator.language} messages={translationsData['cn']}>
      <Doc></Doc>
    </IntlProvider>
  );
}

export default App;
