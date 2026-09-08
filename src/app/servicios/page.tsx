import type { Metadata } from 'next';
import { ServiceCard, Button } from '@/components/ui';
import { services } from '@/content/site';
import { CredentialsSection, ContactSection } from '@/components/home-sections';
export const metadata:Metadata={title:'Soluciones de seguridad',description:'Seguridad patrimonial, ejecutiva, corporativa, residencial, comercial y tecnología de monitoreo.'};
export default function Services(){return <main id="main"><section className="section page-intro"><p className="eyebrow">01 / SOLUCIONES</p><h1>Un plan para<br/><span className="accent-text">cada entorno.</span></h1><p>Seis capacidades que trabajan juntas. La combinación empieza por entender qué necesitas proteger.</p><Button href="/contacto" variant="ghost">Encontrar mi solución</Button></section><section className="section services-catalog" aria-label="Catálogo de soluciones"><div className="service-grid">{services.map(service=><ServiceCard service={service} key={service.slug}/>)}</div></section><CredentialsSection/><ContactSection/></main>}
