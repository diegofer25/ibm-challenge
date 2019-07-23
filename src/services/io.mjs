import inquirer from 'inquirer';

const prompt = inquirer.createPromptModule();

export default {
  select: (message, choices) => {
    return prompt({
      type: 'list',
      name: 'answer',
      message,
      choices
    }).then(({ answer }) => answer);
  },

  read: async (message) => {
    return prompt({ message, name: 'answer' }).then(({ answer }) => answer);
  },

  write: console.log,

  writeResult: (...args) => {
    console.log('--------------------');
    console.log(...args);
    console.log('--------------------');
  }
};
