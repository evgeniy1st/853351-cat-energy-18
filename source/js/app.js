var mainNavigation = document.querySelector('.main-nav');
var mainNavigationList = mainNavigation.querySelector('.main-nav__list');
var mainNavigationToggle = mainNavigation.querySelector('.main-nav__toggle');

mainNavigationList.classList.add('main-nav__list--close');
mainNavigationToggle.classList.add('main-nav__toggle--close')

mainNavigationToggle.addEventListener('click', function(event) {
  event.preventDefault();

  mainNavigationToggle.classList.toggle('main-nav__toggle--close');
  mainNavigationList.classList.toggle('main-nav__list--close')
})


if (document.querySelector('.cat-slider')) {
  var catSlider = document.querySelector('.cat-slider');
  var buttonBefore = catSlider.querySelector('.cat-slider__button--before');
  var buttonAfter = catSlider.querySelector('.cat-slider__button--after');
  var sliderIndicator = catSlider.querySelector('.cat-slider__indicator');
  var count = 0;

  buttonBefore.addEventListener('click', function(event) {
    event.preventDefault();

    count--;
    if (count === 0) {
    catSlider.classList.remove('cat-slider--after');
    sliderIndicator.classList.remove('cat-slider__indicator--after');
    } else if (count < 0) {
      count = -1;
      catSlider.classList.add('cat-slider--before');
      sliderIndicator.classList.add('cat-slider__indicator--before');
    }
  })

  buttonAfter.addEventListener('click', function (event) {
    event.preventDefault();

    count++;
    if (count === 0) {
      catSlider.classList.remove('cat-slider--before');
      sliderIndicator.classList.remove('cat-slider__indicator--before');
    } else if (count > 0) {
      count = 1;
      catSlider.classList.add('cat-slider--after');
      sliderIndicator.classList.add('cat-slider__indicator--after');
    }
  })
}
