import { lazy } from 'react';

export const CruiserEmbed = lazy(() => import('./cruiser-embed'));
export const RockerEmbed = lazy(() => import('./rocker-embed'));
export const RomanticEmbed = lazy(() => import('./romantic-embed'));
export const ThinkerEmbed = lazy(() => import('./thinker-embed'));
// Use this artificially delayed ThinkerEmbed to show the Suspense loading UI
// export const ThinkerEmbed = lazy(
//   () => new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./thinker-embed'));
//     }, 5000);
//   })
// );

export const CRUISER = 'CRUISER';
export const ROCKER = 'ROCKER';
export const ROMANTIC = 'ROMANTIC';
export const THINKER = 'THINKER';

export const PREMISE = <div>Suddenly the sky cracks with a flash. A winged figure descends upon you. The figure introduces himself, &quot;Greetings mortal, I&apos;m the Angel of Music. I have five questions for you. Complete them, and I&apos;ll give you a reward.&quot;</div>;

export const QUESTIONS = [
  {
    id: 1,
    question: `First, choose a music genre from the following - whatever is speaking to you, or sparking a feeling:`,
    answers: [
      {
        entry: 'a',
        id: '1a',
        answer: 'Electric riff revolution',
        type: ROCKER
      },
      {
        entry: 'b',
        id: '1b',
        answer: 'Heart-melting rhythmic rumble',
        type: ROMANTIC
      },
      {
        entry: 'c',
        id: '1c',
        answer: 'Mind-blowing multi-instrumental',
        type: THINKER
      },
      {
        entry: 'd',
        id: '1d',
        answer: 'Soul-soaring sonic',
        type: CRUISER
      }
    ]
  },
  {
    id: 2,
    question: 'Next, pick a creature from the musical spirit realm world to guide you:',
    answers: [
      {
        entry: 'a',
        id: '2a',
        answer: '"Mr. Butter", the smooth synth-operating Otter',
        type: ROMANTIC
      },
      {
        entry: 'b',
        id: '2b',
        answer: '"8-hands", the piano-playing Octopus',
        type: THINKER
      },
      {
        entry: 'c',
        id: '2c',
        answer: '"Flame Feathers", the guitar wizard Eagle',
        type: ROCKER
      },
      {
        entry: 'd',
        id: '2d',
        answer: '"Groove Highway", the percussion pro Pony',
        type: CRUISER
      }
    ]
  },
  {
    id: 3,
    question: `Imagine you're becoming a music artist. Come up with your performance alias:`,
    answers: [
      {
        entry: 'a',
        id: '3a',
        answer: 'The Sunwave',
        type: CRUISER
      },
      {
        entry: 'b',
        id: '3b',
        answer: 'The Heartbender',
        type: ROMANTIC
      },
      {
        entry: 'c',
        id: '3c',
        answer: 'The Epiphany',
        type: THINKER
      },
      {
        entry: 'd',
        id: '3d',
        answer: 'The Thunder',
        type: ROCKER
      }
    ]
  },
  {
    id: 4,
    question: `Imagine you're an expert guitarist, which of the following guitar designs would you use?`,
    answers: [
      {
        entry: 'a',
        id: '4a',
        answer: 'A V-shaped electric guitar with an angel-wing design',
        type: CRUISER
      },
      {
        entry: 'b',
        id: '4b',
        answer: 'A rustic acoustic guitar with "this machine kills fascists" written on it',
        type: THINKER
      },
      {
        entry: 'c',
        id: '4c',
        answer: 'A silver double-neck electric guitar with neon strings',
        type: ROCKER
      },
      {
        entry: 'd',
        id: '4d',
        answer: 'A finely-made acoustic guitar with pearl trim',
        type: ROMANTIC
      }
    ]
  },
  {
    id: 5,
    question: `Again, imagine you're an up-and-coming music artist. Choose one band for a week-long mentoring session:`,
    answers: [
      {
        entry: 'a',
        id: '5a',
        answer: 'Queen',
        type: ROMANTIC
      },
      {
        entry: 'b',
        id: '5b',
        answer: 'The Eagles',
        type: CRUISER
      },
      {
        entry: 'c',
        id: '5c',
        answer: 'Led Zeppelin',
        type: ROCKER
      },
      {
        entry: 'd',
        id: '5d',
        answer: 'The Beatles',
        type: THINKER
      }
    ]
  }
];

export const CONCLUSION_PART_1 = <div>The Angel of Music smiles and says:</div>;

