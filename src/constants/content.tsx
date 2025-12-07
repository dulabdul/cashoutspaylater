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
  image?: string;
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
      'https://wa.me/60199199650?text=Halo%20Admin,%20saya%20nak%20cashout',
    instagram: 'https://instagram.com/cashoutspaylatermy',
  },
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Service', href: '#services' },
    { name: 'Advantage', href: '#advantages' },
    { name: 'Testimonial', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
};

// --- CONTENT DATA ---
export const LANDING_DATA: LandingData = {
  hero: {
    headline: 'SPAYLATER BOOSTPAYFLEX',
    description:
      'CASHOUT KILAT, TAK PERLU MENUNGGU! Ada limit PayLater dalam SPayLater, Boost, dan Grab? Nak tukar jadi tunai?',
    cta: 'Cairkan Sekarang!',
  },
  about: {
    title: 'About Us',
    content:
      'Perkhidmatan Pencairan Wang dari Platform PayLater dengan Mudah dan Cepat bersama Cashout SPayLater! Adakah anda mencari cara yang mudah dan cepat untuk mendapatkan wang tunai daripada had SPayLater atau Boost PayLater anda? Cashout SPayLater adalah penyelesaian terbaik untuk anda! Kami menawarkan perkhidmatan yang pantas, selamat, dan berbaloi untuk memenuhi keperluan kecemasan atau kewangan anda. Dengan proses yang mudah dan telus, anda boleh menikmati wang tunai segera daripada platform SPayLater dan Boost PayLater anda.',
  },
  whyUs: {
    title: 'Why Choose Us',
    content:
      'Memilih perkhidmatan kami bermaksud anda mengutamakan kepantasan, keselamatan dan kemudahan. Kami memahami bahawa keperluan dana yang mendesak tidak boleh ditangguhkan, sebab itu seluruh proses kami direka agar seefisien mungkin. Dengan reputasi yang boleh dipercayai, sokongan profesional serta sistem yang terbukti selamat, kami memastikan pengalaman cashout anda berjalan lancar dari awal hingga akhir.',
  },
  services: [
    {
      title: 'ShopeePay Later (SPayLater)',
      desc: 'Cairkan limit SPayLater anda pada bila-bila masa dengan proses yang pantas serta panduan lengkap daripada pasukan kami.',
      icon: <CreditCard className='w-10 h-10 text-[#EE4D2D]' />,
    },
    {
      title: 'Boost PayFlex',
      desc: 'Tukar limit Boost PayFlex anda kepada wang tunai dengan cara yang selamat dan efisien.',
      icon: <Zap className='w-10 h-10 text-[#EE4D2D]' />,
    },
    {
      title: 'Grab PayLater',
      desc: 'Nikmati perkhidmatan pencairan limit Grab PayLater tanpa sebarang halangan dan tanpa perlu menunggu lama.',
      icon: <Clock className='w-10 h-10 text-[#EE4D2D]' />,
    },
  ],

  advantages: [
    { title: 'Proses Pantas', desc: 'Wang cair hanya dalam beberapa minit.' },
    {
      title: 'Selamat & Dipercayai',
      desc: 'Sistem transaksi yang jelas tanpa caj tersembunyi.',
    },
    {
      title: 'Panduan Langkah demi Langkah',
      desc: 'Dibantu oleh CS sehingga transaksi berjaya.',
    },
    {
      title: 'Kadar Terbaik',
      desc: 'Kadar yang kompetitif dan mesra pelanggan.',
    },
    {
      title: 'Privasi Terpelihara',
      desc: 'Data anda selamat dan tidak dikongsi kepada pihak lain.',
    },
    {
      title: 'Perkhidmatan 24/7',
      desc: 'Kami sedia membantu pada bila-bila masa anda perlukan.',
    },
  ],

  testimonials: [
    {
      id: 1,
      caption: 'Testimoni 1 Pelanggan Kami',
      image: '/images/testimoni4.jpeg',
    },
    {
      id: 2,
      caption: 'Testimoni 2 Pelanggan Kami',
      image: '/images/testimoni1.jpeg',
    },
    {
      id: 3,
      caption: 'Testimoni 3 Pelanggan Kami',
      image: '/images/testimoni2.jpeg',
    },
    {
      id: 4,
      caption: 'Testimoni 4 Pelanggan Kami',
      image: '/images/testimoni3.jpeg',
    },
  ],

  ctaBottom: {
    headline: 'Perlu Dana Segera? Hubungi Kami!',
    button: 'Chat Admin Sekarang',
  },
};
