import { SiteHeader, SiteFooter } from '@/components/site-header';
import { PortfolioIndex } from '@/components/portfolio-index';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import './home.css';

export default function Home(){return <><SiteHeader/><main className="home-main"><div className="masthead"><div><p className="eyebrow">SELECTED WORKS · 2023—2026</p><h1>PORTFOLIO<span className="title-period">.</span></h1></div><div className="masthead-aside"><span>陶心悦 / Tao Xinyue</span><p>视觉传达设计<br/>与 AI 创意探索</p></div></div>
  <Link className="home-about-link" href="/about" aria-label="关于我：查看陶心悦的个人介绍">
    <Image className="home-about-photo" src="/assets/profile/tao-xinyue.png" alt="" width={354} height={349} priority unoptimized/>
    <span className="home-about-label"><span>陶心悦 / TAO XINYUE</span><strong>关于我 <span lang="en">About me</span></strong></span>
    <span className="home-about-description">上海交通大学设计本硕背景，<br/>专注品牌视觉与 AI 创意探索。</span>
    <span className="home-about-arrow" aria-hidden="true"><ArrowUpRight size={28} strokeWidth={1.5}/></span>
  </Link>
  <PortfolioIndex/></main><SiteFooter/></>}
