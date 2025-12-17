const form = document.querySelector('form.rating__form');
const thankyouModal = document.querySelector('section.thankyou__section');
const ratingModal = document.querySelector('section.rating__section');
const selectedRatingSpan = document.querySelector('span#selectedRating');

form.addEventListener('click', function(event) {
  const selectedLabel = event.target.closest('label');
  
  form.querySelectorAll('label.selected').forEach(function(label) {
    label.classList.remove('selected');
  });

  if (selectedLabel) selectedLabel.classList.add('selected');
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const rating = formData.get('rating');

  if (rating || Number.isInteger(rating)) {
    form.reset();
    displayThankYouMessage(rating);
  } 
})

function displayThankYouMessage(rating) {
  thankyouModal.style.display = 'flex';
  ratingModal.style.display = 'none';
  selectedRatingSpan.textContent = rating;
}