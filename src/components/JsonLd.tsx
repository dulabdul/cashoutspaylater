import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';

export default function JsonLd() {
  const { hero } = LANDING_DATA;
  const domain = 'https://cashoutspaylatermy.net';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'CashoutMy - Servis Tunaikan PayLater Malaysia',
    alternateName: 'CashoutMy Gestun Malaysia',
    description:
      'Servis tunaikan had SPayLater, Grab PayLater, dan Boost PayFlex menjadi wang tunai (cash) dengan kadar rendah dan proses pantas di Malaysia.',
    url: domain,
    logo: `${domain}/logo.png`,
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
    telephone: '+60199199650',
    priceRange: 'RM',
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressRegion: 'Wilayah Persekutuan',
      addressCountry: 'MY',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [BRAND_CONFIG.links.instagram, BRAND_CONFIG.links.whatsapp],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tunaikan Had PayLater (Shopee, Grab, Boost) kepada Tunai',
      },
      priceCurrency: 'MYR',
      availability: 'https://schema.org/OnlineOnly',
      areaServed: 'Malaysia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Senarai Servis Cashout',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cashout ShopeePay Later (SPayLater)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tunaikan Grab PayLater',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Convert Boost PayFlex to Cash',
          },
        },
      ],
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
