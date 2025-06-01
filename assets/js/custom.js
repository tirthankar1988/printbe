const swiper = new Swiper(".services-swiper", {
  loop: true,
  spaceBetween: 25,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

$(".horizontal-scroll-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // no delay between scrolls
  speed: 3000, // total duration of scroll
  cssEase: "linear", // smooth transition
  infinite: true,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
     {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

const cards = document.querySelectorAll(".card");
cards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

var swiper2 = new Swiper(".testimonial__one-slider-active", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 1500,
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

var swiper3 = new Swiper(".shop-swiper", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 1500,
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
  breakpoints: {
   576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
     992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});

$(function () {
  let $window = $(window);
  let $header = $(".header__sticky");

  $window.on("scroll", function () {
    let scrollDown = parseInt($window.scrollTop(), 10); // Explicit radix added
    $header.toggleClass("header__sticky-sticky-menu", scrollDown >= 135);
  });
});

gsap.registerPlugin(ScrollTrigger);

// Banner section
gsap.fromTo(
  ".banner__one-content",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".banner__one",
      start: "top center",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  ".banner__one-image",
  { opacity: 0, x: 100 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".banner__one",
      start: "top center",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

// About section
gsap.fromTo(
  ".about__one-image",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about__one",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  ".about__one-content",
  { opacity: 0, x: 100 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about__one",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

// Services section
gsap.fromTo(
  ".special-services",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".special-services",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  ".services-swiper",
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".services-swiper",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

// Pricing section
gsap.fromTo(
  ".design-plans",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".design-plans",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  ".plan_cards",
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".plan_cards",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

// Portfolio section
gsap.fromTo(
  ".latest-portfolio, .project__six-filter-button",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".latest-portfolio, .project__six-filter-button",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  ".project-filter-active",
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".project-filter-active",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

// Testimonial section
gsap.fromTo(
  ".faq__one-content",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".faq__one-content",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

gsap.fromTo(
  ".faq__one",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".faq__one",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

// Subscribe section
gsap.fromTo(
  ".subscribe__one-title",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".subscribe__one-title",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

// Inner Banner section
gsap.fromTo(
  ".transform_brands",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".transform_brands",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      once: false,
    },
  }
);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}