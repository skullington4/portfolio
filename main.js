
  
  function handleScroll() {
    var sections = document.querySelectorAll('.sectionSelector');
    
    for (var i = 0; i < sections.length; i++) {
        var windowheight = window.innerHeight;
        var rectTop = sections[i].getBoundingClientRect().top;
        var rectpoint = 150;

      if (rectTop < windowheight - rectpoint) {
        sections[i].classList.add('show');
      } else {
        sections[i].classList.remove('show');
      }
    }
  }
  
  function handleSlide() {
    var sections = document.querySelectorAll('.sliderSelector');
    
    for (var i = 0; i < sections.length; i++) {
        var windowheight = window.innerHeight;
        var rectTop = sections[i].getBoundingClientRect().top;
        var rectpoint = 150;

      if (rectTop < windowheight - rectpoint) {
        sections[i].classList.add('show');
      } else {
        sections[i].classList.remove('show');
      }
    }
  }


  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', handleSlide);