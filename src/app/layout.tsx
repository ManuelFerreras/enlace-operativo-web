import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import './globals.css';
const manrope = localFont({ src:'../../public/fonts/manrope-latin.woff2', display:'swap', variable:'--font-manrope', weight:'200 800' });
const mono = localFont({ src:'../../public/fonts/ibm-plex-mono-latin.woff2', display:'swap', variable:'--font-ibm', weight:'400' });
export const metadata: Metadata = { title: { default:'Enlace Operativo · Seguridad con criterio',template:'%s · Enlace Operativo' }, description: 'Seguridad privada, inteligencia y control para proteger lo que mueve a tu empresa. Empresa mexicana de seguridad privada.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es-MX" data-scroll-behavior="smooth" className={`${manrope.variable} ${mono.variable}`}><body><Nav/>{children}<Footer/></body></html>; }
