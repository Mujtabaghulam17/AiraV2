import React from 'react';
import { Organization, WithContext, WebSite, Service } from 'schema-dts';

export function OrganizationSchema() {
  const jsonLd: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIRA',
    legalName: 'AIRA - Artificial Intelligence Readiness & Adaptability',
    url: 'https://aira-ai.nl',
    logo: 'https://aira-ai.nl/logo.png',
    description: 'AIRA helpt organisaties hun AI-transformatie te realiseren door praktische training en implementatiebegeleiding.',
    
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
      addressLocality: 'Rotterdam',
    },
    
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@aira-ai.nl',
      availableLanguage: ['nl', 'en'],
    },
    
    sameAs: [
      'https://linkedin.com/company/aira-artificialintelligence-readiness-adaptability',
    ],
    
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
    
    knowsAbout: [
      'Artificial Intelligence',
      'AI Training',
      'AI Implementation',
      'Digital Transformation',
      'AI Readiness Assessment',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteSchema() {
  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AIRA',
    url: 'https://aira-ai.nl',
    description: 'Maak jouw organisatie AI-ready met praktische training en implementatiebegeleiding.',
    inLanguage: ['nl', 'en'],
    
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://aira-ai.nl/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceSchema({ 
  name, 
  description, 
  price, 
  url 
}: {
  name: string;
  description: string;
  price: string;
  url: string;
}) {
  const jsonLd: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'AIRA',
      url: 'https://aira-ai.nl',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'EUR',
      url,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
