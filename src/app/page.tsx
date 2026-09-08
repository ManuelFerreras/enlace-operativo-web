import { Hero } from '@/components/hero';
import { Marquee, SectionHeading, ServiceCard, Button } from '@/components/ui';
import { services } from '@/content/site';
import { OperationalSignature } from '@/components/operational-signature';
export default function Home() { return <main id="main"><Hero/><OperationalSignature/><Marquee/><section className="section" id="soluciones"><SectionHeading number="01" label="SOLUCIONES">Cada riesgo merece<br/>su propia estrategia.</SectionHeading><div className="service-grid">{services.map(service=><ServiceCard key={service.id} service={service}/>)}</div><Button href="/servicios" variant="ghost">Explorar todas las soluciones</Button></section></main>; }
