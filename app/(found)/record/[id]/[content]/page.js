import { RECORDS, CONTENT_PATHS, RECORDS_MAP } from '../data';
import Player from '../player';

// { id: in-perpetuity-id, content: gear }
// { id: in-perpetuity-id, content: lyrics }
// { id: poison-worms-id, content: gear }
// { id: poison-worms-id, content: lyrics }
export async function generateStaticParams() {
  const recordSegmentMaps = [];

  RECORDS.forEach(record => {
    CONTENT_PATHS.forEach(contentPath => {
      recordSegmentMaps.push({ id: record.id, content: contentPath });
    });
  });

  return recordSegmentMaps;
}

export default function Page({ params: { id, content } }) {
  const contentJsx = RECORDS_MAP[id][content];
  const { Embed } = RECORDS_MAP[id];

  return (
    <>
      <Player embed={<Embed />} />
      <br />
      {contentJsx}
    </>
  );
}
