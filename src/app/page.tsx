import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Shop from '@/components/Shop'

export default async function Main() {
  return (
    <main>
      <Navbar />
      <Shop />
      <Footer />
    </main>
  )
}
