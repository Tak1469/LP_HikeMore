export function headerCover() {
  // navタグ要素取得
  const $navElem = document.querySelectorAll('.l-nav');
  // ヘッダーと同じ数値を指定
  const headerHight = 100;
  // レスポンシブ用 幅の取得
  const resWidth =  959;
  // スクロールしたら発火
  window.addEventListener('scroll', function () {
    const offsetX = window.outerWidth;
    const offsetY = window.scrollY;
    const triggerY = headerHight < offsetY;
    const resTriggerX = offsetX > resWidth;
        // ヘッダーと同じ位置に来た時 またはレスポンシブ用幅未満の場合
    if (triggerY && resTriggerX) {
      $navElem[0].classList.add('js-nav-bgcolor');
    } else {
      $navElem[0].classList.remove('js-nav-bgcolor');
    }
  });
}