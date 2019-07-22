export default {
  input: (text) => {
    const number = Number(text);
    if (!Number.isNaN(number)) {
      return number;
    }
    throw 'O input informado é inválido.';
  },

  inputs: (inputs) => {
    if (inputs[1] === inputs[2]) throw 'As ampulhetas devem ser diferentes.';

    return inputs.map((input, index, list) => {
      const [ prepareTime ] = list;
      if (prepareTime <= input) {
        return input;
      }
      console.log(prepareTime, input);
      throw 'O tempo de preparo deve ser menor que das ampulhetas.';
    });
  }
};
