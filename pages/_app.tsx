import type { AppProps } from 'next/app'
import "../assets/styles/style.scss";
import "../assets/fonts/typography.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <html lang="en" />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    {/*<link*/}
    {/*    rel="apple-touch-icon"*/}
    {/*    sizes="180x180"*/}
    {/*    href="/apple-touch-icon.png"*/}
    {/*/>*/}
    {/*<link*/}
    {/*    rel="icon"*/}
    {/*    type="image/png"*/}
    {/*    sizes="32x32"*/}
    {/*    href="/favicon-32x32.png"*/}
    {/*/>*/}
    {/*<link*/}
    {/*    rel="icon"*/}
    {/*    type="image/png"*/}
    {/*    sizes="16x16"*/}
    {/*    href="/favicon-16x16.png"*/}
    {/*/>*/}
    <meta name="description" content="O'Donnell & Associates Inc. Putting Geology to work for you." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
  </Head>;
  return <Component {...pageProps} />
}

export default MyApp
