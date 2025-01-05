import { log } from 'console';
import {getRequestConfig} from 'next-intl/server';
import {getUserLocale} from '../services/locale';

export default getRequestConfig(async () => {
  let allMessages = {};
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale =  await getUserLocale();
  const appMessages = await import(`../messages/${locale}.json`);
  //TODO: Add a fallback for missing translations
  //TODO Add a way to load translations from apicore and spreat the translations to the appMessages
  let messages = appMessages.default;
  const apicoreMessages = {
    "SignInViewPage": {
        "Login": "Iniciar Sesión en Apicore",
        "Logo": "Logo de Apicore",
        "CreateAccount": "Crear cuenta en Apicore",
        
    }
    
  } //TODO fetch translations from apicore;
  allMessages = {
        ...messages,
        SignInViewPage: {
          ...messages.SignInViewPage,
          ...apicoreMessages.SignInViewPage
        },
    };

  log({allMessages});
  return {
    locale,
    messages: allMessages
  };
});