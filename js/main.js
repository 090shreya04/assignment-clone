const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});


document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle("open");
        }
    });
});

document.querySelectorAll(".dropdown-sub > a").forEach(item => {
    item.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle("open");
        }
    });
});


var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 25,
        }
    }
});
