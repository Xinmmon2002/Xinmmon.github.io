import {sitePath} from '@/lib/site-path';
import type {Metadata} from 'next';
import type {CSSProperties} from 'react';
import {notFound} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {SiteHeader,SiteFooter} from '@/components/site-header';
import {ScrollEffects} from '@/components/scroll-effects';
import {projects,getProject} from '@/lib/portfolio';
import {ProjectSheet} from '@/components/project-sheet';
import {ProjectFilm} from '@/components/project-film';
import {AnimalFarmProject} from '@/components/animal-farm-project';
import {Fragment} from 'react';
import '../project-intro.css';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);return p?{title:p.shortTitle,description:p.description}:{title:'未找到作品'}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=getProject(slug);
  if(!project)notFound();
  const next=projects[(projects.findIndex(p=>p.slug===slug)+1)%projects.length];
  return <div className={project.slug==='animal-farm'?'animal-project':undefined} style={{'--work-accent':project.accent} as CSSProperties}>
    <ScrollEffects/><SiteHeader/>
    <main className="work-main">
      <section className="work-intro" aria-labelledby="project-title">
        <a href={sitePath("/#works")} className="back-link">← 返回作品目录</a>
        <div className="work-meta reveal"><span>{project.discipline}</span><span>{project.year}</span></div>
        <h1 id="project-title" className="reveal">{project.title}</h1>
        <div className={'overview-grid project-summary reveal'+(!project.contribution?' project-summary-only':'')}>
          <section className="project-summary-column" aria-labelledby="project-overview-title">
            <h2 id="project-overview-title">项目简介<span lang="en">PROJECT OVERVIEW</span></h2>
            <div className="project-overview-copy">{project.overview.map(text=><p key={text}>{text}</p>)}</div>
          </section>
          {project.contribution&&<section className="project-summary-column" aria-labelledby="project-role-title">
            <h2 id="project-role-title">个人职责与产出<span lang="en">ROLE &amp; DELIVERABLES</span></h2>
            <p>{project.contribution}</p>
          </section>}
        </div>
        {project.awards?.length?<ul className="awards-list reveal" aria-label="项目获奖">{project.awards.map(award=><li key={award}>{award}</li>)}</ul>:null}
      </section>
      <div className="waterfall" aria-label={project.shortTitle+'完整作品长卷'}>
        {project.slug==='animal-farm'?<AnimalFarmProject/>:null}
        {project.pages.map((n,i)=><Fragment key={n}>
          <ProjectSheet number={n} first={i===0}/>
          {project.slug==='ejin-savorscape'&&n===38?<ProjectFilm/>:null}
        </Fragment>)}
        {project.slug==='yangtze-brand'?<img src={sitePath("/assets/yangtze-city-loop.gif")} alt="YANGTZE 城市品牌应用动态展示" width={1138} height={640} loading="lazy" decoding="async" style={{display:'block',width:'100%',height:'auto'}}/>:null}
        {project.slug==='alleyway-dreams'?<img src={sitePath("/assets/alleyway-illustration-loop.webp")} alt="童梦巷陌·老物疗心插画动态展示" width={2554} height={1076} loading="lazy" decoding="async" style={{display:'block',width:'100%',height:'auto'}}/>:null}
      </div>
      <a href={sitePath('/work/'+next.slug)} className="next-project"><div><span>NEXT PROJECT</span><h2>{next.shortTitle}</h2></div><ArrowUpRight size={48} strokeWidth={1}/></a>
    </main>
    <SiteFooter/>
  </div>;
}
