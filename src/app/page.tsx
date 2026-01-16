import Theme1Theme from '@/components/themes/Theme1Theme'
import themeData from '@/data/theme-data.json'

export default function Home() {
  return (
    <main>
      <Theme1Theme theme={themeData as any} />
    </main>
  )
}
