import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Contoh jika ada folder yang tidak ingin diindex
    },
    sitemap: 'https://cashoutspaylatermy.net/sitemap.xml',
  };
}