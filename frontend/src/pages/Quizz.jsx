import React, { useState } from "react";
import { randomWord, cryptedQuote } from "@services/cryptedQuote.js";

const api = [
  {
    title: "film Si seulement...",
    content:
      "On dit que dans un couple il y en a toujours un qui aime plus que l'autre, j'aurais préféré que ce ne soit pas moi.",
  },
  {
    title: "film Titanic",
    content: "Le coeur d'une femme est un océan de secrets.",
  },
  {
    title: "film Le journal de Bridget Jones",
    content:
      "Pourquoi les personnes en couple demandent toujours aux célibataires comment vont les amours, est-ce que nous on leur saute dessus pour savoir s'ils baisent encore.",
  },
  {
    title: "film Stella",
    content: "Quand la misère sonne, l'amitié sort par la fenêtre",
  },
  {
    title: "film La Ligne Verte",
    content:
      "Je suis fatigué patron, fatigué de devoir courir les routes et d'être seul comme un moineau sous la pluie. Fatigué d'avoir jamais un ami pour parler, pour me dire où on va, d'où on vient et pourquoi. Mais surtout je suis fatigué de voir les hommes se battre les uns les autres, je suis fatigué de toute la peine et la souffrance que je sens dans le monde.",
  },
  {
    title: "film Lilo &amp; Stitch",
    content:
      '" ohana " signifie famille, famille signifie que personne ne doit être abandonné, ni oublié.',
  },
  {
    title: "film Cendrillon",
    content:
      "Sois courageuse et sois gentille. Où il y a de la bonté, il y a du bien et quand il y a du bien, il y a de la magie",
  },
  {
    title: "film La princesse et la grenouille",
    content:
      "Travailler dur est la seule manière d'avoir ce que tu veux dans ce monde.",
  },
  {
    title: "film Into the wild",
    content:
      "Penser que la vie humaine ne peut être régie que par la raison, c'est nier la possibilité même de la vivre.",
  },
  {
    title: "film Scarface",
    content:
      "Moi je n'ai confiance qu'en mon manche et ma parole... l'une est de fer et l'autre d'acier !",
  },
  {
    title: "film Sur la route de Madison",
    content:
      "Je te veux pour toujours. Je veux t'aimer comme je t'aime en ce moment pour le reste de ma vie. Mais tu ne comprends pas? On perdrait tout si on partait ensemble. Je ne peux pas renier toute une vie pour en construire une nouvelle. Tout ce que je peux faire, c'est maintenir ces deux états d'esprit. Aide-moi ! Aide-moi à faire en sorte que mon amour pour toi ne disparaisse jamais !",
  },
  {
    title: "film Le bon, la brute et le truand",
    content:
      "Tu vois, le monde se divise en deux catégories, ceux qui ont un pistolet chargé et ceux qui creusent. Toi, tu creuses.",
  },
];

function QuizzFindCryptedWord() {
  // Réponse du joueur
  const [answer, setAnswer] = useState("");

  // Score du joueur
  const [score, setScore] = useState(0);

  // Message suite à une réponse
  const [wonMessage, setWonMessage] = useState();

  // Index de la citation courante
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * api.length)
  );

  // Mot à deviner
  const [wordToGuess, setWordToGuess] = useState(
    randomWord(api[quoteIndex].content)
  );
  // Fonction lancé suite au click sur bouton "SEND"
  const action = () => {
    if (answer.toLowerCase() === wordToGuess.toLowerCase()) {
      setWonMessage("well done");

      const newQuoteIndex = Math.floor(Math.random() * api.length);
      setQuoteIndex(newQuoteIndex);
      setWordToGuess(randomWord(api[newQuoteIndex].content));

      setAnswer("");
      setScore(score + 10);
    } else {
      setWonMessage("you are a fuckin'loser");
      setAnswer("");
    }
  };

  return (
    <>
      <h4>SCORE : {score}</h4>
      {/* On affiche la citation cryptée */}
      <div className="quote">
        {cryptedQuote(api[quoteIndex].content, wordToGuess)}
      </div>
      {/* On affiche pour les tests le mot manquant (à supprimer par la suite) */}
      <p>Randow word to guess : {wordToGuess}</p>
      {/* On affiche un message suite à l'envoi d'une réponse (bonne ou mauvaise) */}
      {wonMessage && <div className="won">{wonMessage}</div>}

      <input
        type="text"
        value={answer}
        placeholder="ta réponse"
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button type="submit" onClick={action}>
        Send
      </button>
    </>
  );
}

export default QuizzFindCryptedWord;
