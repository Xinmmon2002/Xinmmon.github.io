import type {Metadata} from 'next';
import type {CSSProperties} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {SiteHeader,SiteFooter} from '@/components/site-header';
import {ScrollEffects} from '@/components/scroll-effects';
import {projects,getProject,pageImage} from '@/lib/portfolio';
import {pageContent} from '@/lib/page-content';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);return p?{title:p.shortTitle,description:p.description}:{title:'未找到作品'}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getProject(slug);if(!project)notFound();const next=projects[(projects.findIndex(p=>p.slug===slug)+1)%projects.length];return <div style={{'--work-accent':project.accent} as CSSProperties}><ScrollEffects/><SiteHeader/><main className="work-main"><h1 className="sr-only">{project.title}</h1><div className="waterfall" aria-label={project.shortTitle+'完整作品长卷'}>{project.pages.map((n,i)=><a className="waterfall-page reveal" href={pageImage(n)} target="_blank" rel="noopener noreferrer" aria-label={project.shortTitle+'，放大查看第'+(i+1)+'张作品图'} key={n}><Image src={pageImage(n)} width="1920" height="1080" alt={project.shortTitle+' · '+(pageContent[n]?.label||'作品展示')} loading={i<2?'eager':'lazy'} decoding="async"/></a>)}</div><Link href={'/work/'+next.slug} className="next-project"><div><span>NEXT PROJECT</span><h2>{next.shortTitle}</h2></div><ArrowUpRight size={48} strokeWidth={1}/></Link></main><SiteFooter/></div>}
