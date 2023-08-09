
  let output = document.getElementById('output');
  let input = document.querySelectorAll(".rating-range button");
  let submitbtn = document.getElementById('submitbtn');
  let selected_rating;
  let card1 = document.querySelector('.card');
  let card2 = document.querySelector('.card-2');
  
  input.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      input.forEach((btn)=>{
        btn.classList.remove('checked')
      })
      button.classList.add('checked')
      selected_rating = parseInt(button.textContent);
    });
  });
  
  submitbtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (typeof selected_rating !== 'undefined') {
      card1.style.display = 'none';
      card2.style.display = 'block';
      output.innerHTML = `You selected  ${selected_rating} out of 5 `;
    } else {
      alert("Please select a rating before submitting.");
    }
  });

