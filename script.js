const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>20));

const toggle=document.getElementById('navToggle');
const links=document.getElementById('navLinks');
toggle&&toggle.addEventListener('click',()=>links.classList.toggle('nav__links--open'));
document.querySelectorAll('.nav__links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('nav__links--open')));

const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}})},{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

document.querySelectorAll('.faq__question').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement;
    const ans=item.querySelector('.faq__answer');
    const open=item.classList.contains('open');
    document.querySelectorAll('.faq__item').forEach(i=>{i.classList.remove('open');i.querySelector('.faq__answer').style.maxHeight=null;});
    if(!open){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px';}
  });
});
