import Image from 'next/image'
import { Inter } from 'next/font/google'
console.log("yyo");
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>Accueil</div>
    </main>
  )
}
