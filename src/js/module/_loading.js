
// 画面表示時のローディング
export function loading() {
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('is-loading').classList.add("js-loaded");
    }, 1500);
  });
}
