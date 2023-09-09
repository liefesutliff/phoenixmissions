document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const navList = document.getElementsByClassName('linksList');

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});
