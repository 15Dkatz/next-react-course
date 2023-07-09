import LayoutStructure from 'components/layout-structure';

export const metadata = { title: 'Discography - David Kando' };

export default function Layout({ children }) {
  return (
    <LayoutStructure
      background="bg-gradient-to-b from-blue-100 to-pink-100"
      title="Discography"
    >
      {children}
    </LayoutStructure>
  )
}
