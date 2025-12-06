import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => (
  <section
    id={id}
    className={`py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
    {children}
  </section>
);

export default Section;
