/**
 * NOTA DE ESCLARECIMENTO.
 *
 * Compreendo que a utilização do ES6 modules do NodeJS ainda está em fase de testes
 * e sua utilização não é recomendada em produção, porém como não trata-se de um projeto
 * para produção, tomei a liberdade de experimentar pela primeira vez o módulo ES6 nativo
 * do NodeJS.
 */
import App from './src/app/index.mjs';

(async ({ version }, App) => {

  const nodeVersion = parseInt(version.substr(1,3));

  if (nodeVersion >= 12) {

    try {

      console.log(await App());

    } catch (error) {
      if (typeof error === 'string') {
        console.error(`ERRO: ${error}`);
      } else {
        console.log(error);
      }
    }

  } else {
    console.error('Por favor use uma versão 12 ou superior do NodeJS, https://nodejs.org/en/download/');
  }

  console.log('Fim do programa');
})(process, App);
