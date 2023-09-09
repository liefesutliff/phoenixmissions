document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const navList = document.querySelector('.linksList');

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});
