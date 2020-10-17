import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import "styles/main.css";

import seoConfig from "config/seo";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <DefaultSeo {...seoConfig} />
    <Component {...pageProps} />
  </>
);

export default App;
