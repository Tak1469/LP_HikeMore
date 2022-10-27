export function hamburger() {
  const $hamburgerMenuElem = document.getElementById('is-hamburger-menu');
  const $menuElem = document.getElementById('is-menu-animation');
  const $hamburgerMenuLine = document.querySelectorAll('.is-hamburger-line');
  $hamburgerMenuElem.addEventListener('click', function () {
    $hamburgerMenuLine.forEach($hamburgerMenuLine => {
      $hamburgerMenuLine.classList.toggle('hamburger__bar-active');
    });
    $menuElem.classList.toggle('js-show-menu');
  });
console.log('hamburger OK!');
}