document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('demo-status').textContent = 'Demo erfolgreich ausgefüllt. Es wurden keine Daten gesendet oder gespeichert.';
  });
});
