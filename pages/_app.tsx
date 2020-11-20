import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import "styles/main.css";
import "styles/fonts.css";

import ContextProviders from "contexts";
import seoConfig from "config/seo";
import Header from "components/Header";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <DefaultSeo {...seoConfig} />
    <ContextProviders>
      <Header />
      <main id="page-wrapper" className="pt-header-mobile md:pt-header-desktop flex flex-col justify-start bg-white-shade">
        <Component {...pageProps} />
      </main>
    </ContextProviders>
  </>
);

export default App;
