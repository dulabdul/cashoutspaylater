import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

const DOMAIN = 'https://cashoutspaylatermy.net';

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: 'Jasa Gestun Shopee PayLater & Cashout Terpercaya | CashoutMy',
    template: '%s | CashoutMy',
  },
  description:
    'Layanan pencairan limit ShopeePay Later, Grab PayLater, dan Boost PayFlex kilat. Proses aman, rate rendah, dan cair dalam hitungan menit. Hubungi kami sekarang!',
  keywords: [
    'gestun shopeepay',
    'cara mencairkan spaylater',
    'jasa gestun terpercaya',
    'cashout grab paylater',
    'gestun amanah',
    'pencairan limit paylater',
    'boost payflex cashout',
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
    title: 'Cairkan Limit PayLater Anda - Aman & Cepat | CashoutMy',
    description:
      'Butuh dana tunai? Kami bantu cairkan limit SPayLater & Grab PayLater Anda dengan proses transparan dan cepat.',
    url: DOMAIN,
    siteName: 'CashoutMy',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad', // Ganti dengan OG Image custom Anda nanti (ukuran 1200x630)
        width: 1200,
        height: 630,
        alt: 'Layanan Gestun Terpercaya CashoutMy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Gestun Shopee PayLater & Cashout Terpercaya',
    description: 'Pencairan limit PayLater kilat dan aman.',
    images: ['https://images.unsplash.com/photo-1556740758-90de374c12ad'],
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
  icons: {
    // Ganti '/favicon.ico' dengan '/nama-file-anda.png'
    // Pastikan diawali tanda slash '/' yang artinya folder public
    icon: '/icon.ico',

    // (Opsional) Icon untuk shortcut di desktop/android
    shortcut: '/icon.ico',

    // (Opsional) Icon khusus saat website di-bookmark di iPhone/iPad
    apple: '/icon.ico',
  },
  verification: {
    google: 'GANTI_DENGAN_KODE_VERIFIKASI_GOOGLE_SEARCH_CONSOLE', // Opsional: Masukkan kode dari GSC
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='id'
      className='scroll-smooth'>
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
