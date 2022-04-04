const { green, blue } = require('kleur')

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n')
      console.log(
        'Xtendly x Prosperna React-Native Boilerplate initialized with success ! 🚀\n',
      )
      console.log(
        `${green(
          '                                                                    .-`    `::  \n' +
            ' `/////////////     `/shhhy+-   ://.        /sy/                   /ss/   :NMN: \n' +
            ' `sssssyhhhyhhy:` `yMMMMNNMMMd. osss:     `hMMMh-    .-`         `+ss:   +MMm/. \n' +
            '      :MMM+----. `mMMm+:-`.oo/` osssyo`  `dMMMMh-   ohhh-       `oyy+-  sMMd/.  \n' +
            '      :MMM+`     oMMN/-         osssyhs`.mMMMMMh-   -hds`      .syy+- `hMMh:`   \n' +
            '      :MMM+`     hMMd:          oss-ohhhMMMhdMMh-    `.       +NNm/. .dMMy:`    \n' +
            '      :MMM+`     oMMN/          oss-`shdMMd:dMMh-    :-`     sMMd/. -NMMo-      \n' +
            '      :MMM+`     `mMMm/`  `/+:. oss- `sdMd:.hMMh-   hMys-  `hMMh:` -hdy-`       \n' +
            '      :MMM+`      `yMMMMdssss+  oss.  `oh/- hMMh-   -hyo:  dMMs:` -ss+`         \n' +
            '      .oys:`        .+yhyo/-    -::`    ``  -syo-     ..`  +mo-   `//           \n' +
            '        ``             ```                    ``            `.                  ',
        )}`,
      )
      console.log(blue('TYPESCRIPT VERSION 📘'))
      console.log('\n')

      console.log(
        '- 📚 If you need to read more about this boilerplate : https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate',
      )
      console.log(
        '- 🤕 If you have some troubles : https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate/issues',
      )
      console.log(
        '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate',
      )
      resolve()
    })
  },
}