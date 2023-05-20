import '../styles/globals.css'

import GlobalContextProvider from '../context/global_context';
import Head from 'next/head'
import Script from 'next/script';

import { HydrationProvider, Client } from "react-hydration-provider";

export default function App({ Component, pageProps }) {
  return (
    <HydrationProvider>
      <Client>
        <GlobalContextProvider>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Comidas lo mejor</title>
          </Head>
          <Component {...pageProps} />
          <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
          <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
        </GlobalContextProvider>
      </Client>
    </HydrationProvider>
  )
}
