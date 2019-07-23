import Investigator from './investigator.mjs';
import state from './state.mjs';

export default async (io) => {
  const investigator = new Investigator(state);

  io.write('Quais as informações do crime?');
  const assassin = await io.select('Quem é o assassino(a)?', state.suspects);
  const place = await io.select('Onde ele cometeu o assassinato?', state.places);
  const weapon = await io.select('Com qual arma?', state.weapons);

  const { result, iterations } = await investigator.startInvestigation(assassin, place, weapon);
  io.write(`Resultado encontrado após ${iterations} tentativas`)
  io.writeResult(result);
};
