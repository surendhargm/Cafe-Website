// Swiper Initialization
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Sticky Navbar and Counter Animation
let menu = document.querySelector(".menu");
let nums = document.querySelectorAll(".num");
let start = false;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  // Sticky Navbar
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // Trigger Counter Animation
  if (window.scrollY >= menu.offsetTop - window.innerHeight) {
    if (!start) {
      nums.forEach((num) => startCount(num));
      start = true;
    }
  }
});

// Counter Animation Function
const startCount = (el) => {
  const max = parseInt(el.dataset.val, 10); // Convert dataset value to a number
  let current = 0; // Initial count
  const increment = Math.ceil(max / 50); // Adjust for smooth animation

  const count = setInterval(() => {
    current += increment;
    if (current >= max) {
      el.textContent = max; // Set to the exact maximum value
      clearInterval(count);
    } else {
      el.textContent = current;
    }
  }, 50); // Faster updates for smoother animation
};
