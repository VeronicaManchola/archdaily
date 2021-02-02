const imgSlider = document.querySelector('#imgSlider');
let carousel = new bootstrap.Carousel(imgSlider, {
    interval: 5000
})
const indicators = document.querySelectorAll('ul.indicators li');

imgSlider.addEventListener('slide.bs.carousel', ev => {
    indicators[ev.from].classList.remove('active');
    indicators[ev.to].classList.add('active');
});

const indList = document.querySelectorAll('ul.indicators li');

indList.forEach(el => {
    el.addEventListener("mouseover", function (ev) {
        this.click();
    })
})
