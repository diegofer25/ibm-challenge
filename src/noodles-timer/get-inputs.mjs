import inputsChecker from './../utils/inputs-checker.mjs';

export default async (io) => {
  return inputsChecker.timerList([
    inputsChecker.isNumber(await io.read('Informe o tempo de preparo em minutos:')),
    inputsChecker.isNumber(await io.read('Informe o tempo da primeira ampulheta em minutos:')),
    inputsChecker.isNumber(await io.read('Informe o tempo da segunda ampulheta: em minutos'))
  ]);
};
