import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { CTA } from '@/components/sections/CTA';
import { JsonLd } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
