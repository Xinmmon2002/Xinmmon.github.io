import type {Metadata} from 'next';
import type {CSSProperties} from 'react';
import {notFound} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {SiteHeader,SiteFooter} from '@/components/site-header';
import {ScrollEffects} from '@/components/scroll-effects';
import {projects,getProject} from '@/lib/portfolio';
import {ProjectSheet} from '@/components/project-sheet';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);return p?{title:p.shortTitle,description:p.description}:{title:'未找到作品'}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=getProject(slug);
  if(!project)notFound();
  const next=projects[(projects.findIndex(p=>p.slug===slug)+1)%projects.length];
  return <div style={{'--work-accent':project.accent} as CSSProperties}>
    <ScrollEffects/><SiteHeader/>
    <main className="work-main">
      <section className="work-intro" aria-labelledby="project-title">
        <a href="/#works" className="back-link">← 返回作品目录</a>
        <div className="work-meta reveal"><span>{project.discipline}</span><span>{project.year}</span></div>
        <h1 id="project-title" className="reveal">{project.title}</h1>
        <div className="overview-grid project-summary reveal">{project.overview.map(text=><p key={text}>{text}</p>)}</div>
        {project.awards?.length?<ul className="awards-list reveal" aria-label="项目获奖">{project.awards.map(award=><li key={award}>{award}</li>)}</ul>:null}
      </section>
      <div className="waterfall" aria-label={project.shortTitle+'完整作品长卷'}>{project.pages.map((n,i)=><ProjectSheet number={n} first={i===0} key={n}/>)}</div>
      <a href={'/work/'+next.slug} className="next-project"><div><span>NEXT PROJECT</span><h2>{next.shortTitle}</h2></div><ArrowUpRight size={48} strokeWidth={1}/></a>
    </main>
    <SiteFooter/>
  </div>;
}
