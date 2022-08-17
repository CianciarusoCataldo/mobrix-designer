import { isInDarkMode } from "mobrix-engine-plugins";
import { Container } from "mobrix-ui";
import { useSelector } from "react-redux";

const FooterContent = () => {
  const dark = useSelector(isInDarkMode);

  return (
    <Container dark={dark}>
      <div className="flex flex-col items-center mt-2">
        <div className="flex flex-row p-2">
          <img
            alt=""
            className="p-1"
            src="https://img.shields.io/github/license/cianciarusocataldo/mobrix-designer?label=License"
            height="25"
          />

          <img
            alt=""
            className="p-1"
            src="https://img.shields.io/npm/v/mobrix-designer?color=orange&label=Latest%20version"
            height="25"
          />
        </div>
      </div>
    </Container>
  );
};

export default FooterContent;
