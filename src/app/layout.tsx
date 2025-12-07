import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

const DOMAIN = 'https://cashoutspaylatermy.net';

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: 'Servis Tunaikan Shopee PayLater & Cashout Dipercayai | CashoutMy',
    template: '%s | CashoutMy',
  },
  description:
    'Servis tunaikan had ShopeePay Later, Grab PayLater, dan Boost PayFlex pantas. Proses selamat, kadar rendah, dan tunai dalam hitungan minit. Hubungi kami sekarang!',
  keywords: [
    'tunaikan shopeepay',
    'cara cashout spaylater',
    'servis cashout dipercayai',
    'cashout grab paylater',
    'tunaikan limit paylater',
    'boost payflex cashout',
    'gestun malaysia',
  ],
  authors: [{ name: 'CashoutMy Team' }],
  creator: 'CashoutMy',
  publisher: 'CashoutMy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Tunaikan Had PayLater Anda - Selamat & Pantas | CashoutMy',
    description:
      'Perlukan wang tunai? Kami bantu tunaikan had SPayLater & Grab PayLater anda dengan proses telus dan pantas.',
    url: DOMAIN,
    siteName: 'CashoutMy',
    locale: 'ms_MY', // Locale Malaysia
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
        width: 1200,
        height: 630,
        alt: 'Servis Cashout PayLater Malaysia Dipercayai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servis Tunaikan Shopee PayLater & Grab PayLater',
    description: 'Tunaikan had PayLater pantas dan selamat di Malaysia.',
    images: ['https://images.unsplash.com/photo-1556740738-b6a63e27c4df'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'GANTI_DENGAN_KODE_VERIFIKASI_GOOGLE_SEARCH_CONSOLE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='ms'
      className='scroll-smooth'>
      {' '}
      {/* Lang set ke Bahasa Melayu */}
      <head>
        <link
          rel='canonical'
          href={DOMAIN}
        />
      </head>
      <body className={inter.className}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
