import React from 'react';
import { CreditCard, MessageCircle, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '@/constants/content';

export default function Footer() {
  return (
    <footer className='bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12'>
        <div>
          <span className='font-bold text-2xl text-white flex items-center gap-2 mb-4'>
            <CreditCard className={`w-8 h-8 ${BRAND_CONFIG.colors.text}`} />
            cashoutspaylatermy.net
          </span>
          <p className='text-gray-400'>
            Solusi pencairan limit PayLater terpercaya, cepat, dan amanah.
            Melayani 24 jam dengan rate kompetitif.
          </p>
        </div>
        <div>
          <h4 className={`text-lg font-bold mb-4 ${BRAND_CONFIG.colors.text}`}>
            Menu Cepat
          </h4>
          <ul className='space-y-2 text-gray-400'>
            {BRAND_CONFIG.navLinks.slice(0, 4).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className='hover:text-white transition'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={`text-lg font-bold mb-4 ${BRAND_CONFIG.colors.text}`}>
            Kontak Kami
          </h4>
          <div className='space-y-4'>
            <a
              href={BRAND_CONFIG.links.whatsapp}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-3 text-gray-400 hover:text-white group'>
              <div className='bg-green-600 p-2 rounded-full group-hover:scale-110 transition'>
                <MessageCircle
                  size={20}
                  className='text-white'
                />
              </div>
              <span>WhatsApp Admin</span>
            </a>
          </div>
        </div>
      </div>
      <div className='text-center pt-8 border-t border-gray-900 text-gray-600 text-sm'>
        © {new Date().getFullYear()} cashoutspaylatermy.net. All rights
        reserved.
      </div>
    </footer>
  );
}
