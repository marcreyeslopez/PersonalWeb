document.addEventListener('DOMContentLoaded',function(){
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle){
    navToggle.addEventListener('click',()=>{
      mainNav.classList.toggle('open');
    });
  }

  // Contact form handling: validate and open mail client with mailto
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const recipient = 'marc.reyes@example.com'; // replace with real email

  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      status.textContent = '';
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name||!email||!message){
        status.textContent = 'Si us plau, omple tots els camps.';
        return;
      }
      // Basic email validation
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        status.textContent = 'Introdueix un correu vàlid.';
        return;
      }

      const subject = encodeURIComponent('Contacte des de la web: ' + name);
      const body = encodeURIComponent('Nom: '+name+'\nCorreu: '+email+'\n\n'+message);
      const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Open user's mail client. If disabled, show the raw email to copy.
      window.location.href = mailto;
      status.textContent = 'Se ha obert el teu client de correu per enviar el missatge.';
      form.reset();
    });
  }
});
