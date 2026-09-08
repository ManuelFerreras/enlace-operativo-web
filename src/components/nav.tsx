'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '@/content/site';
import { Wordmark } from './ui';
export function Nav() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  function close() { dialog.current?.close(); document.body.style.overflow = ''; }
  return <><a href="#main" className="skip-link">Saltar al contenido</a><header className="nav"><Link href="/" aria-label="Enlace Operativo, inicio"><Wordmark/></Link><nav className="desktop-nav" aria-label="Principal">{navigation.map(item=><Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href)?'page':undefined}>{item.label}</Link>)}</nav><div className="nav-actions"><span className="locale mono">MX / ES</span><Link href="/contacto" className="nav-contact">Hablemos <ArrowUpRight size={16} aria-hidden="true"/></Link><button className="menu-toggle" aria-label="Abrir menú" onClick={()=>{dialog.current?.showModal();document.body.style.overflow='hidden';}}><Menu size={22}/></button></div></header><dialog ref={dialog} className="menu-dialog" onClose={()=>{document.body.style.overflow='';}}><div className="menu-top"><Wordmark/><button className="icon-button" onClick={close} aria-label="Cerrar menú"><X/></button></div><nav aria-label="Menú expandido">{[{href:'/',label:'Inicio'},...navigation,{href:'/contacto',label:'Hablemos'}].map((item,i)=><Link onClick={close} key={item.href} href={item.href}><span className="mono">0{i+1}</span>{item.label}<ArrowUpRight/></Link>)}</nav><p className="mono">SEGURIDAD CON CRITERIO. / MÉXICO</p></dialog></>;
}
