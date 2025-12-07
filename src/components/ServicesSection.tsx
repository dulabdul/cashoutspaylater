import React from 'react';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { LANDING_DATA } from '@/constants/content';

export default function ServicesSection() {
  return (
    <Section
      id='services'
      className='bg-white'>
      <SectionTitle
        title='Khidmat Kami'
        subtitle='Kami melayani pencairan berbagai jenis PayLater populer'
      />
      <div className='grid md:grid-cols-3 gap-8'>
        {LANDING_DATA.services.map((service, index) => (
          <div
            key={index}
            className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1'>
            <div className='mb-6 bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto'>
              {service.icon}
            </div>
            <h3 className='text-xl font-bold text-center mb-4 text-gray-900'>
              {service.title}
            </h3>
            <p className='text-gray-600 text-center leading-relaxed'>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
