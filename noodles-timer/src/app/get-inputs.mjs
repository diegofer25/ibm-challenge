import check from './inputs-checker.mjs';

export default async (io) => {
  return check.inputs([
    check.input(await io('Informe o tempo de preparo:')),
    check.input(await io('Informe o tempo da primeira ampulheta:')),
    check.input(await io('Informe o tempo da segunda ampulheta:'))
  ]);
};
