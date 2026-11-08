import { useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function Recaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (!executeRecaptcha) return;

    const runRecaptcha = async () => {
      await executeRecaptcha("website");
    };

    runRecaptcha();
  }, [executeRecaptcha]);

  return null;
}

export default Recaptcha;
