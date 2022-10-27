export function scrollNav() {
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
    const $menuElem = document.getElementById('is-menu-animation');
    for (let i = 0; i < smoothScrollTrigger.length; i++) {
      smoothScrollTrigger[i].addEventListener('click', function(e){
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement  = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 100;
        const target = rect + offset - gap;
        window.scrollTo({
          top : target,
          behavior: 'smooth'
        });
        $menuElem.classList.remove('js-show-menu');
      });
    }
    console.log('scrollNav OK!');
}