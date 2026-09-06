import Link from 'next/link';
export function SiteHeader(){return <header className="site-header"><Link className="wordmark" href="/" aria-label="陶心悦作品集首页">TAO XINYUE<span className="wordmark-dot">.</span></Link><span className="header-discipline">VISUAL DESIGN & AI EXPLORATION</span><nav aria-label="主导航"><Link href="/#works">作品目录 <span>Index</span></Link><Link href="/about">关于我 <span>About</span></Link></nav></header>}
export function SiteFooter(){return <footer className="site-footer"><span>陶心悦 · TAO XINYUE</span><a href="mailto:taoxinyue@sjtu.edu.cn">taoxinyue@sjtu.edu.cn ↗</a><span>SELECTED WORKS / 2023—2026</span></footer>}

