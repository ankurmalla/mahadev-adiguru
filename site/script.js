const C = window.MAG_CONTENT;
const $ = (s) => document.querySelector(s);
const el = (tag, cls, html) => { const x=document.createElement(tag); if(cls) x.className=cls; if(html) x.innerHTML=html; return x; };
$('.menu').addEventListener('click',()=>$('.nav').classList.toggle('open'));

C.articles.forEach(a=>$('#articleGrid').appendChild(el('article','',`<span class="tag">${a.tag}</span><h3>${a.title}</h3><p>${a.desc}</p><a class="btn" href="#cms">CMS Ready</a>`)));
C.mantras.forEach(m=>{ const card=el('article','',`<h3>${m.name}</h3><p class="sanskrit">${m.sanskrit}</p><p><b>Transliteration:</b> ${m.transliteration}</p><p><b>Meaning:</b> ${m.meaning}</p><p><b>Benefits:</b> ${m.benefits}</p><p><b>Suggested:</b> ${m.count}</p><button class="btn primary copy">Copy Mantra</button>`); card.querySelector('button').onclick=()=>navigator.clipboard.writeText(`${m.sanskrit}\n${m.transliteration}`); $('#mantraGrid').appendChild(card);});
C.videos.forEach(v=>$('#videoGrid').appendChild(el('article','video',`<iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allowfullscreen loading="lazy"></iframe><div><span class="tag">${v.type}</span><h3>${v.title}</h3><p>${v.channel}</p><p>${v.note}</p></div>`)));
C.jyotirlingas.forEach((j,i)=>$('#jyotiGrid').appendChild(el('article','',`<span class="tag">${String(i+1).padStart(2,'0')}</span><h3>${j.split(',')[0]}</h3><p>${j.split(',').slice(1).join(',')}</p>`)));
C.festivals.forEach(f=>$('#festivalGrid').appendChild(el('article','',`<h3>${f.name}</h3><p>${f.desc}</p>`)));
let n=Number(localStorage.getItem('japaCount')||0); const render=()=>{$('#count').textContent=n; localStorage.setItem('japaCount',n)}; render();
$('#plus').onclick=()=>{n++;render()}; $('#minus').onclick=()=>{n=Math.max(0,n-1);render()}; $('#reset').onclick=()=>{n=0;render()}; $('#save108').onclick=()=>{$('#note').textContent=`Target 108 set. Remaining: ${Math.max(0,108-n)}`};
if('serviceWorker' in navigator){ navigator.serviceWorker.register('/sw.js').catch(()=>{}); }
