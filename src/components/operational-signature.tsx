import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { media } from '@/content/media';
export function OperationalSignature() {
 return <section className="operational-signature" aria-label="Enlace Operativo en campo"><div className="operational-photo"><Image {...media['equipo-comercio']} alt="Personal de Enlace Operativo uniformado en un establecimiento comercial" sizes="(max-width: 700px) 100vw, 33vw" placeholder="blur"/><span className="photo-label mono">ENLACE OPERATIVO / EN CAMPO</span></div><div className="operational-statement"><p className="eyebrow">EL FACTOR HUMANO</p><h2>Detrás del control,<br/>hay un equipo.</h2><Link href="/nosotros" className="text-link">Conoce a Enlace Operativo<ArrowUpRight size={17} aria-hidden="true"/></Link></div><div className="operational-data"><p><strong>+10</strong><span>Años de experiencia</span></p><p><strong>12</strong><span>Estados en el dossier</span></p><small>Información corporativa 2026.<br/>Disponibilidad por confirmar.</small></div></section>;
}
