import Logo from "./icons/commons/logo.png";

import Docs from "./icons/commons/docs.svg";

import DarkMode from "./icons/commons/dark-mode.svg";
import LightMode from "./icons/commons/light-mode.svg";

import IT_FLAG from "./icons/langs/it.svg";
import FR_FLAG from "./icons/langs/fr.svg";
import EN_FLAG from "./icons/langs/en.svg";
import DE_FLAG from "./icons/langs/de.svg";
import ES_FLAG from "./icons/langs/es.svg";

export const DocsIcon = <img alt="" src={Docs} width={30} height={30} />;

export const LogoIcon = <img alt="" src={Logo} width={60} height={60} />;

export const Arrow = ({ className = "" }: { className: string }) => (
  <div className={"w-4 h-4 xsm:w-4 xsm:h-4 " + className}>
    <svg className="" viewBox="0 0 11 18" id="arrow">
      <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
      <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
    </svg>
  </div>
);

const burgerRaw = (
  <path d="M4 10h24c1.104 0 2-.896 2-2s-.896-2-2-2H4c-1.104 0-2 .896-2 2s.896 2 2 2zm24 4H4c-1.104 0-2 .896-2 2s.896 2 2 2h24c1.104 0 2-.896 2-2s-.896-2-2-2zm0 8H4c-1.104 0-2 .896-2 2s.896 2 2 2h24c1.104 0 2-.896 2-2s-.896-2-2-2z" />
);

export const BurgerIconCompact = (
  <svg
    className="fill-[white] active:fill-[orange] hover:fill-[orange]"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
  >
    {burgerRaw}
  </svg>
);

export const BurgerIcon = (
  <svg
    className="fill-[white] active:fill-[#5f5f5f] hover:fill-[orange]"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
  >
    {burgerRaw}
  </svg>
);

export const DarkModeIcon = <img alt="" src={DarkMode} width={30} />;

export const LightModeIcon = <img alt="" src={LightMode} width={30} />;

export const LANGUAGES_ICONS: Record<string, JSX.Element> = {
  it: <img alt="" width={20} height={20} src={IT_FLAG} />,
  de: <img alt="" width={20} height={20} src={DE_FLAG} />,
  fr: <img alt="" width={20} height={20} src={FR_FLAG} />,
  es: <img alt="" width={20} height={20} src={ES_FLAG} />,
  en: <img alt="" width={20} height={20} src={EN_FLAG} />,
};
