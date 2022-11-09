export function topSlider() {
  console.log('topSlider OK');
  $(window).on('load', function () {
    sliderStart();
  });
  function sliderStart() {
    const sliderItem = document.querySelectorAll('.is-slider__item');
    const totalNum = sliderItem.length - 1;
    const IntarvalTime = 5000;
    let actNum = 0;
    /*    let nowSlide;
       let NextSlide; */
    for (let i = 0; i < sliderItem.length; i++) {
      console.log(sliderItem.item(i));
    }
    // スライドの1枚目をフェードイン
    sliderItem[0].classList.add('js-slider__img-show');
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