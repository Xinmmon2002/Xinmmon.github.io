'use client';

import {useRef,useState} from 'react';
import {Play} from 'lucide-react';

export function ProjectFilm(){
  const video=useRef<HTMLVideoElement>(null);
  const [started,setStarted]=useState(false);
  const [error,setError]=useState(false);
  async function play(){
    if(!video.current)return;
    setError(false);
    setStarted(true);
    try{await video.current.play();}
    catch{setStarted(false);setError(true);}
  }
  return <section className="project-film" aria-label="额吉食光作品视频">
    <video ref={video} src="/assets/ejin-ncda-film.mp4" poster="/assets/ejin-ncda-poster.jpg" width={1920} height={1080} controls={started} preload="none" playsInline autoPlay={false} loop={false}
      onPlay={()=>setStarted(true)}
      onEnded={()=>{setStarted(false);video.current?.load();}}
      aria-label="额吉食光 NCDA 宣讲视频"/>
    {!started?<button type="button" className="project-film-play" onClick={play} aria-label={error?'重新播放额吉食光视频':'播放额吉食光视频'}><Play size={30} fill="currentColor" strokeWidth={1.5}/></button>:null}
    {error?<p className="project-film-error" role="status">暂时无法播放，请点击重试。</p>:null}
  </section>;
}
