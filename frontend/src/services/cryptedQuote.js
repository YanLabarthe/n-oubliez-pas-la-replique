// Fonction pour obtenir un mot aléatoire dans une citation
export const randomWord = (quote) => {
  const regexpToDelete1 = /[,.!?:()"]/g;
  const regexpToDelete2 = /'/g;
  const regexpToDelete3 =
    /soit|[Pp]eut|[mM]ais|pour|[Nn]ous|[Qq]uel|[Cc]ela|[cC]eci|[Qq]uoi|dont|leur|[oO]uais|[Dd]ans|cette|votre|être|plus|[Ee]st-ce|[Pp]arce|[Aa]vec|[hH]umm|fûmes|[Vv]ous|sont|êtes|suis/g;

  const words = quote
    .replaceAll(regexpToDelete1, "")
    .replaceAll(regexpToDelete3, "")
    .replaceAll(regexpToDelete2, " ")
    .split(" ");

  const accentedCharacters =
    "àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";

  const regexpCryptable = new RegExp(
    "[a-zA-Z-" + accentedCharacters + "]{4,}",
    "g",
    "i"
  );

  const arrCryptable = [];

  for (const word of words) {
    if (word.match(regexpCryptable)) {
      arrCryptable.push(word);
    }
  }

  const randomWordSelected =
    arrCryptable[Math.floor(Math.random() * arrCryptable.length)];

  return randomWordSelected;
};

// Fonction pour crypter une citation avec le mot qui a été retiré aléatoirement
export const cryptedQuote = (quote, cryptedWord, binary) => {
  let cryptage = "_";
  if (binary == 1) {
    for (let i = 1; i < cryptedWord.length; i++) {
      if (i % 2 !== 0) {
        cryptage += " " + cryptedWord[i];
      } else {
        cryptage += " _";
      }
    }
    return cryptage;
  } else {
    for (let i = 1; i < cryptedWord.length; i++) {
      cryptage += " _";
    }
    return quote.replace(cryptedWord, cryptage);
  }
};
