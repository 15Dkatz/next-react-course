export const POISON_WORMS_ID = 'poison-worms';
export const IN_PERPETUITY_ID = 'in-perpetuity';

export const GRID_DATA_ITEMS = [
  {
    id: 1,
    attributes: {
      href: '/about',
      background: "bg-[url('/about_500.png')] bg-contain",
      text: "About David Kando"
    }
  },
  {
    id: 2,
    attributes: {
      href: "/discography",
      background: "bg-[url('/discography_400.png')] bg-contain",
      text: "Discography"
    }
  },
  {
    id: 3,
    attributes: {
      href: `/record/${POISON_WORMS_ID}`,
      text: 'Poison Worms',
      background: "bg-[url('/poison_worms_400.png')] bg-contain"
    }
  },
  {
    id: 4,
    attributes: {
      href: `/record/${IN_PERPETUITY_ID}`,
      text: 'In Perpetuity',
      background: "bg-[url('/in_perpetuity_400.png')] bg-contain"
    }
  },
  {
    id: 5,
    attributes: {
      href: "/connect",
      background: "bg-[url('/connect_500.png')] bg-contain",
      text: "Connect with me"
    }
  },
  {
    id: 6,
    attributes: {
      href: "/studio",
      background: "bg-[url('/studio_500.png')] bg-contain",
      text: "Recording Studio"
    }
  },
  {
    id: 7,
    attributes: {
      href: "/quiz",
      background: "bg-[url('/quiz_500.png')] bg-contain",
      text: "Playlist Personality Quiz"
    }
  },
  {
    id: 8,
    attributes: {
      href: "/band",
      background: "bg-[url('/curcio_500.png')] bg-contain",
      text: "CURCIO BAND"
    }
  }
];
