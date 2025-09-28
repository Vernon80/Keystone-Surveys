(function(){
  const openBtn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  const closeBtn = document.querySelector('.nav-close');
  if(openBtn && nav){
    openBtn.addEventListener('click', ()=>{
      nav.classList.add('open');
      openBtn.setAttribute('aria-expanded', 'true');
    });
  }
  if(closeBtn && nav){
    closeBtn.addEventListener('click', ()=>{
      nav.classList.remove('open');
      openBtn.setAttribute('aria-expanded', 'false');
    });
  }
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      const email = form.querySelector('input[type=email]');
      if(!email.value.trim()){
        alert('Please enter your email.');
        email.focus();
        e.preventDefault();
        return;
      }
      alert('Thanks! This demo form is not wired to a backend yet.');
      e.preventDefault();
    });
  }
})();