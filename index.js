/**
 * NOTA DE ESCLARECIMENTO.
 *
 * Compreendo que a utilização do ES6 modules do NodeJS ainda está em fase de testes
 * e sua utilização não é recomendada em produção, porém como não trata-se de um projeto
 * para produção, tomei a liberdade de experimentar pela primeira vez o módulo ES6 nativo
 * do NodeJS.
 */
import { io } from './src/services/index.mjs';
import App from './src/app.mjs';

(async ({ version }, App, io) => {

  const nodeVersion = parseInt(version.substr(1,3));

  if (nodeVersion >= 12) {

    try {

      await App(io);

    } catch (error) {
      if (typeof error === 'string') {
        io.write(`ERRO: ${error}`);
      } else {
        io.write(error);
      }
    }

  } else {
    io.write('Por favor use uma versão 12 ou superior do NodeJS, https://nodejs.org/en/download/');
  }

  io.write('Fim do programa');
})(process, App, io);
