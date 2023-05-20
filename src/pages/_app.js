import '../styles/globals.css'

import GlobalContextProvider from '../context/global_context';
import Head from 'next/head'

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
        </GlobalContextProvider>
      </Client>
    </HydrationProvider>
  )
}
