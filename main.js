// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     // return (
//     //   rect.top >= 0 &&
//     //   rect.left >= 0 &&
//     //   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     // );
//     return (
        

//     )
//   }
  
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
  
  window.addEventListener('scroll', handleScroll);