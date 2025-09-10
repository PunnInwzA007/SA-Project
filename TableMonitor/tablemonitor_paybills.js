document.addEventListener('DOMContentLoaded', function(){
  const options = document.querySelectorAll('.payment-option');

  options.forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    opt.addEventListener('click', () => {
      radio.checked = true;
      options.forEach(o => o.classList.toggle('selected', o.querySelector('input').checked));
    });
    radio.addEventListener('change', () => {
      options.forEach(o => o.classList.toggle('selected', o.querySelector('input').checked));
    });
  });

  // Initial highlight
  options.forEach(o => o.classList.toggle('selected', o.querySelector('input').checked));

  // Form submit
  const form = document.getElementById('paymentForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const choice = form.querySelector('input[name="payment"]:checked');
      alert('Paid with: ' + (choice ? choice.value.toUpperCase() : 'NONE'));
    });
  }
});
