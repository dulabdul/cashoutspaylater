import React from 'react';
import { Shield } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';

export default function AboutSection() {
  const { title, content } = LANDING_DATA.about;

  return (
    <Section
      id='about'
      className='bg-white'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div className='relative'>
          <div
            className={`absolute -inset-4 ${BRAND_CONFIG.colors.primary} opacity-20 rounded-xl transform -rotate-2`}></div>
          <img
            src='https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            alt='Tim Profesional Cashout'
            className='relative rounded-xl shadow-2xl w-full object-cover h-[400px]'
          />
        </div>
        <div>
          <SectionTitle
            title={title}
            center={false}
          />
          <p className='text-lg text-gray-600 leading-relaxed mb-6'>
            {content}
          </p>
          <div className='flex items-center gap-2 text-sm font-semibold text-gray-500'>
            <Shield className={`w-5 h-5 ${BRAND_CONFIG.colors.text}`} />
            <span>Profesional & Terpercaya</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
