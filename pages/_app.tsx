import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "styles/main.css";
import seoConfig from "config/seo";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...seoConfig} />
    <Component {...pageProps} />
  </>
);

export default App;
