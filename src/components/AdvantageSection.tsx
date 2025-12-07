import React from 'react';
import { CheckCircle } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { LANDING_DATA, BRAND_CONFIG } from '@/constants/content';

export default function AdvantagesSection() {
  return (
    <Section
      id='advantages'
      className='bg-gray-50'>
      <SectionTitle title='Mengapa Kami' />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {LANDING_DATA.advantages.map((item, index) => (
          <div
            key={index}
            className={`flex items-start p-6 bg-white rounded-xl shadow-sm border-l-4 ${BRAND_CONFIG.colors.border}`}>
            <div className='flex-shrink-0 mt-1'>
              <CheckCircle className={`w-6 h-6 ${BRAND_CONFIG.colors.text}`} />
            </div>
            <div className='ml-4'>
              <h4 className='text-lg font-bold text-gray-900'>{item.title}</h4>
              <p className='mt-1 text-gray-600 text-sm'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
