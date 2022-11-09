export function parallax() {

  // 画面の高さを取得
  let windowHeight = window.innerHeight;
  // 画面の幅を取得
  let windowWidth = window.innerWidth;


  // 画面の高さ,幅s レスポンシブ対応用
  window.addEventListener('load', update_window_size);
  window.addEventListener('resize', function () {
    update_window_size();
  });
  function update_window_size() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  }
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
  // console.log(sections);
  // top 表示
  const topElement = document.getElementById('is-parallax-top');
  // top用 opacity設定
  window.addEventListener('load', function () {
    topElement.style.opacity = 1;
  });
  // スクロール時に実行
  window.addEventListener('scroll', function () {
    // スクロールの位置を取得
    const scroll = document.documentElement.scrollTop;
    // console.log(sections.length);
    if (windowWidth > 958) {
      // top parallax アニメーション
      topTextParallax(scroll);
      // course parallax アニメーション
      parallaxWarp(scroll, section1, 100);
      parallaxLeftDirection(scroll, section2, 100);
      // camp parallax アニメーション
      parallaxWarp(scroll, section3, 200);
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
      for (let i = 0; i < sections.length; i++) {
        const sectionElement = document.getElementById(sections[i]);
        sectionElement.style.opacity = 1;
      }
    }
  });

  // top parallax アニメーション
  function topTextParallax(scroll) {
    let heightNum = Math.floor((topElement.getBoundingClientRect().top - scroll)) / 20;
    topElement.style.marginTop = heightNum + 'px';
  }

  // parallax opacity, marginLeft  アニメーション
  function parallaxLeftDirection(scroll, section, reg) {
    const sectionElement = document.getElementById(section);
    const elemTop = sectionElement.getBoundingClientRect().top + window.pageYOffset;
    if (windowHeight + scroll > elemTop) {
      let opacityNum = Math.floor(((scroll + reg) - sectionElement.getBoundingClientRect().top)) / 100;
      let heightNum = Math.floor((sectionElement.getBoundingClientRect().top - scroll)) / 20;
      sectionElement.style.marginLeft = heightNum + 'px';
      sectionElement.style.opacity = opacityNum;
    } else {
      sectionElement.style.opacity = 0;
    }
  }
  // parallax opacity, marginRight アニメーション
  function parallaxRightDirection(scroll, section, reg) {
    const sectionElement = document.getElementById(section);
    const elemTop = sectionElement.getBoundingClientRect().top + window.pageYOffset;
    if (windowHeight + scroll > elemTop) {
      let opacityNum = Math.floor(((scroll + reg) - sectionElement.getBoundingClientRect().top)) / 100;
      let heightNum = Math.floor((sectionElement.getBoundingClientRect().top - scroll)) / 20;
      sectionElement.style.marginRight = heightNum + 'px';
      sectionElement.style.opacity = opacityNum;
    } else {
      sectionElement.style.opacity = 0;
    }
  }

  // parallax opacity, marginTop アニメーション
  function parallaxWarp(scroll, section, reg) {
    const sectionElement = document.getElementById(section);
    const elemTop = sectionElement.getBoundingClientRect().top + window.pageYOffset;
    if (windowHeight + scroll > elemTop) {
      let opacityNum = Math.floor(((scroll + reg) - sectionElement.getBoundingClientRect().top)) / 100;
      let heightNum = Math.floor((sectionElement.getBoundingClientRect().top - scroll) / 20);
      sectionElement.style.marginTop = heightNum + 'px';
      sectionElement.style.opacity = opacityNum;
    }
  }
}
