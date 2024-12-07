const overlay = document.querySelector('.overlay')
const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.nav')
const header = document.querySelector('header')

menuToggle.addEventListener('click', () => {
    overlay.classList.toggle('active')
    nav.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink')
    }
})

// hero swiper
const heroSwiper = new Swiper('.hero-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

// featured swiper
const featuredSwiper = new Swiper('.featured-product-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    }
})

// aos
AOS.init({
    delay: 200
})