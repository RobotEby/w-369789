
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="CBAAP - Agência de Marketing Digital - Tráfego Pago e Estratégias de Alta Performance" 
        description="Na CBAAP, transformamos tráfego em conversões escaláveis com estratégias de marketing digital, campanhas otimizadas e ROI mensurável para seu negócio em Belo Horizonte, MG."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['CBAAP', 'marketing digital', 'tráfego pago', 'campanhas otimizadas', 'ROI mensurável', 'conversões escaláveis', 'agência digital', 'estratégias de performance', 'Belo Horizonte']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
    </PageLayout>
  );
};

export default Index;
