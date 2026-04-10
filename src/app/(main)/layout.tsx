import { WaitlistModalProvider } from '@/context/WaitlistModalContext'
import WaitlistModal from '@/components/WaitlistModal'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <WaitlistModalProvider>
      <Navbar />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
      <WaitlistModal />
    </WaitlistModalProvider>
  )
}
