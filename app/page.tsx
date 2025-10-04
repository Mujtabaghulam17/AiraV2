import { Metadata } from 'next';
import AIRAWebsite from './components/AIRAWebsite';
import { OrganizationSchema, WebsiteSchema } from './components/StructuredData';

export const metadata: Metadata = {
  title: 'Home',
  description: 'AIRA helpt organisaties hun AI-transformatie te realiseren. Van awareness workshops tot volledige implementatiebegeleiding voor overheid, onderwijs en MKB.',
  openGraph: {
    title: 'AIRA - Maak jouw organisatie AI-ready',
    description: 'Praktische AI-training en implementatiebegeleiding voor organisaties.',
    url: 'https://aira-ai.nl',
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <AIRAWebsite />
    </>
  );
}
