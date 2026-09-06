import type { CSSProperties } from 'react';
import layouts from '@/lib/project-layouts.json';
import originalFonts from '@/lib/project-fonts.json';

type Box = [number, number, number, number];
type Metric = { unit: string; value?: number };
type Segment = { t: string; f: string; fs: string; size: number; weight?: number; c?: string; lh: Metric; ls: Metric; d?: string; tc?: string };
type Layer = { id: string; k: 'text' | 'asset' | 'shape'; b: Box; clip?: Box; o?: number; src?: string; imageStyle?: CSSProperties; assetFrame?: { b: Box; matrix: [number, number, number, number, number, number] }; image?: boolean; name?: string; align?: string; valign?: string; paragraph?: number; segs?: Segment[]; fill?: string; stroke?: string; sw?: number; radius?: number; ellipse?: boolean; line?: boolean };
type Sheet = { n: number; id: string; w: number; h: number; bg: string; layers: Layer[] };
const sheets = layouts as unknown as Record<number, Sheet>;
const fonts = originalFonts as Record<string, {family: string; file: string}>;
const unit = (value: number, width: number) => `${value / width * 100}cqw`;

function position(layer: Layer, page: Sheet): CSSProperties {
  const [x,y,w,h]=layer.b;
  const style: CSSProperties={left:`${x/page.w*100}%`,top:`${y/page.h*100}%`,width:`${w/page.w*100}%`,height:`${h/page.h*100}%`,opacity:layer.o??1};
  if(layer.clip&&w>0&&h>0){
    const [cx,cy,cw,ch]=layer.clip;
    const inset=[Math.max(0,cy-y)/h,Math.max(0,x+w-cx-cw)/w,Math.max(0,y+h-cy-ch)/h,Math.max(0,cx-x)/w];
    if(inset.some(v=>v>0))style.clipPath=`inset(${inset.map(v=>v*100+'%').join(' ')})`;
  }
  return style;
}

function typography(segment: Segment, width: number): CSSProperties {
  const f=segment.f;
  const family=fonts[f]?.family??(f==='Bebas Neue'?'Portfolio Bebas':f==='Inter'?'Portfolio Inter':'Portfolio Noto');
  const weight=fonts[f]?400:/semi\s?bold/i.test(segment.fs)?600:/bold/i.test(segment.fs)?700:/medium/i.test(segment.fs)?500:segment.weight??400;
  return {fontFamily:`'${family}', 'Microsoft YaHei', sans-serif`,fontWeight:weight,fontStyle:/italic/i.test(segment.fs)?'italic':'normal',fontSize:unit(segment.size,width),color:segment.c??'inherit',lineHeight:segment.lh.unit==='PIXELS'?unit(segment.lh.value??segment.size*1.2,width):segment.lh.unit==='PERCENT'?(segment.lh.value??120)/100:'normal',letterSpacing:segment.ls.unit==='PERCENT'?`${(segment.ls.value??0)/100}em`:unit(segment.ls.value??0,width),textDecoration:segment.d==='UNDERLINE'?'underline':segment.d==='STRIKETHROUGH'?'line-through':undefined,textTransform:segment.tc==='UPPER'?'uppercase':segment.tc==='LOWER'?'lowercase':undefined};
}

export function ProjectSheet({number,first=false}:{number:number;first?:boolean}){
  const page=sheets[number];
  if(!page)throw new Error(`Missing project layout: ${number}`);
  let reveal=0;
  return <section className="project-sheet" style={{aspectRatio:`${page.w}/${page.h}`,background:page.bg}} aria-label="作品图文展示">
    {page.layers.map(layer=>{
      const outer=position(layer,page);
      const delay=`${Math.min(reveal++%5,4)*45}ms`;
      if(layer.k==='text'){
        const segments=layer.segs??[];
        const align=layer.align==='justified'?'justify':layer.align as CSSProperties['textAlign'];
        return <div key={layer.id} className="sheet-layer sheet-text" data-figma-node={layer.id} style={{...outer,textAlign:align,display:'flex',flexDirection:'column',justifyContent:layer.valign==='center'?'center':layer.valign==='bottom'?'flex-end':'flex-start'}}>
          <div className="layer-reveal text-reveal" style={{'--reveal-delay':delay} as CSSProperties}>
            <div className="sheet-text-content" style={segments[0]?typography(segments[0],page.w):undefined}>{segments.map((segment,i)=><span key={i} style={typography(segment,page.w)}>{segment.t}</span>)}</div>
          </div>
        </div>;
      }
      if(layer.k==='asset'){
        const animated=layer.image||layer.b[3]>40;
        const frame=layer.assetFrame;
        // Preserve the source crop in its local frame before applying Figma's rotation.
        const frameStyle:CSSProperties|undefined=frame?{position:'absolute',left:`${frame.b[0]/layer.b[2]*100}%`,top:`${frame.b[1]/layer.b[3]*100}%`,width:`${frame.b[2]/layer.b[2]*100}%`,height:`${frame.b[3]/layer.b[3]*100}%`,transform:`matrix(${frame.matrix.join(',')})`,transformOrigin:'top left',overflow:'hidden'}:undefined;
        const image=<img src={layer.src} style={layer.imageStyle} width={Math.max(1,Math.round(frame?.b[2]??layer.b[2]))} height={Math.max(1,Math.round(frame?.b[3]??layer.b[3]))} alt={layer.image?(layer.name??'作品图片'):''} loading={first?'eager':'lazy'} decoding="async"/>;
        const content=layer.image?<a className="sheet-image-link" href={layer.src} target="_blank" rel="noopener noreferrer" aria-label="放大查看作品图片">{image}</a>:image;
        return <div key={layer.id} className="sheet-layer sheet-asset" data-figma-node={layer.id} style={outer}><div className={animated?'layer-reveal image-reveal':'sheet-graphic'} style={{'--reveal-delay':delay} as CSSProperties}>
          {frame?<div style={frameStyle}>{content}</div>:content}
        </div></div>;
      }
      const border=layer.stroke?`${unit(layer.sw||1,page.w)} solid ${layer.stroke}`:undefined;
      return <div key={layer.id} className="sheet-layer sheet-shape" aria-hidden="true" style={{...outer,background:layer.fill??undefined,border:layer.line?undefined:border,borderTop:layer.line&&layer.b[2]>0?border:undefined,borderLeft:layer.line&&layer.b[2]===0?border:undefined,borderRadius:layer.ellipse?'50%':unit(layer.radius??0,page.w)}}/>;
    })}
  </section>;
}
