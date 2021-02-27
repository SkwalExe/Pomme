module.exports = {

      run(message, args) {
            const bot = require('./bot')
            const string_similarity = require('string-similarity')

            var sentences = [
                  {
                        questions: [
                              "cava",
                              "ca va ?",
                              "tu vas bien",
                              "cv"
                        ],
                        ans: [
                              "Oe",
                              "Oui",
                              "Non je bug"
                        ]
                  },
                  {
                        questions: [
                              "comment ca va ?",
                              "bien ou bien"
                        ],
                        ans: [
                              "Netflix n chill tu connais frere",
                              "Ca va ca va"
                        ]
                  },
                  {
                        questions: [
                              "tfq",
                              'tfk',
                              'tu fais quoi',
                              "qu'est ce que tu fais"
                        ],
                        ans: [
                              "Netflix n chill tu connais frere",
                              "je te parle",
                              "je joue a minecraft avec des potes et toi?"
                        ]
                  },
                  {
                        questions: [
                              "tu es un bot"
                        ],
                        ans: [
                              "Nooonnnn pas du tout",
                              "Nan jure"
                        ]
                  }
            ]

            const question = args.join(' ');
            var bestMatch = { rating: 0.400, ans: null };

            sentences.forEach(s => {

                  var x = string_similarity.findBestMatch(question, s.questions);
                  if (x.bestMatch.rating > bestMatch.rating) {
                        bestMatch.rating = x.bestMatch.rating;
                        bestMatch.ans = bot.getRandomItemInArray(s.ans);
                  }




            });

            if (bestMatch.ans == null) return false;
            message.reply(bestMatch.ans);
            return true;

      }


}


