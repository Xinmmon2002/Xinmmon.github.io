import {sitePath} from '@/lib/site-path';
import type { Metadata } from 'next';
import './globals.css';
import './animal-farm.css';
export const metadata: Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL??'https://tao-xinyue-portfolio.yaow2564.chatgpt.site'),title:{default:'陶心悦 · 个人作品集',template:'%s · 陶心悦作品集'},description:'陶心悦的个人作品集，涵盖品牌视觉、公共艺术、包装文创与 AIGC 创意探索。',icons:{icon:sitePath('/favicon.svg')}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body><a className="skip-link" href="#main-content">跳至内容</a><div id="main-content">{children}</div></body></html>}
