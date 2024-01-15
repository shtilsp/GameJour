export function slider() {
    const sliderGameName = document.getElementById('slider-game-name');
    const sliderImg = document.getElementById('slider-img');
    const sliderSlide = document.querySelectorAll('.slider__slide')


    const sliderPaginationEl = document.querySelectorAll('.slider__pagination-el');

    sliderSlide[1].style.display = "none";
    sliderSlide[2].style.display = "none";

    function firstSlide() {
        sliderPaginationEl[0].addEventListener('click', function () {
            sliderSlide[0].style.display = "block"
            sliderSlide[1].style.display = "none";
            sliderSlide[2].style.display = "none";

            sliderPaginationEl[0].classList.add('slider__pagination-el', 'slider__pagination-el-active')

            sliderPaginationEl[1].classList.remove( 'slider__pagination-el-active')
            sliderPaginationEl[2].classList.remove( 'slider__pagination-el-active')

            sliderGameName.innerHTML = ''

            sliderGameName.innerHTML = 'Cyberpunk 2077: Phantom Liberty'
        });
    }

    function secondSlide() {
        sliderPaginationEl[1].addEventListener('click', function () {
            sliderSlide[0].style.display = "none"
            sliderSlide[1].style.display = "block";
            sliderSlide[2].style.display = "none";

            sliderPaginationEl[0].classList.remove( 'slider__pagination-el-active')
            sliderPaginationEl[2].classList.remove( 'slider__pagination-el-active')

            sliderPaginationEl[1].classList.add('slider__pagination-el', 'slider__pagination-el-active')



            sliderGameName.innerHTML = ''

            sliderGameName.innerHTML = `Marvel's Spider-Man 2`
        })
    }

    function thirdSlide() {
        sliderPaginationEl[2].addEventListener('click', function () {
            sliderSlide[0].style.display = "none"
            sliderSlide[1].style.display = "none";
            sliderSlide[2].style.display = "block";

            sliderPaginationEl[0].classList.remove( 'slider__pagination-el-active')
            sliderPaginationEl[1].classList.remove( 'slider__pagination-el-active')

            sliderPaginationEl[2].classList.add('slider__pagination-el', 'slider__pagination-el-active')



            sliderGameName.innerHTML = ''

            sliderGameName.innerHTML = `Alan Wake II`
        })
    }

    function sliderTimer() {
        
    }

    function sliderInit() {
        firstSlide();
        secondSlide();
        thirdSlide();
    }






    sliderInit()






}