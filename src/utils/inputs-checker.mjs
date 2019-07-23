export default {
  isNumber: (text) => {
    const number = Number(text);
    if (text && !Number.isNaN(number)) {
      return number;
    }
    throw 'O input informado não é um número.';
  },

  timerList: (inputs) => {
    if (inputs[1] === inputs[2]) throw 'As ampulhetas devem ser diferentes.';

    return inputs.map((input, index, list) => {
      const [ prepareTime ] = list;
      if (prepareTime <= input) {
        return input;
      }
      throw 'O tempo de preparo deve ser menor que das ampulhetas.';
    });
  }
};
