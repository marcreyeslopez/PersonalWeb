document.addEventListener('DOMContentLoaded',function(){
  // Initialize EmailJS
  emailjs.init('k_o4mWHdX8kWc-Cvw'); // Public Key

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle){
    navToggle.addEventListener('click',()=>{
      mainNav.classList.toggle('open');
    });
  }

  // Contact form handling: send email via EmailJS
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      status.textContent = 'Enviando...';
      status.style.color = '#b8860b';
      
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      
      if(!name||!email||!message){
        status.textContent = 'Por favor, rellena todos los campos.';
        status.style.color = '#d32f2f';
        return;
      }
      
      // Basic email validation
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        status.textContent = 'Introduce un correo válido.';
        status.style.color = '#d32f2f';
        return;
      }

      // Send email via EmailJS
      emailjs.send('service_0cv2l0b', 'template_5w3mn6m', {
        to_email: 'marcreyeslopez2004@gmail.com',
        from_name: name,
        from_email: email,
        message: message
      }).then(function(response) {
        status.textContent = '¡Correo enviado con éxito! Me pondré en contacto pronto.';
        status.style.color = '#4a7c59';
        form.reset();
      }, function(error) {
        status.textContent = 'Hubo un error al enviar el correo. Inténtalo de nuevo.';
        status.style.color = '#d32f2f';
        console.error('Error:', error);
      });
    });
  }
});
