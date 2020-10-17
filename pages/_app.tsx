import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { DefaultSeo } from "next-seo";

import seoConfig from "config/seo";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...seoConfig} />
    <Component {...pageProps} />
  </>
);

export default App;
