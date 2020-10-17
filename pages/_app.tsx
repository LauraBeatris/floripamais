import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
