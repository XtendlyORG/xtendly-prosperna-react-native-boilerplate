const {green, blue} = require('kleur');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n');
      console.log(
        'Xtendly x Prosperna React-Native Boilerplate initialized with success ! 🚀\n',
      );
      console.log(
        `${green(`
         /$$$$$$$                                                                                
        | $$__  $$                                                                               
        | $$  \\ $$ /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$ 
        | $$$$$$$//$$__  $$ /$$__  $$ /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$| $$__  $$ |____  $$
        | $$____/| $$  \\__/| $$  \\ $$|  $$$$$$ | $$  \\ $$| $$$$$$$$| $$  \\__/| $$  \\ $$  /$$$$$$$
        | $$     | $$      | $$  | $$ \\____  $$| $$  | $$| $$_____/| $$      | $$  | $$ /$$__  $$
        | $$     | $$      |  $$$$$$/ /$$$$$$$/| $$$$$$$/|  $$$$$$$| $$      | $$  | $$|  $$$$$$$
        |__/     |__/       \\______/ |_______/ | $$____/  \\_______/|__/      |__/  |__/ \\_______/
                                               | $$                                              
                                               | $$                                              
                                               |__/`)}`,
      );

      console.log(
        `${blue(`
             /$$   /$$  /$$                               /$$ /$$          
            | $$  / $$ | $$                              | $$| $$          
            |  $$/ $$//$$$$$$    /$$$$$$  /$$$$$$$   /$$$$$$$| $$ /$$   /$$
             \\  $$$$/|_  $$_/   /$$__  $$| $$__  $$ /$$__  $$| $$| $$  | $$
              >$$  $$  | $$    | $$$$$$$$| $$  \\ $$| $$  | $$| $$| $$  | $$
             /$$/\\  $$ | $$ /$$| $$_____/| $$  | $$| $$  | $$| $$| $$  | $$
            | $$  \\ $$ |  $$$$/|  $$$$$$$| $$  | $$|  $$$$$$$| $$|  $$$$$$$
            |__/  |__/  \\___/   \\_______/|__/  |__/ \\_______/|__/ \\____  $$
                                                                  /$$  | $$
                                                                 |  $$$$$$/
                                                                  \\______/`)}`,
      );
      console.log(blue('TYPESCRIPT VERSION 📘'));
      console.log('\n');

      console.log(
        '- 📚 If you need to read more about this boilerplate : https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate',
      );
      console.log(
        '- 🤕 If you have some troubles : https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate/issues',
      );
      console.log(
        '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate',
      );
      resolve();
    });
  },
};
