'use client';
import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/content/site';
import { SectionHeading } from './ui';
import { PerimeterDiagram } from './perimeter-diagram';
export function ServiceExplorer() {
 const [active,setActive]=useState(0);
 function select(index:number){setActive(index);window.dispatchEvent(new CustomEvent('enlace:scene-mode',{detail:services[index].shape}));}
 return <section className="section services-section" id="soluciones"><div className="service-intro"><SectionHeading number="01" label="SOLUCIONES">Cada riesgo merece<br/>su propia estrategia.</SectionHeading><p>Unimos presencia, supervisión y tecnología en un plan que responde a tu entorno.</p><div className="service-scene-slot" data-scene-target="services"><PerimeterDiagram/><span className="mono">CAPA {services[active].id} / {services[active].category}</span></div></div><div className="service-list">{services.map((service,index)=><article className={active===index?'service-item active':'service-item'} key={service.id}><h3><button aria-expanded={active===index} aria-controls={'service-panel-'+service.id} onClick={()=>select(index)} onPointerEnter={e=>{if(e.pointerType==='mouse')select(index);}}><span className="mono">{service.id}</span><span>{service.title}</span><Plus aria-hidden="true" size={20}/></button></h3><div className="service-panel" id={'service-panel-'+service.id} hidden={active!==index}><p>{service.description}</p><ul>{service.includes.map(item=><li key={item}>{item}</li>)}</ul><Link className="text-link" href={'/servicios/'+service.slug}>Explorar solución<ArrowUpRight size={17} aria-hidden="true"/></Link></div></article>)}</div></section>;
}
