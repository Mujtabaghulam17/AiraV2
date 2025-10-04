import { Metadata } from 'next';
import PricingPage from '../components/PricingPage';
import { ServiceSchema } from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Prijzen & Pakketten',
  description: 'Transparante prijzen voor AI-trainingen en implementatiebegeleiding. Van awareness workshops tot volledige AI-transformatie voor jouw organisatie.',
  openGraph: {
    title: 'AIRA Prijzen - AI Training & Implementatie',
    description: 'Kies het pakket dat perfect past bij jouw organisatie. Van awareness tot volledige AI-transformatie.',
    url: 'https://aira-ai.nl/pricing',
  },
};

export default function Pricing() {
  return (
    <>
      <ServiceSchema 
        name="AI Awareness Workshop"
        description="Halfdag workshop voor teams die net beginnen met AI. Creëer bewustwording en enthousiasme."
        price="199"
        url="https://aira-ai.nl/pricing#workshop"
      />
      <ServiceSchema 
        name="AI Implementation Training"
        description="Hele dag hands-on training om direct met AI aan de slag te gaan in jullie workflows."
        price="349"
        url="https://aira-ai.nl/pricing#implementation"
      />
      <ServiceSchema 
        name="AI Strategy Assessment"
        description="Strategische analyse en roadmap voor succesvolle AI-transformatie."
        price="2990"
        url="https://aira-ai.nl/pricing#assessment"
      />
      <PricingPage />
    </>
  );
}
