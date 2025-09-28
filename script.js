// basic interactions
(function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      const required = form.querySelectorAll('[required]');
      for(const el of required){
        if(!el.value.trim()){
          alert('Please fill in all required fields.');
          el.focus();
          e.preventDefault();
          return;
        }
      }
      alert('Thanks! This demo form is not wired to a backend yet.');
      e.preventDefault();
    });
  }
})();