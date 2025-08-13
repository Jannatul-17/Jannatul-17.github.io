document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  if (query.includes('timeline')) {
    window.location.href = 'timeline.html';
  } else if (query.includes('oral')) {
    window.location.href = 'oral-history.html';
  } else {
    alert('No matching page found.');
  }
}) ;
  }
});

