import inputsChecker from './utils/inputs-checker.mjs';
import noodlesTimer from './noodles-timer/index.mjs';
import findAssassin from './find-assassin/index.mjs';

export default async (io) => {
  const optionText = `
    Digite 1 para desafio do Miojo
    Digite 2 para desafio do assassino
    Digite 3 para sair
  `;
  var option = await inputsChecker.isNumber(await io.read(optionText));

  await new Promise(resolve => {
    while (option !== 3) {

      switch (option) {
      case 1:
        return noodlesTimer(io);
      case 2:
        return findAssassin(io);
      default:
        io.write('Opção inválida');
      }
    }
    resolve(true);
  });
};
