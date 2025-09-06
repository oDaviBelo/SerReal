import { Header } from '@/components/templates/Header/Header'
import { Hero } from '@/components/templates/Hero/Hero'
import { Mission } from '@/components/templates/Mission/Mission'
import { Solutions } from '@/components/templates/Solutions/Solutions'
import { SlideMission } from '@/components/templates/SlideMission/SlideMission'
import { Differentials } from '@/components/templates/Differentials/Differentials'
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Mission />
      <Solutions />
      <SlideMission />
      <Differentials />
    </>
  )
}
