'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Clock,
  Utensils,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'Bella Vista',
  companyDescription:
    'Experience authentic Italian cuisine crafted with passion and the finest ingredients. From traditional recipes passed down through generations to modern culinary innovations, we bring you the true taste of Italy.',
  contactEmail: 'info@bellavista.com',
  contactPhone: '+1 (555) 123-FOOD',
  contactAddress: '123 Culinary Street, Downtown',
  newsletterTitle: 'Stay Hungry',
  newsletterPlaceholder: 'Enter your email for updates',
  newsletterDisclaimer:
    'Get exclusive offers, new menu updates, and special events. No spam, unsubscribe anytime.',
  section1Title: 'Menu',
  section2Title: 'Restaurant',
  section3Title: 'Services',
  section4Title: 'Legal',
  copyrightText: '© 2024 Bella Vista Restaurant. All rights reserved.',
  madeWithText: 'with love and passion',
  socialText: 'Follow us:',
  social1Href: 'https://twitter.com/bellavista',
  social2Href: 'https://facebook.com/bellavista',
  social3Href: 'https://instagram.com/bellavista',
  social4Href: 'https://linkedin.com/company/bellavista',
  social5Href: 'https://github.com',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // Restaurant-specific footer sections
  const footerSections = [
    {
      title: config.section1Title,
      links: [
        { name: 'Appetizers', href: '#appetizers', editableId: 'link-footer-appetizers' },
        { name: 'Main Courses', href: '#mains', editableId: 'link-footer-mains' },
        { name: 'Desserts', href: '#desserts', editableId: 'link-footer-desserts' },
        { name: 'Wine List', href: '#wine', editableId: 'link-footer-wine' },
        { name: "Chef's Special", href: '#specials', editableId: 'link-footer-specials' },
        { name: 'Seasonal Menu', href: '#seasonal', editableId: 'link-footer-seasonal' },
      ],
    },
    {
      title: config.section2Title,
      links: [
        { name: 'About Us', href: '#about', editableId: 'link-footer-about' },
        { name: 'Our Story', href: '#story', editableId: 'link-footer-story' },
        { name: "Chef's Profile", href: '#chef', editableId: 'link-footer-chef' },
        { name: 'Reviews', href: '#reviews', editableId: 'link-footer-reviews' },
        { name: 'Gallery', href: '#gallery', editableId: 'link-footer-gallery' },
        { name: 'Contact', href: '#contact', editableId: 'link-footer-contact' },
      ],
    },
    {
      title: config.section3Title,
      links: [
        { name: 'Reservations', href: '/reservations', editableId: 'link-footer-reservations' },
        { name: 'Online Ordering', href: '/order', editableId: 'link-footer-order' },
        { name: 'Catering', href: '/catering', editableId: 'link-footer-catering' },
        { name: 'Private Events', href: '/events', editableId: 'link-footer-events' },
        { name: 'Gift Cards', href: '/gift-cards', editableId: 'link-footer-gift-cards' },
        { name: 'Delivery', href: '/delivery', editableId: 'link-footer-delivery' },
      ],
    },
    {
      title: config.section4Title,
      links: [
        { name: 'Privacy Policy', href: '/privacy', editableId: 'link-footer-privacy' },
        { name: 'Terms of Service', href: '/terms', editableId: 'link-footer-terms' },
        { name: 'Allergen Info', href: '/allergens', editableId: 'link-footer-allergens' },
        { name: 'Nutritional Info', href: '/nutrition', editableId: 'link-footer-nutrition' },
        { name: 'Food Safety', href: '/safety', editableId: 'link-footer-safety' },
        { name: 'Accessibility', href: '/accessibility', editableId: 'link-footer-accessibility' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href },
    { name: 'Facebook', icon: Facebook, href: config.social2Href },
    { name: 'Instagram', icon: Instagram, href: config.social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href },
    { name: 'GitHub', icon: Github, href: config.social5Href },
  ];

  const bottomLinks = [
    { name: 'Sitemap', href: '/sitemap', editableId: 'link-footer-sitemap' },
    { name: 'Careers', href: '/careers', editableId: 'link-footer-careers' },
    { name: 'Press Kit', href: '/press', editableId: 'link-footer-press' },
    { name: 'Franchise', href: '/franchise', editableId: 'link-footer-franchise' },
  ];

  return (
    <footer id="footer" className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Restaurant Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Utensils className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Mon-Sun: 11:00 AM - 10:00 PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm" data-editable={`section${index + 1}Title`}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.editableId}
                        data-original-href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable="socialText">
                {config.socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                    data-editable-href={`social${index + 1}Href`}
                    data-original-href={social.href}
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.editableId}
                data-original-href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
