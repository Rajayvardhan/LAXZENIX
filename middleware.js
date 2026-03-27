// middleware.js (package.json ke saath banao)
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // TERE SAARRE VALID PAGES (40+ pages covered!) ✅
  const validPages = [
    // Main Pages
    '/',
    '/about-us',
    '/blog-details',
    '/contact-us',
    '/digital-agency',
    '/our-blog',
    '/our-portfolio-details',
    '/our-portfolio',
    '/our-team-details',
    '/OurService',
    '/privacy-policy',
    '/service-details',
    '/services',
    '/studio-agency',
    
    // Services Sub-pages
    '/OurService/',
    '/OurService/add-on-services/cloud-services',
    '/OurService/add-on-services/domain-hosting',
    '/OurService/add-on-services/it-maintenance-support',
    '/OurService/add-on-services/website-maintenance',
    
    // API Pages
    '/api/web-design',
    '/api/web-development',
    
    // Digital Marketing
    '/digital-marketing-services',
    '/content-marketing-services',
    '/local-seo-services',
    '/seo-services',
    '/social-media-optimization',
    
    // Fintech Solutions
    '/fintech-solutions',
    '/digital-banking-solution',
    '/anti-fraud-compliance-risk-management',
    '/payment-gateway-integration',
    
    // Mobile App
    '/mobile-app-development',
    
    // Performance
    '/performance-marketing-development',
    
    // Website
    '/website-design-development'
  ];
  
  // Invalid route = Custom 404
  if (!validPages.includes(pathname)) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|not-found|_next).*)',
  ],
};