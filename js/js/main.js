// small script for responsive menu (keeps structure like sivap17)
(function(){
  function toggleMenu(buttonId){
    var btn = document.getElementById(buttonId);
    if(!btn) return;
    btn.addEventListener('click', function(){
      var nav = document.querySelector('.nav');
      if(!nav) return;
      if (nav.style.display === 'flex') {
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.right = '20px';
        nav.style.top = '64px';
        nav.style.background = 'rgba(15,15,16,0.95)';
        nav.style.padding = '12px';
        nav.style.borderRadius = '8px';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
      }
    });
  }

  toggleMenu('menuToggle');
  toggleMenu('menuToggle2');

  // Close menu when clicking outside on small screens
  document.addEventListener('click', function(e){
    var nav = document.querySelector('.nav');
    var menuBtns = document.querySelectorAll('.menu-toggle');
    if(!nav) return;
    if(window.innerWidth > 900) return;
    var clickedToggle = Array.from(menuBtns).some(b => b.contains(e.target));
    if(!clickedToggle && !nav.contains(e.target)){
      nav.style.display = '';
      nav.style.position = '';
    }
  });
})();
