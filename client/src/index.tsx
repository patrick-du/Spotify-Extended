import * as React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { ColorModeScript } from '@chakra-ui/react';
import App from './App';
import store from './store/store';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
