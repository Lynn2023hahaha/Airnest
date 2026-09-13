let lang='en';
const switcher=document.getElementById('language'),menuButton=document.getElementById('menu-toggle'),menu=document.getElementById('main-menu');
function updateMenuLabel(){const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-label',lang==='zh'?(open?'关闭菜单':'打开菜单'):(open?'Close menu':'Open menu'));}
function setLanguage(next){lang=next;document.documentElement.lang=next==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[next]);switcher.textContent=next==='en'?'中文':'English';switcher.setAttribute('aria-label',next==='en'?'Switch to Chinese':'Switch to English');document.title=next==='en'?'AirNest Property Services | Sydney':'AirNest Property Services | 悉尼房屋清洁与维修';document.querySelector('meta[name="description"]').content=next==='en'?'AirNest Property Services — end-of-lease cleaning, minor repairs and professional property photography in Sydney.':'AirNest Property Services 在悉尼提供退租清洁、小修维护及专业房产摄影，为出租或出售做好准备。';document.querySelector('.scroll-cue').setAttribute('aria-label',next==='en'?'Explore services':'了解服务');updateMenuLabel();}
switcher.addEventListener('click',()=>setLanguage(lang==='en'?'zh':'en'));
document.getElementById('year').textContent=new Date().getFullYear();
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');updateMenuLabel();}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));updateMenuLabel();});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();menuButton.focus();}});
document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!menuButton.contains(e.target))closeMenu();});
