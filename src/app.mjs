import noodlesTimer from './noodles-timer/index.mjs';
import findAssassin from './find-assassin/index.mjs';

export default async (io) => {
  let option = null;

  while (option !== 'Sair') {

    const answer = await io.select('Selecione um desafio:', [
      'Desafio do Miojo',
      'Desafio do assassino',
      'Sair'
    ]);

    switch (answer) {
    case 'Desafio do Miojo':
      await noodlesTimer(io); break;
    case 'Desafio do assassino':
      await findAssassin(io); break;
    case 'Sair':
      return;
    }
  }
};
