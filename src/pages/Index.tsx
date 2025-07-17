import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import TargetAudience from '@/components/TargetAudience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <TargetAudience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
