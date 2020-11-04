import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import "styles/main.css";

import ContextProviders from "contexts";
import seoConfig from "config/seo";
import Header from "components/Header";
import Footer from "components/Footer";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap" rel="stylesheet" />
    </Head>
    <DefaultSeo {...seoConfig} />
    <ContextProviders>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ContextProviders>
  </>
);

export default App;
