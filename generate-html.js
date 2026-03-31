const fs = require("fs");
const prompts = JSON.parse(fs.readFileSync("prompts-data.json", "utf8"));
const logoSvg = fs.readFileSync("logo.svg.txt", "utf8").trim();
const jsonStr = JSON.stringify(prompts)
  .replace(/</g, "\\u003c")
  .replace(/>/g, "\\u003e");

const cats = [
  { slug: "escrita", label: "Escrita Humanizada", color: "#F4C3CC", icon: "edit" },
  { slug: "conteudo", label: "Estrat\u00e9gia de Conte\u00fado", color: "#F87C56", icon: "doc" },
  { slug: "seo", label: "SEO & Crescimento", color: "#E2E99C", icon: "chart" },
  { slug: "saas", label: "Constru\u00e7\u00e3o de SaaS", color: "#77C5D5", icon: "cloud" },
  { slug: "marketing", label: "Marketing & Vendas", color: "#D6A461", icon: "shop" },
  { slug: "code", label: "Claude Code & CLI", color: "#006298", icon: "code" },
  { slug: "produtividade", label: "Produtividade & Sistemas", color: "#3E695C", icon: "bolt" },
  { slug: "debugging", label: "Debugging & Refatora\u00e7\u00e3o", color: "#8B355F", icon: "tool" },
  { slug: "landing", label: "Landing Pages & Copy", color: "#FBDD7A", icon: "target" },
  { slug: "monetizacao", label: "Monetiza\u00e7\u00e3o & Escala", color: "#DC625E", icon: "crown" },
];
const catsJSON = JSON.stringify(cats);

const svgPaths = {
  edit: '<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  doc: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  cloud: '<path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>',
  shop: '<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  tool: '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  crown: '<path d="M2 4l3 12h14l3-12-5 4-5-4-5 4-5-4z"/><path d="M5 16h14v2H5z"/>',
};