export const RESULT_MAP = {
  [CRUISER]: {
    blurb: (
      <div>
        <div>&quot;&quot;&quot;</div>
        <div>Your musical personality is like a smooth cruise down the coastal highway. Your songs capture the sweet feeling of an uninhibited spirit.</div>
        <div>&quot;&quot;&quot;</div>
      </div>
    ),
    Embed: CruiserEmbed,
    playlistLink: 'https://open.spotify.com/playlist/29ngmUyX5axVriFSTyQy7R?si=bd389a57586b4a92'
  },
  [ROCKER]: {
    blurb: (
      <div>
        <div>&quot;&quot;&quot;</div>
        <div>Your musical personality is relentless and invigorating, like the energy from hair-rising guitar amps. The sound of your songs crash and screech with a beautiful brand of chaotic musicality.</div>
        <div>&quot;&quot;&quot;</div>
      </div>
    ),
    Embed: RockerEmbed,
    playlistLink: 'https://open.spotify.com/playlist/1njREE782p2UmiVsuKQBu3?si=f87ff77aec36484c'
  },
  [ROMANTIC]: {
    blurb: (
      <div>
        <div>&quot;&quot;&quot;</div>
        <div>Your musical personality is warm and buttery. When you listen to your music, it&apos;s like drinking the foam on a warm latte. Or it can be like a passionate embrace amidst an evening&apos;s candlelight.</div>
        <div>&quot;&quot;&quot;</div>
      </div>
    ),
    Embed: RomanticEmbed,
    playlistLink: 'https://open.spotify.com/playlist/3TMHZHFF7hlQbFYCWqbHrt?si=04de917f8c6d4c2a'
  },
  [THINKER]: {
    blurb: (
      <div>
        <div>&quot;&quot;&quot;</div>
        <div>Your musical personality consists of wit and discovery. Your songs traverse the world of ideas. Your curious mind craves the sound of thought-provoking compositions and challenge of meaningful lyrics.</div>
        <div>&quot;&quot;&quot;</div>
      </div>
    ),
    Embed: ThinkerEmbed,
    playlistLink: 'https://open.spotify.com/playlist/01vuz1uxoDgn1FpJ5bvYtS?si=eb184710c18d4b7a'
  }
};

export const CONCLUSION_PART_2 = <div>Here is a playlist that matches your personality.</div>;

export const CONCLUSION_PART_3 = (
  <div>
    Once again, the sky cracks with a flash. The Angel of Music begins to ascend, &quot;Until we meet again. Hope you enjoy the playlist. Oh, and one more thing: don&apos;t forget to{' '}
    <a href="https://open.spotify.com/artist/6ep6Hvwexmaa5IqcPxMxqC?si=qY9-ObwmQzikC-T7mB-WGw" target="_blank" className="link">support and follow my favorite mortal artist on Spotify: David Kando.</a>&quot;
  </div>
);

// Returns a valid selection, based on a given selectionMap of selection keys, and their total selection number, such as:
// {
//   [CRUISER]: 0,
//   [ROCKER]: 3,
//   [ROMANTIC]: 1,
//   [THINKER]: 1
// }
// returns ROCKER
//
// Always choose the first item to handle any ties, such as 2-2-1 tie.
export const getQuizResult = ({ selectionMap }) => {
  // 1: find the max
  const max = Math.max(...Object.values(selectionMap));

  // 2: filter the list down to selections that match the max
  const filteredSelections = Object.keys(selectionMap).filter(
    key => selectionMap[key] === max
  );

  // 3: pick the first item from the list.
  return filteredSelections[0];
}

// Uncomment for tests
const test1 = getQuizResult({
  selectionMap: {
    [CRUISER]: 1,
    [ROCKER]: 1,
    [ROMANTIC]: 1,
    [THINKER]: 2
  }
});
console.log(`test1`, test1);

const test2 = getQuizResult({
  selectionMap: {
    [CRUISER]: 1,
    [ROCKER]: 2,
    [ROMANTIC]: 0,
    [THINKER]: 2
  }
});
console.log(`test2`, test2);

const test3 = getQuizResult({
  selectionMap: {
    [CRUISER]: 1,
    [ROCKER]: 3,
    [ROMANTIC]: 0,
    [THINKER]: 1
  }
});
console.log(`test3`, test3);

const test4 = getQuizResult({
  selectionMap: {
    [CRUISER]: 5,
    [ROCKER]: 0,
    [ROMANTIC]: 0,
    [THINKER]: 0
  }
});
console.log(`test4`, test4);
