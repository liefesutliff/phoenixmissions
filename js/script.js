document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const naviList = document.getElementById('navigationList');

  toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
  });
});
