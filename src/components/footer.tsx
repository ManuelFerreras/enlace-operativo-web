import Link from 'next/link';
import { Wordmark } from './ui';
import { brand } from '@/content/site';
export function Footer() { return <footer className="footer"><div className="footer-top"><Link href="/" aria-label="Enlace Operativo, inicio"><Wordmark/></Link><p>Tu operación avanza.<br/>Nosotros cuidamos el perímetro.</p><nav aria-label="Pie de página"><Link href="/contacto">Contacto</Link><Link href="/privacidad">Privacidad</Link><Link href="/design-system">Sistema de diseño</Link></nav></div><div className="footer-bottom"><span>© 2026 Enlace Operativo</span><span>{brand.demo}</span><span className="mono">MÉXICO · ES</span></div></footer>; }
