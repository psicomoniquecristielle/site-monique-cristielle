// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
          function closeMenu() {
                  links.classList.remove('open');
                  toggle.setAttribute('aria-expanded', 'false');
          }
          toggle.addEventListener('click', function (e) {
                  e.stopPropagation();
                  var isOpen = links.classList.toggle('open');
                  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          });
          links.querySelectorAll('a').forEach(function (link) {
                  link.addEventListener('click', closeMenu);
          });
          document.addEventListener('keydown', function (e) {
                  if (e.key === 'Escape' && links.classList.contains('open')) {
                            closeMenu();
                            toggle.focus();
                  }
          });
          document.addEventListener('click', function (e) {
                  if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) {
                            closeMenu();
                  }
          });
    }
});
