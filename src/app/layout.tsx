import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'LINDE · Seguridad con criterio', description: 'Seguridad privada, inteligencia y control para proteger lo que mueve a tu empresa. Propuesta de marca en validación.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es-MX"><body>{children}</body></html>; }
