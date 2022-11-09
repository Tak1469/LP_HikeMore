export function scrollTop() {
  const $changeIcon = document.getElementById('is-scroll-change-icon');

  scrollToTop();
  showScrollToTopIcon();

  function showScrollToTopIcon() {
    window.addEventListener('scroll', function () {
      const offsetY = window.scrollY;
      const setShowHeight = 800;
      if (offsetY > setShowHeight) {
        $changeIcon.classList.add('js-show-scroll-top-icon');

      } else {
        $changeIcon.classList.remove('js-show-scroll-top-icon');
      }
    });
  }
  function scrollToTop() {
    $changeIcon.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }



  console.log('scrollTop OK!');
}