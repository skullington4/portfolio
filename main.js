function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    var sections = document.querySelectorAll('.sectionSelector');
    for (var i = 0; i < sections.length; i++) {
      if (isElementInViewport(sections[i])) {
        sections[i].classList.add('show');
      } else {
        sections[i].classList.remove('show');
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);