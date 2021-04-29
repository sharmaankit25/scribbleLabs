import '../styles/globals.css'
import React from 'react';
import { ThemeProvider } from "styled-components";
import App from 'next/app'
import { createWrapper } from 'next-redux-wrapper'
import {Provider} from 'react-redux';
import store from '@core/shared/store';
import theme from "@core/shared/styles/Theme"
import Header from '../components/layouts/Header'
import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
    </ThemeProvider>
  )

}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
