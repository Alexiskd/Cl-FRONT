import { useEffect } from 'react';

const GoogleTag = () => {
  useEffect(() => {
    // Crée et injecte le script gtag.js
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-1054227760";
    script.async = true;
    document.head.appendChild(script);

    // Crée et injecte le script d'initialisation
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'AW-1054227760');
    `;
    document.head.appendChild(inlineScript);

    // Optionnel : nettoyage lors du démontage du composant
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return null;
};

export default GoogleTag;
