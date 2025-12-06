import React from 'react';
import { MessageCircle } from 'lucide-react';

import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';
import Button from './ui/Button';

export default function Hero() {
  const { headline, description, cta } = LANDING_DATA.hero;

  return (
    <div
      id='home'
      className='relative bg-gray-900 overflow-hidden min-h-screen flex items-center'>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
          alt='Happy person holding smartphone'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#EE4D2D] to-orange-900 opacity-90 mix-blend-multiply' />
      </div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32'>
        <div className='md:w-2/3 lg:w-1/2'>
          <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6'>
            {headline}
          </h1>
          <p className='mt-4 text-xl text-gray-100 mb-8 leading-relaxed'>
            {description}
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button
              variant='white'
              href={BRAND_CONFIG.links.whatsapp}
              className={BRAND_CONFIG.colors.text}>
              <MessageCircle className='w-5 h-5 mr-2' />
              {cta}
            </Button>
            <Button
              variant='outline'
              href='#services'>
              Pelajari Layanan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
