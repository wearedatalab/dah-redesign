// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if(burger && nav){
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Mobile nav inline styling when open (lightweight)
const style = document.createElement('style');
style.textContent = `
.nav.open{display:flex !important;flex-direction:column;position:absolute;top:74px;left:0;right:0;background:#fff;padding:24px;gap:18px;border-bottom:1px solid #e6eaf2;box-shadow:0 12px 40px rgba(10,37,99,.10)}
.header.scrolled{box-shadow:0 4px 14px rgba(10,37,99,.06)}
`;
document.head.appendChild(style);
