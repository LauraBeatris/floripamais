import React from "react";

import Content from "./Content";
import { footerSocialMedias, orgEmail } from "./constants";

const Footer: React.FC = () => (
  // TODO -> Fetch data from CMS and set the default value as the constants
  <Content
    footerSocialMediasTitle="Conecte-se"
    footerContactTitle="Contato"
    socialMedias={footerSocialMedias}
    email={orgEmail}
  />
);

export default Footer;
