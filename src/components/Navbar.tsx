'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';
import { BRAND_CONFIG } from '@/constants/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <span
              className={`font-bold text-2xl ${
                scrolled
                  ? BRAND_CONFIG.colors.text
                  : 'text-[#EE4D2D] lg:text-white'
              } flex items-center gap-2`}>
              <CreditCard className='w-8 h-8' />
              Cashout<span className='text-gray-800'>My</span>
            </span>
          </div>
          <nav className='hidden md:flex space-x-8'>
            {BRAND_CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-orange-200 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white shadow-sm'
                }`}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-700' : 'text-white bg-black/20'
              }`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-in slide-in-from-top-5'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {BRAND_CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:${BRAND_CONFIG.colors.text} hover:bg-gray-50`}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
