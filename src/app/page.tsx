import VietnamCoffeeTheme from '@/components/themes/VietnamCoffeeTheme'
import themeData from '@/data/theme-data.json'

export default function Home() {
  return (
    <main>
      <VietnamCoffeeTheme theme={themeData as any} />
    </main>
  )
}
