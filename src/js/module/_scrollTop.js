export function scrollTop() {
  // topへ戻るアイコン要素取得
  const $changeIcon = document.getElementById('is-scroll-change-icon');

  scrollToTop();
  showScrollToTopIcon();

  // スクロール表示関数
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
  // topへスクロール実行関数
  function scrollToTop() {
    $changeIcon.addEventListener('click', function () {
      console.log('behavior');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}