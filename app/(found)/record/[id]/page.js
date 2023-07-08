import Link from 'next/link';
import Player from './player';
import { RECORDS, RECORDS_MAP } from './data';

export async function generateStaticParams() {
  return RECORDS.map(record => ({ id: record.id }));
}

export const dynamicParams = false;
export async function generateMetadata({ params }) {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return { title: `${title} - David Kando` };
}

export default function Page({ params }) {
  const { id } = params;
  const { date, blurb, Embed } = RECORDS_MAP[id];

  return (
    <>
      <div className="text-justify">{blurb}</div>
      <div className="text-sm text-slate-600">
        Release date: {date}
      </div>
      <div className="font-ranga flex justify-between w-[144px] text-2xl m-2">
        <Link className="link" href={`/record/${id}/lyrics`}>Lyrics</Link>
        <Link className="link" href={`/record/${id}/gear`}>Gear Used</Link>
      </div>
      <Player embed={<Embed />} />
    </>
  );
}
