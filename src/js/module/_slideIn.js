export function slideInItem() {

  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 対象親要素取得
  const goodsContainerElem = document.querySelectorAll('.is-slidein-item')[0];
  const diaryContainerElem = document.querySelectorAll('.is-slidein-item')[1];
  // スクロール時に実行
  window.addEventListener('scroll', function () {
    // 対象要素のブラウザの表示領域top取得
    const goodsTopHeight = goodsContainerElem.getBoundingClientRect().top;
    const diaryTopHeight = diaryContainerElem.getBoundingClientRect().top;
    // スクロールトップ取得
    const scroll = window.pageYOffset;
    // course アニメーション実行
    slideInItemBox(goodsContainerElem, goodsTopHeight, scroll, 2200);
    // camps アニメーション実行
    slideInItemBox(diaryContainerElem, diaryTopHeight, scroll, 2500);
  });
  // 
  function slideInItemBox(parentElem, elemHeight, scroll, reg) {
    if (windowHeight + scroll > elemHeight + reg) {
      // アニメーション要素を取得
      const fadeInElem = parentElem.querySelectorAll('.is-slideinleft');
      for (let i = 0; i < fadeInElem.length; i++) {
        fadeInElem.item(i).classList.add('js-slidein-show');
      }
    }
  }

}