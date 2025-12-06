import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '@/constants/content';

export default function FloatingButtons() {
  return (
    <>
      <a
        href={BRAND_CONFIG.links.whatsapp}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 animate-bounce'
        aria-label='Chat WhatsApp'>
        <MessageCircle
          size={28}
          fill='white'
          className='text-green-500'
        />
      </a>
    </>
  );
}
