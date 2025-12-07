import React from 'react';
import { MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';

export default function Hero() {
  const { headline, description, cta } = LANDING_DATA.hero;

  return (
    <div
      id='home'
      className='relative bg-gray-50 overflow-hidden min-h-screen flex items-center'>
      {/* Background Image Layer */}
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover object-center'
          // GANTI URL GAMBAR DI SINI:
          // Menggunakan gambar stok baru (Woman paying with phone/credit card - Happy vibe)
          src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop'
          alt='Kemudahan Pencairan Limit PayLater'
        />

        {/* OVERLAY ADJUSTMENT:
          Menggunakan Gradient dari Gelap (kiri) ke Transparan (kanan).
          - 'from-gray-900 via-gray-900/80': Memberikan latar belakang gelap solid di belakang teks agar terbaca jelas.
          - 'to-transparent': Membiarkan sisi kanan gambar tetap terang dan terlihat aslinya.
        */}
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent sm:to-black/10' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32'>
        <div className='md:w-2/3 lg:w-3/4'>
          {/* Headline dengan drop shadow halus untuk ekstra readability */}
          <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 drop-shadow-md'>
            {headline}
          </h1>

          <p className='mt-4 text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-sm max-w-lg'>
            {description}
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Button
              variant='primary'
              href={BRAND_CONFIG.links.whatsapp}
              className='border-2 border-transparent'>
              <MessageCircle className='w-5 h-5 mr-2' />
              {cta}
            </Button>
            {/* Button Outline disesuaikan agar tetap kontras di background gelap */}
            <Button
              variant='outline'
              href='#services'
              className='hover:bg-white/10'>
              Pelajari Layanan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
