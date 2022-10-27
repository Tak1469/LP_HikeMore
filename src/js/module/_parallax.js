export function parallax() {

  //<!-- 画面の高さを取得 -->
  var windowHeight = window.outerHeight;
  console.log($(window).height());
  console.log(window.outerHeight);
  console.log(windowHeight);
  //<!-- スクロール時に実行 -->
  window.addEventListener("scroll", function () {
    console.log(window.scrollY);
  });
  $(window).on("scroll", function () {

    //<!-- スクロールの位置を取得 -->
    // var scroll = $(window).scrollTop();

    // //<!-- 対象ID -->
    // var section1 = [
    //   "para__img1",
    //   "para__img2",
    // ];

    // var section2 = [
    //   "para__img3",
    //   "para__img4",
    // ];a

    // var section4 = [
    //   "para__img5",
    //   "para__img6",
    // ];
    // var section5 = [
    //   "para__img7",
    //   "para__img8",
    // ];

    // //<!-- ループ -->
    // $.each(section1, function (i, val) {
    //   //<!-- 要素が画面内に入った瞬間を検知 -->
    //   if (scroll + windowHeight > $('.' + val).offset().top) {
    //     let num = Math.floor(((scroll) - $('.parallax1').offset().top)) / 100;
    //     //<!-- スクロールを元に要素の動きを調整 -->
    //     $('.para__img1').css('margin-left', -($('.para__img1').offset().top - scroll) / 8);
    //     $('.para__img2').css('margin-top', ($('.para__img2').offset().top - scroll) / 5);
    //     $('.para__img1').css('opacity', num);
    //     $('.para__img2').css('opacity', num);
    //   }
    // });

    // $.each(section2, function (i, val) {
    //   //<!-- 要素が画面内に入った瞬間を検知 -->
    //   if (scroll + windowHeight > $('.' + val).offset().top) {
    //     let num = Math.floor(((scroll + 100) - $('.parallax2').offset().top)) / 100;
    //     //<!-- スクロールを元に要素の動きを調整 -->
    //     $('.para__img3').css('margin-top', ($('.para__img3').offset().top - scroll) / 8);
    //     $('.para__img4').css('margin-top', ($('.para__img4').offset().top - scroll) / 5);
    //     $('.para__img3').css('opacity', num);
    //     $('.para__img4').css('opacity', num);
    //   }
    // });

    // $.each(section4, function (i, val) {
    //   //<!-- 要素が画面内に入った瞬間を検知 -->
    //   if (scroll + windowHeight > $('.' + val).offset().top) {
    //     let num = Math.floor(((scroll + 100) - $('.parallax4').offset().top)) / 100;
    //     //<!-- スクロールを元に要素の動きを調整 -->
    //     $('.para__img5').css('margin-top', ($('.para__img5').offset().top - scroll) / 8);
    //     $('.para__img6').css('margin-left', ($('.para__img6').offset().top - scroll) / 5);
    //     $('.para__img5').css('opacity', num);
    //     $('.para__img6').css('opacity', num);
    //   }
    // });

    // $.each(section5, function (i, val) {
    //   //<!-- 要素が画面内に入った瞬間を検知 -->
    //   if (scroll + windowHeight > $('.' + val).offset().top) {
    //     let num = Math.floor(((scroll + 100) - $('.parallax5').offset().top)) / 100;
    //     //<!-- スクロールを元に要素の動きを調整 -->
    //     $('.para__img7').css('margin-top', ($('.para__img7').offset().top - scroll) / 5);
    //     $('.para__img8').css('margin-top', ($('.para__img8').offset().top - scroll) / 3);
    //     $('.para__img7').css('opacity', num);
    //     $('.para__img8').css('opacity', num);
    //   }
    // });

  });

}
