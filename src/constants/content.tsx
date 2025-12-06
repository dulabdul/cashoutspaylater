import { CreditCard, Zap, Clock } from 'lucide-react';
import { ReactNode } from 'react';

// --- INTERFACES ---
export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface AdvantageItem {
  title: string;
  desc: string;
}

export interface TestimonialItem {
  id: number;
  caption: string;
  image?: string; // Optional jika belum ada gambar
}

export interface LandingData {
  hero: {
    headline: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  whyUs: {
    title: string;
    content: string;
  };
  services: ServiceItem[];
  advantages: AdvantageItem[];
  testimonials: TestimonialItem[];
  ctaBottom: {
    headline: string;
    button: string;
  };
}

// --- CONFIGURATION ---
export const BRAND_CONFIG = {
  colors: {
    primary: 'bg-[#EE4D2D]',
    text: 'text-[#EE4D2D]',
    border: 'border-[#EE4D2D]',
    hover: 'hover:bg-orange-700',
  },
  links: {
    whatsapp:
      'https://wa.me/60199199650?text=Halo%20Admin,%20saya%20mau%20cairkan%20limit%20PayLater',
    instagram: 'https://instagram.com/cashoutspaylatermy',
  },
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Layanan', href: '#services' },
    { name: 'Keunggulan', href: '#advantages' },
    { name: 'Bukti Transaksi', href: '#testimonials' },
    { name: 'Kontak', href: '#contact' },
  ],
};

// --- CONTENT DATA ---
export const LANDING_DATA: LandingData = {
  hero: {
    headline: 'Cairkan Limit ShopeePay Later Anda dalam Hitungan Menit',
    description:
      'Butuh dana cepat tanpa ribet? Kami membantu Anda mencairkan limit SPayLater, Boost PayFlex, dan Grab PayLater dengan proses aman, cepat, dan transparan. Cocok untuk kebutuhan mendadak, modal usaha, atau keperluan harian.',
    cta: 'Cairkan Sekarang!',
  },
  about: {
    title: 'Tentang Kami',
    content:
      'cashoutspaylatermy.net adalah layanan cashout/gestun terpercaya yang beroperasi dengan sistem profesional dan aman. Kami hadir untuk membantu Anda mengubah limit PayLater menjadi dana tunai secara cepat tanpa proses yang rumit. Dukungan CS responsif dan proses yang terstruktur membuat pengalaman Anda jauh lebih mudah dan nyaman.',
  },
  whyUs: {
    title: 'Why Choose Us',
    content:
      'Memilih layanan kami berarti mengutamakan kecepatan, keamanan, dan kemudahan. Kami mengerti bahwa kebutuhan dana mendadak tidak bisa menunggu, dan karena itu seluruh proses kami dibuat se-efisien mungkin. Dengan reputasi terpercaya, support profesional, dan sistem yang terbukti aman, kami memastikan pengalaman cashout Anda berjalan lancar dari awal hingga akhir.',
  },
  services: [
    {
      title: 'ShopeePay Later (SPayLater)',
      desc: 'Cairkan limit SPayLater Anda kapan saja dengan proses cepat dan panduan lengkap dari tim kami.',
      icon: <CreditCard className='w-10 h-10 text-[#EE4D2D]' />,
    },
    {
      title: 'Boost PayFlex',
      desc: 'Konversi limit Boost PayFlex menjadi dana tunai secara aman dan efisien.',
      icon: <Zap className='w-10 h-10 text-[#EE4D2D]' />,
    },
    {
      title: 'Grab PayLater',
      desc: 'Nikmati layanan pencairan limit Grab PayLater tanpa hambatan dan tanpa menunggu lama.',
      icon: <Clock className='w-10 h-10 text-[#EE4D2D]' />,
    },
  ],
  advantages: [
    { title: 'Proses Cepat', desc: 'Dana cair hanya dalam hitungan menit.' },
    {
      title: 'Aman & Terpercaya',
      desc: 'Sistem transaksi jelas, tanpa biaya tersembunyi.',
    },
    {
      title: 'Panduan Step-by-Step',
      desc: 'Dibantu CS sampai transaksi berhasil.',
    },
    { title: 'Rate Terbaik', desc: 'Tarif kompetitif dan ramah pelanggan.' },
    {
      title: 'Privasi Terjaga',
      desc: 'Data Anda aman dan tidak dibagikan ke pihak lain.',
    },
    { title: 'Layanan 24/7', desc: 'Kami siap membantu kapan pun Anda butuh.' },
  ],
  testimonials: [
    {
      id: 1,
      caption: 'Testimoni 1 Customer Kami',
      // Pastikan file gambar ada di folder: public/images/testimoni/
      image: '/images/testimoni4.jpeg',
    },
    {
      id: 2,
      caption: 'Testimoni 2 Customer Kami',
      image: '/images/testimoni1.jpeg',
    },
    {
      id: 3,
      caption: 'Testimoni 3 Customer Kami',
      image: '/images/testimoni2.jpeg',
    },
    {
      id: 4,
      caption: 'Testimoni 4 Customer Kami',
      image: '/images/testimoni3.jpeg',
    },
  ],
  ctaBottom: {
    headline: 'Butuh Dana Sekarang? Hubungi Kami!',
    button: 'Chat Admin Sekarang',
  },
};
