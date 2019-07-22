import readline from 'readline';

export default async (question) => {
  return new Promise((resolve, reject) => {
    const io = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    try {

      io.question(`${question} \n`, (awnser) => {
        resolve(awnser);
        io.close();
      });

    } catch (error) {
      reject(error);
    }
  });
};
