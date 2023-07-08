import * as embeds from './embeds';
import { POISON_WORMS_ID, IN_PERPETUITY_ID } from 'app/data';

export const POISON_WORMS_TITLE = 'Poison Worms';
export const IN_PERPETUITY_TITLE = 'In Perpetuity';
export const NAV_TITLE_ID = "nav-title";

export const SEGMENT_TITLES_MAP = {
  [POISON_WORMS_ID]: POISON_WORMS_TITLE,
  [IN_PERPETUITY_ID]: IN_PERPETUITY_TITLE,
  'lyrics': 'Lyrics',
  'gear': 'Gear used'
};

export const findIdByPathname = (pathname) => (
  [POISON_WORMS_ID, IN_PERPETUITY_ID].find(id => pathname.includes(id))
);

export const RECORDS_MAP = {
  [POISON_WORMS_ID]: {
    id: POISON_WORMS_ID,
    title: POISON_WORMS_TITLE,
    background: `bg-[url('/poison_worms_background.png')] bg-contain`,
    date: '5/24/23',
    by: 'David Kando',
    blurb: 'A relaxed rock vibe. Listen closely for a wicked theme.',
    albumImage: '/poison_worms_1000.png',
    recordImage: '/poison_worms_record_full.png',
    recordHalfImage: '/poison_worms_record_half.png',
    spotifyLink: 'https://open.spotify.com/track/7o1sArWvk2m61k6CuZKt93?si=f728d1ee64214102',
    Embed: embeds.PoisonWormsEmbed,
    appleMusicLink: 'https://music.apple.com/us/album/poison-worms/1689163166?i=1689163167',
    youtubeMusicLink: 'https://www.youtube.com/watch?v=Lqdxm7R23c4',
    lyrics: (
      <div className="text:lg lg:text-xl p-4">
        <div>(One, two, three)</div>
        <div>One more nesting outside</div>
        <div>One alive with sapphire feathering</div>
        <div>One birdsong, tune in the morning light</div>
        <div>Tone this time turning somewhat grim</div>
        <div>(Nana-nana-nananana, Nanana-nana-nananana)</div>
        <div>Don&apos;t cry now, sing it real nice</div>
        <div>One more to cover me</div>
        <div>In your rhythm baby</div>
        <br />
        <div>Give me a reason why bluebird</div>
        <div>Your morning song&apos;s a dirge, tell me</div>
        <div>Give me a reason why bluebird</div>
        <div>You&apos;re grubbing poison worms, tell me</div>
        <br />
        <div>(Hey)</div>
        <div>One claw on the tree outside</div>
        <div>The other one, stepping in bird heaven</div>
        <div>(Nana-nana-nananana, Nanana-nana-nananana)</div>
        <div>Don&apos;t cry now, sing it real nice</div>
        <div>One more to cover me</div>
        <div>In your rhythm baby</div>
        <br />
        <div>Give me a reason why bluebird</div>
        <div>Your morning song&apos;s a dirge, tell me</div>
        <div>Give me a reason why bluebird</div>
        <div>You&apos;re grubbing poison worms, tell me</div>
        <br />
        <div>Hey</div>
        <div>Your rhythm baby</div>
        <div>Am I the reason why bluebird</div>
        <div>Your morning song&apos;s a dirge, tell me</div>
        <div>Am I the reason why bluebird</div>
        <div>You&apos;re grubbing poison worms, tell me</div>
        <div>Am I the reason why bluebird</div>
        <div>Your morning song&apos;s a dirge, tell me</div>
        <div>Am I the reason why bluebird</div>
        <div>You&apos;re grubbing poison worms, tell me</div>
      </div>
    ),
    gear: (
      <div className="text:lg lg:text-xl p-4">
        <div>
          Poison Worms was recorded in David Kando Studios. See below for some highlights of the interesting gear and techniques that I used during the creation process:
        </div>
        <br />
        <div>
          <div className="font-bold underline">Instruments highlights</div>
          <ul className="list-disc pl-10">
            <li><span className="font-bold underline">Gibson SG Electric Guitar</span>: I set my SG to the Rhythm setting with both knobs dialed all the way up. My pedal-chain consists of only two pedals in order to preserve tone: an overdrive (Tumnus Wumpler) and an EQ (Boss GE-7).</li>
            <li><span className="font-bold underline">Boss Katana Amp</span>: My guitar amp is a Boss Katana Artist Edition. While it&apos;s priced for a home studio, it produces a high-quality tone.</li>
            <li><span className="font-bold underline">Nord Electro 6D</span>: I wanted a nice electric organ Hammond B3 sound for the solo in this track. I had the Nord Electro on my wish list for a while, so I decided to finally invest in one.</li>
            <li><span className="font-bold underline">Addictive Drums</span>: Addictive Drums is a plugin by XLN Audio. While I&apos;m not a live drummer, I&apos;ve spent time learning enough and more to be dangerous. The Addictive Drums plugin allows me to create full midi drum tracks that sound like a studio drummer.</li>
          </ul>
        </div>
        <br />
        <div>
          <div className="font-bold underline">Recording highlights</div>
          <ul className="list-disc pl-10">
            <li><span className="font-bold underline">Shure SM57 Microphone</span>: I tracked my vocals with this mic, even though it&apos;s more commonly used to record guitar amps. I discovered that it can capture a warmer tone than other more traditional vocal mics in my locker.</li>
            <li><span className="font-bold underline">Universal Audio Sphere DLX</span>: This mic is a powerful one that allows me to emulate other high-end mics. The emulations include a plethora of studio-grade microphones including popular Audio Technica, Rode mics, Neumann U87s, and more. I used this to record my guitar amp.</li>
            <li><span className="font-bold underline">Natural sounds</span>: To give a live feel, I recorded and layered a bunch of natural sounds: clapping, shaker, and more. I also sampled the crowd talk from my previous band shows, as well as a bird singing.</li>
          </ul>
        </div>
        <br />
        <div>
          <div className="font-bold underline">Mixing highlights</div>
          <ul className="list-disc pl-10">
            <li><span className="font-bold underline">Dual Hard-panned guitars</span>: I double recorded the guitar tracks - one with a clean tone, and one with a boosted, driven tone. Then I hard-panned each track on opposite ends to create a wide stereo feel.</li>
            <li><span className="font-bold underline">Hardware 1176LN</span>: For mono tracks, I have a hardware 1176LN in the studio that I use to add some warm analog compression.</li>
            <li><span className="font-bold underline">Hardware Manley VU</span>: For stereo tracks, I have a hardware Manley VU in the studio that I use to add some warm analog compression.</li>
            <li><span className="font-bold underline">Pro-Q by Fabfilter</span>: My go to Equalizer plugin.</li>
            <li><span className="font-bold underline">Fresh Air</span>: A plugin that allows me to revive the mid-high range of any track. I find that it breathes more life into drums, guitar, and vocals.</li>
          </ul>
        </div>
        <br />
        <div>Stay tuned for upcoming videos that deep-dive into my interesting gear, techniques, and recording/mixing workflow!</div>
      </div>
    )
  },
  [IN_PERPETUITY_ID]: {
    id: IN_PERPETUITY_ID,
    title: IN_PERPETUITY_TITLE,
    background: `bg-[url('/in_perpetuity_background.png')] bg-contain`,
    date: '3/18/23',
    by: 'David Kando',
    blurb: 'A smooth song for cruising and romance. "The road awaits".',
    albumImage: '/in_perpetuity_1000.png',
    recordImage: '/in_perpetuity_record_full.png',
    recordHalfImage: '/in_perpetuity_record_half.png',
    spotifyLink: 'https://open.spotify.com/track/0Qer5Z5ut75UJevgRC8GIK?si=2444d5d5cdcc47f1',
    Embed: embeds.InPerpetuityEmbed,
    appleMusicLink: 'https://music.apple.com/us/album/in-perpetuity/1677926229?i=1677926230',
    youtubeMusicLink: 'https://www.youtube.com/watch?v=XhSBF2_iqL4',
    lyrics: (
      <div className="text:lg lg:text-xl p-4">
        <div>Kitchen fire</div>
        <div>Burning mac from the store</div>
        <div>Canine crier</div>
        <div>Playing guard at the door (again)</div>
        <div>My mind mired</div>
        <div>On a one-two bed fantasy</div>
        <div>Where you will endlessly see</div>
        <br />
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>Awaits</div>
        <br />
        <div>On days you&apos;re tired I got</div>
        <div>The theragun, got the stove</div>
        <div>And one day we&apos;re retired</div>
        <div>Saved for that mansion by the shore</div>
        <div>(Today I verbify a life so simple)</div>
        <div>But today we&apos;re apart</div>
        <div>I swear</div>
        <div>It&apos;s not stupidity</div>
        <div>You and me in perpetuity</div>
        <br />
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>Awaits</div>
        <br />
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road (the road awaits)</div>
        <div>You&apos;ll see me lovin, see me lovin</div>
        <div>You say the road (the road)</div>
        <div>Awaits</div>
      </div>
    ),
    gear: (
      <div className="text:lg lg:text-xl p-4">
        <div>
          In Perpetuity was recorded in David Kando Studios. See below for some highlights of the interesting gear and techniques that I used during the creation process:
        </div>
        <br />
        <div>
          <div className="font-bold underline">Instruments highlights</div>
          <ul className="list-disc pl-10">
            <li><span className="font-bold underline">Gibson SG Electric Guitar</span>: I set my SG to the Rhythm setting with both knobs dialed all the way up. My pedal-chain consists of only two pedals in order to preserve tone: an overdrive (Tumnus Wumpler) and an EQ (Boss GE-7).</li>
            <li><span className="font-bold underline">Boss Katana Amp</span>: My guitar amp is a Boss Katana Artist Edition. While it&apos;s priced for a home studio, it produces a high-quality tone.</li>
            <li><span className="font-bold underline">Casio SP350</span>: While this is an entry-level home-studio piano, I discovered a few interesting sounds that I incorporated into the track. For example, the &quot;washing and rising&quot; feel of the synth sound comes from this Casio.</li>
            <li><span className="font-bold underline">Addictive Drums</span>: Addictive Drums is a plugin by XLN Audio. While I&apos;m not a live drummer, I&apos;ve spent time learning enough and more to be dangerous. The Addictive Drums plugin allows me to create full midi drum tracks that sound like a studio drummer.</li>
          </ul>
        </div>
        <br />
        <div>
          <div className="font-bold underline">Recording highlights</div>
          <ul className="list-disc pl-10">
            <li><span className="font-bold underline">Shure SM57 Microphone</span>: I tracked my vocals with this mic, even though it&apos;s more commonly used to record guitar amps. I discovered that it can capture a warmer tone than other more traditional vocal mics in my locker.</li>
            <li><span className="font-bold underline">Universal Audio Sphere DLX</span>: This mic is a powerful one that allows me to emulate other high-end mics. The emulations include a plethora of studio-grade microphones including popular Audio Technica, Rode mics, Neumann U87s, and more. I used this to record my guitar amp.</li>
          </ul>
        </div>
        <br />
        <div>
          <div className="font-bold underline">Mixing highlights</div>
          <ul className="list-disc pl-10">
            <li><span className="font-bold underline">Hardware 1176LN</span>: For mono tracks, I have a hardware 1176LN in the studio that I use to add some warm analog compression.</li>
            <li><span className="font-bold underline">Pro-Q by Fabfilter</span>: My go to Equalizer plugin.</li>
            <li><span className="font-bold underline">Fresh Air</span>: A plugin that allows me to revive the mid-high range of any track. I find that it breathes more life into drums, guitar, and vocals.</li>
          </ul>
        </div>
        <br />
        <div>Stay tuned for upcoming videos that deep-dive into my interesting gear, techniques, and recording/mixing workflow!</div>
      </div>
    )
  }
};

export const RECORDS = Object.values(RECORDS_MAP);
export const CONTENT_PATHS = ['lyrics', 'gear'];
