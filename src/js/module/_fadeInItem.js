export function fadeInItem() {
  console.log('fadeInItem ok');

  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 対象要素取得
  const courseContainerElem = document.querySelectorAll('.is-fadein-item')[0];
  const campContainerElem = document.querySelectorAll('.is-fadein-item')[1];
  // スクロール時に実行
  window.addEventListener('scroll', function () {
    // 対象要素のtop取得
    const courseTopHeight = courseContainerElem.getBoundingClientRect().top;
    const campTopHeight = campContainerElem.getBoundingClientRect().top;
    // 画面トップ取得
    const scroll = document.documentElement.scrollTop;
    // course アニメーション実行
    fadeInItemBox(courseContainerElem, courseTopHeight, scroll, 1000);
    // camps アニメーション実行
    fadeInItemBox(campContainerElem, campTopHeight, scroll, 1500);
  });

  function fadeInItemBox(parentElem, elemHeight, scroll, reg) {
    if (windowHeight + scroll > elemHeight + reg) {
      const fadeInElem = parentElem.querySelectorAll('.is-fadein');
      for (let i = 0; i < fadeInElem.length; i++) {
        fadeInElem.item(i).classList.add('js-fadein-show');
      }
    }
  }

}