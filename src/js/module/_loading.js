export function loading() {
  $(window).on('load', function () {
    $(this).delay(1500).queue(function () {
      $('#is-loading').addClass('js-loaded');
    });
  });

}
