import React from 'react';
import { MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';

export default function CtaSection() {
  const { headline, button } = LANDING_DATA.ctaBottom;

  return (
    <section
      id='contact'
      className='py-20 bg-gray-900 text-center px-4 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden opacity-20'>
        <div
          className={`absolute w-96 h-96 rounded-full ${BRAND_CONFIG.colors.primary} -top-20 -left-20 blur-3xl`}></div>
        <div
          className={`absolute w-96 h-96 rounded-full ${BRAND_CONFIG.colors.primary} bottom-0 right-0 blur-3xl`}></div>
      </div>
      <div className='relative z-10 max-w-3xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
          {headline}
        </h2>
        <p className='text-gray-400 mb-10 text-lg'>
          Jangan biarkan kebutuhan mendesak menghambat Anda. Tim kami siap
          membantu pencairan limit Anda dengan aman.
        </p>
        <Button
          href={BRAND_CONFIG.links.whatsapp}
          variant='primary'
          className='text-lg px-10 py-4'>
          <MessageCircle className='w-6 h-6 mr-2' />
          {button}
        </Button>
      </div>
    </section>
  );
}
