export function parallax() {

  // 画面の高さを取得
  let windowHeight = window.innerHeight;
  // 画面の幅を取得
  let windowWidth = window.innerWidth;

  // 画面の高さ レスポンシブ対応用
  window.addEventListener('load', update_window_size());
  // 画面の幅 レスポンシブ対応用
  window.addEventListener('resize', function () {
    update_window_size();
  });
  // 画面の幅と高さを取得
  function update_window_size() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  }
  // パララックスしたい要素を設定
  const sections = [];
  const section1 = 'is-parallax-course1';
  const section2 = 'is-parallax-course2';
  const section3 = 'is-parallax-camp1';
  const section4 = 'is-parallax-camp2';
  const section5 = 'is-parallax-text1';
  const section6 = 'is-parallax-text2';
  const section7 = 'is-parallax-text3';
  const section8 = 'is-parallax-text4';
  sections.push(section1, section2, section3, section4, section5, section6, section7, section8);
  // top 表示
  const topElement = document.getElementById('is-parallax-top');
  // top用 opacity設定
  window.addEventListener('load', function () {
    topElement.style.opacity = 1;
  });
  // スクロール時に実行
  window.addEventListener('scroll', function () {
    // Y方向のスクロール量を取得
    const scroll = window.pageYOffset;
    // レスポンシブ対応 whidthが958px以上の場合、発火
    if (windowWidth > 958) {
      // top parallax アニメーション
      topTextParallax(scroll);
      // course parallax アニメーション
      parallaxWarp(scroll, section1, 100);
      parallaxLeftDirection(scroll, section2, 100);
      // camp parallax アニメーション
      parallaxWarp(scroll, section3, -300);
      parallaxRightDirection(scroll, section4, -500);
      // item tile parallax アニメーション
      parallaxWarp(scroll, section5, -1200);
      // diary tile parallax アニメーション
      parallaxWarp(scroll, section6, -1700);
      // about tile parallax アニメーション
      parallaxWarp(scroll, section7, -2700);
      // book  parallax アニメーション
      parallaxWarp(scroll, section8, -2800);
    } else {
      // それ以外は通常表示
      for (let i = 0; i < sections.length; i++) {
        const sectionElement = document.getElementById(sections[i]);
        sectionElement.style.opacity = 1;
      }
    }
  });

  // top parallax アニメーション
  function topTextParallax(scroll) {
    // heightの数値
    let heightNum = Math.floor((topElement.getBoundingClientRect().top - scroll)) / 20;
    // スタイルに反映
    topElement.style.marginTop = heightNum + 'px';
  }

  // parallax opacity, marginLeft  アニメーション
  function parallaxLeftDirection(scroll, section, reg) {
    // 実行要素を取得
    const sectionElement = document.getElementById(section);
    // topから要素までのY軸を取得
    const elemTop = sectionElement.getBoundingClientRect().top + window.pageYOffset;
    // 画面にされた場合
    if (windowHeight + scroll > elemTop) {
      // opacityの数値
      let opacityNum = Math.floor(((scroll + reg) - sectionElement.getBoundingClientRect().top)) / 100;
      // leftの数値
      let leftNum = Math.floor((sectionElement.getBoundingClientRect().top - scroll)) / 20;
      // スタイルに反映
      sectionElement.style.marginLeft = leftNum + 'px';
      sectionElement.style.opacity = opacityNum;
    } else {
      sectionElement.style.opacity = 0;
    }
  }
  // parallax opacity, marginRight アニメーション
  function parallaxRightDirection(scroll, section, reg) {
    // 実行要素を取得
    const sectionElement = document.getElementById(section);
    // 要素の高さを取得
    const elemTop = sectionElement.getBoundingClientRect().top + window.pageYOffset;
    // 画面にされた場合
    if (windowHeight + scroll > elemTop) {
      // opacityの数値
      let opacityNum = Math.floor(((scroll + reg) - sectionElement.getBoundingClientRect().top)) / 100;
      // rightの数値
      let rightNum = Math.floor((sectionElement.getBoundingClientRect().top - scroll)) / 20;
      // スタイルに反映
      sectionElement.style.marginRight = rightNum + 'px';
      sectionElement.style.opacity = opacityNum;
    } else {
      sectionElement.style.opacity = 0;
    }
  }

  // parallax opacity, marginTop アニメーション
  function parallaxWarp(scroll, section, reg) {
    // 実行要素を取得
    const sectionElement = document.getElementById(section);
    // 各要素のtopからの高さを取得
    const elemTop = sectionElement.getBoundingClientRect().top + window.pageYOffset;
    // 画面にされた場合
    if (windowHeight + scroll > elemTop) {
      // opacityの数値
      let opacityNum = Math.floor(((scroll + reg) - sectionElement.getBoundingClientRect().top)) / 100;
      // heightの数値
      let heightNum = Math.floor((sectionElement.getBoundingClientRect().top - scroll) / 20);
      // スタイルに反映
      sectionElement.style.marginTop = heightNum + 'px';
      sectionElement.style.opacity = opacityNum;
    }
  }
}
