import {sitePath} from '@/lib/site-path';
import type {Metadata} from 'next';
import {SiteHeader,SiteFooter} from '@/components/site-header';
import Image from 'next/image';
import {profileIntro,profileProjects,profileSections,profileWorkflow} from '@/lib/profile';
import './about.css';
export const metadata:Metadata={title:'关于我',description:'陶心悦，上海交通大学设计专业，关注品牌视觉、包装文创与 AI 设计工作流。'};
function ProfileSection({section,skill=false}:{section:typeof profileSections[number];skill?:boolean}){
  return <section className={'profile-section'+(skill?' profile-skill-section':'')}>
    <h2>{section.title}{!skill&&<span>{section.english}</span>}</h2>
    {section.entries.map(entry=><div className="profile-entry" key={entry.title+entry.body}>
      <h3>{entry.title}</h3>
      <p>{entry.body}</p>
    </div>)}
  </section>;
}

export default function About(){
  const [education,awards,internship,ai,craft]=profileSections;
  return <><SiteHeader/>
    <main className="profile-page">
      <header className="profile-header">
        <p>PERSONAL PROFILE / 个人简介</p>
        <h1>About me.</h1>
      </header>
      <div className="profile-layout">
        <aside className="profile-identity" aria-label="个人信息">
          <Image className="profile-portrait" src={sitePath("/assets/profile/tao-xinyue.png")} alt="陶心悦的个人照片" width={354} height={349} priority unoptimized/>
          <h2>陶心悦 <span>Tao Xinyue</span></h2>
          <p className="profile-role">求职方向：视觉设计师</p>
          <address>
            <a href="tel:15267889978">电话：15267889978</a>
            <a href="mailto:taoxinyue@sjtu.edu.cn">邮箱：taoxinyue@sjtu.edu.cn</a>
            <span>浙江 宁波</span>
          </address>
        </aside>
        <div className="profile-background">
          <section className="profile-section profile-summary">
            <h2>个人简介<span>PROFILE</span></h2>
            <p>{profileIntro}</p>
          </section>
          <ProfileSection section={education}/>
          <ProfileSection section={awards}/>
        </div>
        <div className="profile-career">
          <div className="profile-skills-panel">
            <p className="profile-skills-eyebrow">TOOLS &amp; SKILLS</p>
            <div className="profile-skills-columns">
              <ProfileSection section={ai} skill/>
              <ProfileSection section={craft} skill/>
            </div>
            <p className="profile-workflow-note">{profileWorkflow}</p>
          </div>
          <div className="profile-practice">
            <ProfileSection section={internship}/>
            <section className="profile-section">
              <h2>项目经历<span>PROJECTS</span></h2>
              {profileProjects.map(project=><div className="profile-entry" key={project.slug}>
                <h3><a href={sitePath('/work/'+project.slug)}>{project.title} <span aria-hidden="true">↗</span></a></h3>
                <p>{project.year}</p>
              </div>)}
            </section>
          </div>
        </div>
      </div>
    </main><SiteFooter/>
  </>;
}
