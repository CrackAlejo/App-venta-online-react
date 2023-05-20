import { Html, Head, Main, NextScript } from 'next/document';

import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main>
          <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
          <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
        </Main>
        <NextScript />
      </body>
    </Html>
  );
}