import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Plus } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Service } from '@/content/site';

export function Button({ children, href, variant = 'primary', className = '' }: { children: ReactNode; href: string; variant?: 'primary' | 'secondary' | 'ghost'; className?: string }) {
  return <Link href={href} className={`button button-${variant} ${className}`} data-magnetic><span>{children}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>;
}
export function SectionHeading({ number, label, children, description }: { number: string; label: string; children: ReactNode; description?: string }) {
  return <div className="section-heading"><div className="eyebrow"><span className="cross">+</span><span>{number} / {label}</span></div><h2 data-reveal>{children}</h2>{description && <p data-reveal>{description}</p>}</div>;
}
export function ServiceCard({ service }: { service: Service }) {
  return <Link className="service-card" href={`/servicios/${service.slug}`}><span className="mono service-number">{service.id}</span><div><p className="eyebrow">{service.category}</p><h3>{service.title}</h3><p>{service.short}</p></div><ArrowUpRight className="card-arrow" aria-hidden="true" /></Link>;
}
export function StatCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) { return <div className="stat"><strong><span data-counter={value}>{value.toString().padStart(2,'0')}</span>{suffix}</strong><p>{label}</p></div>; }
export function CertificationBadge({ name, label }: { name: string; label: string }) { return <div className="certification"><span className="cert-mark mono" aria-hidden="true">DOC</span><div><strong>{name}</strong><p>{label}</p><small>Pendiente de validación</small></div></div>; }
export function TestimonialCard({ quote, name, role, company, sector, problem }: { quote: string; name: string; role: string; company: string; sector: string; problem: string }) { return <figure className="testimonial"><figcaption className="eyebrow">{sector} / Caso ilustrativo</figcaption><blockquote>“{quote}”</blockquote><div className="testimonial-person"><span className="avatar" aria-hidden="true">{name.slice(0,1)}R</span><div><strong>{name}</strong><p>{role} · {company}</p></div></div><p className="microcopy">Problema: {problem}. Testimonio de ejemplo; no es una referencia real.</p></figure>; }
export function Accordion({ items }: { items: ReadonlyArray<{ question: string; answer: string }> }) { return <div className="accordion">{items.map((item)=><details key={item.question}><summary>{item.question}<Plus size={18} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>; }
export function Marquee() { return <div className="marquee" aria-label="Personas, espacios y operación protegidos"><span>Personas</span><Plus aria-hidden="true"/><span>Espacios</span><Plus aria-hidden="true"/><span>Operación</span><Plus aria-hidden="true"/><span>Información</span><ArrowRight aria-hidden="true"/></div>; }
export function Wordmark() { return <span className="wordmark"><Image src="/assets/logo-eosp.png" width={48} height={52} alt="" className="official-logo"/><span className="wordmark-text">Enlace Operativo<span>SEGURIDAD PRIVADA</span></span></span>; }
