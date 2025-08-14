// Fetch and display events
fetch('data/events.json')
  .then(response => response.json())
  .then(events => {
    const timeline = document.getElementById('timeline');

    events.forEach((event, index) => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `
        <img src="${event.imageURL}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p>${event.year}</p>
      `;
      card.addEventListener('click', () => openModal(event));
      timeline.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading events:', err));

// Modal functions
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

function openModal(event) {
  document.getElementById('modal-title').innerText = event.title;
  document.getElementById('modal-year').innerText = `Year: ${event.year}`;
  document.getElementById('modal-description').innerText = event.description;
  document.getElementById('modal-image').src = event.imageURL;
  document.getElementById('modal-category').innerText = event.category;
  modal.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
