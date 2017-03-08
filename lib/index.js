const marvel = require('../dicts/marvel');
const adjectives = require('../dicts/adjectives');

function generate() {

  const dicts = [marvel, adjectives];
  const glue = '-';

  let check;
  let used = {};

  let seq = dicts.map(function(dict) {
    for (var i = 0; i < 10; i++) {
      if (!used.hasOwnProperty(check = dict[random(dict.length)])) break;
    }
    if (i === 10) {
      throw new Error('too many tries to find a unique word');
    }
    used[check] = true;
    return check;
  });

  return seq.join(glue);
}

function random(limit) {
  return Math.floor(Math.random() * limit);
}

exports.generate = generate;
