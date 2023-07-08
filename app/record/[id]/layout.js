import LayoutStructure from 'components/layout-structure';
import { RECORDS, RECORDS_MAP } from './data';

export async function generateStaticParams() {
  return RECORDS.map(record => ({ id: record.id }));
}

export default function Layout({ children, params }) {
  const { id } = params;
  const { title, background } = RECORDS_MAP[id];

  return (
    <LayoutStructure title={title} background={background}>
      {children}
    </LayoutStructure>
  )
}
