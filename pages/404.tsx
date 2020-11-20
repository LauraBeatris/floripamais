import React from "react";
import Link from "next/link";

const Page404: React.FC = () => (
  <div className="flex h-full items-center justify-center pt-20  h-full-screen-mobile md:h-full-screen-desktop">
    <h1 className="text-3xl w-1/2 text-center">
      Ops... Essa pagina não existe. Clique
      {" "}
      <Link href="/"><span className="text-orange-200 cursor-pointer hover:underline">aqui</span></Link>
      {" "}
      e
      {" "}
      vá para a pagina principal
    </h1>
  </div>
);

export default Page404;
