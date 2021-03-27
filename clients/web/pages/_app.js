import '../styles/globals.css'
import React from 'react';
import App from 'next/app'
import { createWrapper } from 'next-redux-wrapper'
import {Provider} from 'react-redux';
import store from '@core/shared/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )

}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
