import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';

export default function JsonLd() {
  const { hero, about } = LANDING_DATA;
  const domain = 'https://cashoutspaylatermy.net'; // Ganti dengan domain asli jika berbeda

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'CashoutMy - Jasa Gestun Terpercaya',
    description: hero.description,
    url: domain,
    logo: `${domain}/logo.png`, // Pastikan ada file logo.png di folder public
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad', // Gambar Hero
    telephone: '+6281234567890', // Sesuaikan dengan nomor WA di config
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Indonesia',
      addressCountry: 'ID',
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
        name: 'Pencairan Limit PayLater (Shopee, Grab, Boost)',
      },
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
