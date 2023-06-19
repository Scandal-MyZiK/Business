import Swiper from 'swiper';
document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".reviews-slider", {
    loop: true,
      breakpoints: {
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
        },
    },
  });
    document.querySelectorAll('.question-accordin').forEach((el) => {
        let button = el.querySelector('.question-accordin__top');
        let content = el.querySelector('.question-accordin__bottom');
        let icon = el.querySelector('.question-accordin__icon');
        button.addEventListener('click', () => {
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.paddingTop = null;
            icon.classList.remove('active');
          } else {
            if (document.documentElement.clientWidth < 500) {
              content.style.maxHeight = content.scrollHeight + 10 + 'px';
              content.style.paddingTop = '10px';
            }
            else{
              content.style.maxHeight = content.scrollHeight + 30 + 'px';
              content.style.paddingTop = '30px';
            }
            icon.classList.add('active');
          }
        });
      });
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        const headerList = document.querySelector('.header-menu__list');
        headerList.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});