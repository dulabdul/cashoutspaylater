import React from 'react';
import { Image as ImageIcon, ZoomIn } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';

export default function TestimonialSection() {
  return (
    <Section
      id='testimonials'
      className='bg-white'>
      <SectionTitle
        title='Bukti & Testimoni'
        subtitle='Screenshot asli percakapan dan transaksi sukses dengan klien kami (Privasi disensor).'
      />

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        {LANDING_DATA.testimonials.map((testi, index) => (
          <div
            key={index}
            className='group relative flex flex-col items-center'>
            {/* Container Aspect Ratio 9:16 (Standard Layar HP) 
               Memastikan semua screenshot tampil seragam tingginya
             */}
            <div
              className={`aspect-[9/16] w-full bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:${BRAND_CONFIG.colors.border} group-hover:border-2`}>
              {testi.image ? (
                <img
                  src={testi.image}
                  alt={testi.caption}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer'
                  loading='lazy'
                />
              ) : (
                /* Fallback jika field 'image' kosong di content.tsx */
                <div className='w-full h-full flex flex-col items-center justify-center p-4 text-gray-400'>
                  <ImageIcon className='w-10 h-10 mb-2 opacity-50' />
                  <span className='text-xs text-center'>Image Not Found</span>
                </div>
              )}

              {/* Overlay Zoom Effect saat Hover */}
              <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none'>
                <div className='bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg'>
                  <ZoomIn className='text-white w-6 h-6' />
                </div>
              </div>
            </div>

            <p className='mt-4 text-sm font-bold text-gray-800 text-center px-2 leading-tight'>
              {testi.caption}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
