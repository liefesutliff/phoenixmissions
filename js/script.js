document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const navList = document.querySelector('.linksList');

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});

// 4Giving Code
(function (window, document) {
  if (window.fourGiving) {
  console.warn('4Giving Widget already added, you only need to add this code once.');
  }
  else {
  (window.fourGiving = {}), (m = ['init', 'action']);
  window.fourGiving._c = [];
  m.forEach(function (me){
  (window.fourGiving[me] = function () {
  window.fourGiving._c.push([me, arguments]);
  })
  });
  var elt = document.createElement('script');
  elt.type = 'text/javascript';
  elt.async = true;
  elt.src = 'https://js.4giving.com/shim-v2.js';
  var before = document.getElementsByTagName('script')[0];
  before.parentNode.insertBefore(elt, before);
  }
  
  fourGiving.init('prod');
  fourGiving.action({"action":"_b","publicAccessCode":"E572","containerId":"dux2a","themeColor":"#8ed1fc","buttonLabel":"Donate"});
  })(window, document, undefined);
// End Of 4Giving Code
