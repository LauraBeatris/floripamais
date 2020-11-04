import Head from "next/head";

import Button from "components/Button";
import { ButtonVariant } from "components/Button/types";

const App: React.FC = () => (
  <>
    <Head>
      <title>Floripa+ | Torne a ilha em um lugar melhor</title>
    </Head>
    <main id="page-wrapper" className="flex flex-col h-screen w-screen justify-center items-center bg-background-light">
      <Button variant={ButtonVariant.Primary} className="mb-10">Primary</Button>

      <Button variant={ButtonVariant.Secondary}>Secondary</Button>
    </main>
  </>
);

export default App;
