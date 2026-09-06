export type CategoryId = 'commercial' | 'awards' | 'aigc';
export type Project = { slug: string; title: string; shortTitle: string; english: string; category: CategoryId; year: string; discipline: string; description: string; overview: string[]; awards?: string[]; pages: number[]; accent: string };
export const projects: Project[] = [
{slug:'fuyao-glass',title:'福耀科技大学大型琉璃艺术装置',shortTitle:'福耀 · 琉璃艺术装置',english:'Glass, Light & Possibility',category:'commercial',year:'2023—2024',discipline:'公共艺术 / 材料与光影',description:'以古法琉璃连接传统工艺与当代光影，探索公共艺术与校园空间的关系。',overview:['作品为福耀科技大学图书馆空间而设计，以古法琉璃连接校园精神、传统工艺与当代科技。手工琉璃莲花层叠组成艺术墙，让材料自身的色彩、厚度和纹样形成丰富层次。','装置由手工琉璃外立面、不锈钢背板与可编程 LED 显示屏组成。数字影像穿过背板微孔，再经琉璃折射与叠色，随着观看角度呈现持续变化的光影。'],pages:[5,6,7,8,9,10],accent:'#207e73'},
{slug:'fuyao-identity',title:'福耀科技大学视觉形象识别系统手册',shortTitle:'福耀 · 视觉识别系统',english:'An Identity with Heart',category:'commercial',year:'2024',discipline:'品牌识别 / VI 系统',description:'从五心莲花出发，构建贯穿校园场景与日常触点的视觉识别系统。',overview:['校徽以甲骨文“心”字为灵感，将五个“心”围合为五瓣莲花，在古老字形中寄托大学的办学初心。莲花造型呼应“心若菩提”，延续“敬天爱人，止于至善”的校训。','提取五心莲花的基本单元，以阵列、围合、连缀与交错建立辅助图形，并将福耀蓝、福耀红延展至礼品、办公、导视和身份识别等校园触点。'],pages:[11,12,13,14,15,16,17,18],accent:'#183b79'},
{slug:'taituo-brand',title:'扬子江药业集团“泰妥妥”品牌形象设计',shortTitle:'泰妥妥 · 品牌形象',english:'A Contemporary Auspiciousness',category:'commercial',year:'2025—2026',discipline:'品牌设计 / 视觉延展',description:'以龙凤文化为视觉线索，将品牌识别延展至产品、礼盒与日常应用。',overview:['“泰妥妥”聚焦男性健康消费场景。设计以龙凤文化为线索，结合品牌标识、产品色谱与辅助图形，构建具有文化辨识度的品牌形象。','从产品矩阵到马年台历、礼盒、演示模板和会议场景，持续检验同一套视觉语言在不同载体中的表达。'],pages:[19,20,21,22,23,24,25,26,27],accent:'#9c1334'},
{slug:'yangtze-brand',title:'扬子江药业集团国际化品牌视觉形象设计',shortTitle:'YANGTZE · 国际化品牌',english:'A Shared Visual Language',category:'commercial',year:'2024—2026',discipline:'全球品牌 / 视觉识别',description:'围绕龙凤环与 YANGTZE 字标，建立面向国际传播的统一品牌视觉。',overview:['项目围绕扬子江药业集团的全球统一品牌标识展开，以龙凤环与 YANGTZE 字标为核心，将中国文化意象转化为可持续延展的视觉语言。','设计覆盖标识理念、标准制图、完整字标、创意延展和品牌海报，并在发布会与品牌衍生应用中建立一致的识别体验。'],pages:[28,29,30,31,32,33,34,35,36],accent:'#245cab'},
{slug:'ejin-savorscape',title:'额吉食光 · 额济纳旗文旅伴手礼包装设计',shortTitle:'额吉食光',english:'Ejin Savorscape',category:'awards',year:'2026',discipline:'包装设计 / 文旅文创',description:'将蒙古包、旋转盲盒与地域风味结合，让打开礼盒成为一次文化探索。',overview:['以蒙古包为灵感，将旋转盲盒结构与可拆卸顶盖结合。六个独立容器对应胡杨林、居延文化、航天精神、传统民居、丝路遗产和民族舞蹈，承载额济纳当地的肉制品、乳制品与果干。','用户在旋转、对位和抽取中发现不同风味。胡杨、沙漠与地域建筑进一步转化为橙蓝插画纹样，延展至香薰、杯具、文具与出行用品。'],awards:['MUSE Design Awards 2026 · 银奖','第14届 NCDA · 上海赛区三等奖'],pages:[38,39,40,41,42],accent:'#de831c'},
{slug:'alleyway-dreams',title:'童梦巷陌·老物疗心',shortTitle:'童梦巷陌·老物疗心',english:'Alleyway Dreams, Healing Through Old Treasures',category:'awards',year:'2026',discipline:'插画设计 / 文化叙事',description:'把北方老巷转化为温暖的想象空间，在日常物件与陪伴中讲述童年的情绪。',overview:['作品关注 6—12 岁儿童在成长与社交中的焦虑，将北方老巷化作温暖的疗愈空间。横向长卷依次展开“巷中发现”“创意时刻”和“温暖陪伴”，通过探索、表达与接纳讲述情绪变化。','开放式叙事结合和缓色调，以蓝灰平衡情绪。铁皮青蛙、竹蜻蜓、糖葫芦与旧玩具承载记忆，再延展为角色、海报、故事板和文创物件。'],awards:['米兰设计周2026中国高校设计学科师生优秀作品展 · 国家级一等奖'],pages:[43,44],accent:'#dd76a5'}
];
export const categories: {id:CategoryId;title:string;english:string;index:string;note:string}[] = [
{id:'commercial',title:'已落地商业项目',english:'COMMERCIAL',index:'01',note:'DESIGN IN PRACTICE'},
{id:'awards',title:'获奖作品',english:'AWARDED',index:'02',note:'RECOGNIZED CREATIVITY'},
{id:'aigc',title:'AIGC 作品',english:'EXPLORATIONS',index:'03',note:'BEYOND THE EXPECTED'}
];
export const pageImage = (n:number) => '/assets/page-'+String(n).padStart(2,'0')+'.webp';
export const getProject = (slug:string) => projects.find(p=>p.slug===slug);
export const contact = { name:'陶心悦', english:'TAO XINYUE', email:'taoxinyue@sjtu.edu.cn' };

export const projectThumbnail = (slug:string) => `/assets/thumb-${slug}.webp?v=20260906-composite`;