function svg(name, size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgPaths[name]}</svg>`;
}

const catIconsJS = cats
  .map((c) => `  ${c.slug}: '${svg(c.icon, 18)}'`)
  .join(",\n");

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MASTER PROMPTS — Overlens</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#000;--card:#1a1a1a;--border:#ffffff15;--border-h:#ffffff30;--fg:#f5f5f5;--fg-m:#a0a0a0;--fg-d:#666;--blue:#77C5D5;--sw:240px}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--fg);min-height:100vh}
h1{font-family:'Inter',sans-serif}
.sidebar{position:fixed;top:0;left:0;width:var(--sw);height:100vh;background:var(--bg);border-right:1px solid var(--border);display:flex;flex-direction:column;z-index:50;transition:transform .2s;font-family:'Inter',sans-serif}
.sidebar.closed{transform:translateX(-100%)}
.s-logo{padding:24px 16px 32px;display:flex;align-items:center;justify-content:space-between}
.s-logo>svg:first-child{height:18px;width:auto}
.cls{background:none;border:none;color:var(--fg-d);cursor:pointer;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center;transition:all .15s}
.cls:hover{color:var(--fg-m);background:#ffffff08}
.s-search{padding:0 14px 20px}
.s-search-w{position:relative}
.s-search input{width:100%;height:40px;background:#151515;border:1px solid var(--border);border-radius:8px;color:var(--fg);font-size:13px;padding:0 44px 0 34px;outline:none;font-family:'Inter',sans-serif}
.s-search input:focus{border-color:var(--border-h)}
.s-search .ic{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--fg-d)}
.s-search kbd{position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:10px;color:var(--fg-d);background:#252525;border-radius:4px;padding:2px 6px;font-family:'JetBrains Mono',monospace}
.s-assets{display:flex;align-items:center;gap:10px;padding:10px 16px;margin:0 14px 12px;font-size:14px;color:var(--fg-m);border:1px solid var(--border);border-radius:8px;cursor:default}
.s-nav{flex:1;overflow-y:auto;padding:0 8px 16px}
.s-btn{width:100%;text-align:left;padding:10px 14px;font-size:14px;font-weight:300;border:none;background:none;color:var(--fg-m);cursor:pointer;border-radius:8px;display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;transition:all .15s;letter-spacing:.01em}
.s-btn:hover{color:var(--fg);background:#ffffff08}
.s-btn.on{color:var(--fg);background:#ffffff12;font-weight:400}
.s-btn .ch{transition:transform .15s}
.s-btn.on .ch{transform:rotate(90deg)}
.s-div{height:1px;background:var(--border);margin:12px 14px}
.cls{display:none}
.main{margin-left:var(--sw)}
.mh{display:none;position:sticky;top:0;z-index:30;background:rgba(0,0,0,.9);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:12px 16px;align-items:center;gap:12px}
.mh button{background:none;border:none;color:var(--fg-m);cursor:pointer}
.mh svg{height:14px;width:auto}
.ct{padding:40px 48px;max-width:1400px}
.ct h1{font-family:'Outfit',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:500;text-transform:uppercase;letter-spacing:-.02em;margin-bottom:8px}
.ct .sub{font-size:14px;color:var(--fg-m);margin-bottom:40px}
.cg{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:48px}
.cc{display:flex;align-items:center;gap:20px;padding:28px 24px;border-radius:16px;background:var(--card);border:1px solid var(--border);cursor:pointer;transition:all .15s;text-align:left;min-height:100px}
.cc:hover{border-color:var(--border-h)}
.ci{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.cc p{font-size:16px;font-weight:600;color:var(--fg)}
.cc small{font-size:13px;color:var(--fg-m);margin-top:4px;display:block}
.pg{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.pc{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;transition:border-color .15s}
.pc:hover{border-color:var(--border-h)}
.ph{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:12px}
.pb{display:inline-flex;align-items:center;gap:6px}
.pb span{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;padding:4px 10px;border-radius:100px}
.pn{font-size:11px;color:var(--fg-d);font-family:'JetBrains Mono',monospace}
.pt{font-size:14px;line-height:1.65;color:rgba(245,245,245,.8)}
.pt .br{color:var(--blue);font-weight:500}
.cb{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;background:#252525;border:1px solid var(--border);color:var(--fg-m);font-size:12px;font-weight:500;cursor:pointer;transition:all .15s;flex-shrink:0;font-family:'Inter',sans-serif}
.cb:hover{background:#333;color:var(--fg)}
.cb.ok{background:#3E695C;color:#fff;border-color:#3E695C}
.em{text-align:center;padding:80px 0;color:var(--fg-m)}
.em button{margin-top:16px;padding:8px 20px;border-radius:8px;background:#252525;border:1px solid var(--border);color:var(--fg);cursor:pointer;font-size:13px}
.ov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:40}
.ov.sh{display:block}
@media(max-width:1024px){.sidebar{transform:translateX(-100%)}.sidebar.op{transform:translateX(0)}.main{margin-left:0}.mh{display:flex}.cls{display:flex}.ct{padding:24px 16px}}
@media(max-width:640px){.cg,.pg{grid-template-columns:1fr}}
@media(min-width:1536px){.pg{grid-template-columns:repeat(3,1fr)}}
</style>
</head>
<body>
<div class="ov" id="ov" onclick="tog()"></div>
<aside class="sidebar" id="sb">
  <div class="s-logo">__LOGO_SVG__</div>
  <div class="s-search"><div class="s-search-w"><span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span><input type="text" placeholder="Buscar..." id="si" oninput="hs()"><kbd>&#8984;K</kbd></div></div>
  <nav class="s-nav" id="sn"></nav>
</aside>
<div class="main">
  <header class="mh"><button onclick="tog()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>__LOGO_SVG__</header>
  <div class="ct"><h1 id="tt">MASTER PROMPTS</h1><p class="sub" id="st">100 prompts profissionais para o Claude. Navegue pelas categorias.</p><div id="mc"></div></div>
</div>
<script>
const P=${jsonStr};
const C=${catsJSON};
const IC={
${catIconsJS}
};
const SV={
  copy:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',
  check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  chev:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>'
};
let ac=null,sq='';
function dk(h){const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return(r*299+g*587+b*114)/1000<128}
function hb(t){return t.replace(/(\\[[^\\]]+\\])/g,'<span class="br">$1</span>')}
function rn(){
  const n=document.getElementById('sn');
  let h='<button class="s-btn '+(ac===null?'on':'')+'" onclick="sc(null)">MASTER PROMPTS</button><div class="s-div"></div>';
  C.forEach(c=>{h+='<button class="s-btn '+(ac===c.slug?'on':'')+'" onclick="sc(\\''+c.slug+'\\')"><span>'+c.label+'</span><span class="ch">'+SV.chev+'</span></button>'});
  n.innerHTML=h;
}
function rcc(){
  let h='<div class="cg">';
  C.forEach(c=>{const n=P.filter(p=>p.slug===c.slug).length;const tc=dk(c.color)?'#f5f5f5':'#151515';h+='<div class="cc" onclick="sc(\\''+c.slug+'\\')"><div class="ci" style="background:'+c.color+';color:'+tc+'">'+IC[c.slug]+'</div><div><p>'+c.label+'</p><small>'+n+' prompts</small></div></div>'});
  return h+'</div>';
}
function rpc(l){
  if(!l.length)return'<div class="em"><p>Nenhum prompt encontrado.</p><button onclick="cf()">Limpar filtros</button></div>';
  let h='<div class="pg">';
  l.forEach(p=>{const c=C.find(x=>x.slug===p.slug);const bg=c?c.color+'33':'#333';const tc=c?(dk(c.color)?'#fff':c.color):'#999';h+='<div class="pc"><div class="ph"><div class="pb"><span style="background:'+bg+';color:'+tc+'">'+(c?c.label:p.category)+'</span></div><button class="cb" onclick="cp(this,'+p.id+')">'+SV.copy+' Copiar</button></div><div class="pt">'+hb(p.text.replace(/&/g,'&amp;').replace(/</g,'&lt;'))+'</div></div>'});
  return h+'</div>';
}
function r(){
  let f=P;
  if(ac)f=f.filter(p=>p.slug===ac);
  if(sq)f=f.filter(p=>p.text.toLowerCase().includes(sq));
  const c=C.find(x=>x.slug===ac);
  document.getElementById('tt').textContent=ac?c.label:'MASTER PROMPTS';
  document.getElementById('st').textContent=ac?f.length+' prompts nesta categoria. Clique para copiar.':'120 prompts profissionais para o Claude. Navegue pelas categorias.';
  document.getElementById('mc').innerHTML=(!ac&&!sq)?rcc():rpc(f);
  rn();
}
function sc(s){ac=s;r();tog(false);window.scrollTo(0,0)}
function hs(){sq=document.getElementById('si').value.toLowerCase().trim();r()}
function cf(){ac=null;sq='';document.getElementById('si').value='';r()}
function cp(b,id){const p=P.find(x=>x.id===id);if(!p)return;navigator.clipboard.writeText(p.text).then(()=>{b.innerHTML=SV.check+' Copiado';b.classList.add('ok');setTimeout(()=>{b.innerHTML=SV.copy+' Copiar';b.classList.remove('ok')},2000)})}
function tog(f){const s=document.getElementById('sb'),o=document.getElementById('ov');if(f===false||s.classList.contains('op')){s.classList.remove('op');o.classList.remove('sh')}else{s.classList.add('op');o.classList.add('sh')}}
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();document.getElementById('si').focus()}});
r();
</script>
</body>
</html>`;

const finalHtml = html.replace(/__LOGO_SVG__/g, logoSvg);
fs.writeFileSync("../Conte\u00fado/index.html", finalHtml);
console.log("index.html created (" + Math.round(finalHtml.length / 1024) + "KB)");
