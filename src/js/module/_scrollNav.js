// navタグからスクロール
export function scrollNav() {
  // navタグの要素を取得
  const $menuElem = document.getElementById('is-menu-animation');
  // navタグ内の、子要素の要素を取得
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  // ハンバーガーの発火要素取得
  const $hamburgerMenuLine = document.querySelectorAll('.is-hamburger-line');

  // 各ナビゲーション要素をクリックで発火
  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', function (e) {
      e.preventDefault();
      // 絶対URIを取得
      let href = smoothScrollTrigger[i].getAttribute('href');
      //  hrefの『#』を取り除く
      let targetElement = document.getElementById(href.replace('#', ''));
      // 高さを取得
      const rect = targetElement.getBoundingClientRect().top;
      // Y軸スクロール量取得
      const offset = window.pageYOffset;
      // navタグの高さ分取得
      const gap = 100;
      // navタグの高さ分省く
      const target = rect + offset - gap;
      // スクロール量とはやさ
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });
      // レスポンシブ時にメニーを閉じる
      $menuElem.classList.remove('js-show-menu');
      $hamburgerMenuLine.forEach($hamburgerMenuLine => {
        $hamburgerMenuLine.classList.toggle('hamburger__bar-active');
      });
    });
  }
}