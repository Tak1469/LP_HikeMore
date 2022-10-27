export function headerCover() {
  console.log('headerCover');
  const $headerElem = document.querySelectorAll('.l-header');
  const rect = window.outerHeight;
  const hederHight = 100;
  console.log($headerElem);
  console.log(rect);
  window.addEventListener('scroll', function () {
    const offset = window.scrollY;
    if (hederHight < offset) {
      console.log(offset);
      $headerElem[0].classList.add('js-nav-bgcolor');
    }else{
      $headerElem[0].classList.remove('js-nav-bgcolor');
    }
  });
}