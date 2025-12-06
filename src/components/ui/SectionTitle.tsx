import React from 'react';
import { BRAND_CONFIG } from '@/constants/content';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = true,
}) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-800 uppercase tracking-wide'>
      {title}
    </h2>
    {subtitle && <p className='text-gray-600 max-w-2xl mx-auto'>{subtitle}</p>}
    <div
      className={`h-1 w-24 ${BRAND_CONFIG.colors.primary} ${
        center ? 'mx-auto' : ''
      } mt-4 rounded-full`}></div>
  </div>
);

export default SectionTitle;
