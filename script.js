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

  // simple client-side form guard
  const form = document.querySelector('.form');
  if(form){
    form.addEventListener('submit', (e)=>{
      const req = form.querySelectorAll('[required]');
      for(const el of req){
        if(!el.value.trim()){
          alert('Please complete all required fields.');
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