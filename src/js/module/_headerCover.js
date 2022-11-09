export function headerCover() {
  console.log('headerCover');
  const $navElem = document.querySelectorAll('.l-nav');
  const hederHight = 100;
  const resWidth =  959;
  window.addEventListener('scroll', function () {
    const offsetX = window.outerWidth;
    const offsetY = window.scrollY;
    const triggerY = hederHight < offsetY;
    const resTriggerX = offsetX > resWidth;
    if (triggerY && resTriggerX) {
      $navElem[0].classList.add('js-nav-bgcolor');
    } else {
      $navElem[0].classList.remove('js-nav-bgcolor');
    }
  });
}