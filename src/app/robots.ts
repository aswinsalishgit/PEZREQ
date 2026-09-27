import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/wishlist', '/cart', '/account', '/api/*'],
    },
    sitemap: 'https://pezreq.com/sitemap.xml',
  };
}
