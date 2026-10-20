const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primaryNav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
