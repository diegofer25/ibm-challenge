import getInputs from './get-inputs.mjs';
import getMultiplicatedMinor from './get-multiplicated-minor.mjs';

export default async (io) => {
  const [ prepareTime, hourglassOne, hourglassTwo ] = await getInputs(io);

  const minorHourglass = hourglassOne < hourglassTwo ? hourglassOne : hourglassTwo;
  const majorHourglass = hourglassOne > hourglassTwo ? hourglassOne : hourglassTwo;

  const multiplicatedMinor = getMultiplicatedMinor(minorHourglass, majorHourglass);

  if ((multiplicatedMinor - majorHourglass) === prepareTime) {
    return io.write(`O tempo mínimo de preparo do miojo é de ${multiplicatedMinor} minutos`);
  }
  throw 'Não é possível cozinhar o Miojo no tempo exato';
};
