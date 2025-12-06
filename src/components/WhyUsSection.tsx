import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';

export default function WhyUsSection() {
  const { title, content } = LANDING_DATA.whyUs;

  return (
    <section
      id='why-us'
      className='bg-gray-50 py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <div
          className={`${BRAND_CONFIG.colors.primary} rounded-3xl p-8 md:p-12 shadow-xl text-white`}>
          <div className='grid md:grid-cols-3 gap-8 items-center'>
            <div className='md:col-span-2'>
              <h2 className='text-3xl font-bold mb-4'>{title}</h2>
              <p className='text-orange-100 text-lg leading-relaxed'>
                {content}
              </p>
            </div>
            <div className='flex justify-center md:justify-end'>
              <Button
                variant='white'
                href={BRAND_CONFIG.links.whatsapp}>
                Hubungi Kami
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
