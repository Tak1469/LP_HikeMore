// スライダー実行関数
export function topSlider() {
  $(window).on('load', function () {
    sliderStart();
  });
  function sliderStart() {
    // スライダー画像要素を取得
    const sliderItem = document.querySelectorAll('.is-slider__item');
    // スライダー枚数を設定
    const totalNum = sliderItem.length - 1;
    // 画像表示時間
    const IntarvalTime = 5000;

    let actNum = 0;
    // スライドの1枚目をフェードイン
    sliderItem[0].classList.add('js-slider__img-show');
    // クラス付与をsetIntervalで実行
    setInterval(() => {
      if (actNum < totalNum) {
        let nowSlide = sliderItem[actNum];
        let NextSlide = sliderItem[++actNum];
        nowSlide.classList.remove('js-slider__img-show');
        NextSlide.classList.add('js-slider__img-show');
      } else {
        let nowSlide = sliderItem[actNum];
        let NextSlide = sliderItem[actNum = 0];
        nowSlide.classList.remove('js-slider__img-show');
        NextSlide.classList.add('js-slider__img-show');
      }
    }, IntarvalTime);
  }
}