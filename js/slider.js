const slideList = document.querySelector(".slider__list"),
      slider = document.querySelector(".slider");


// Slide content     
const reviewCardsData = [
  {
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith 1",
    company: "Marketing Director at XYZ corp",
  },
  {
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith 2",
    company: "Marketing Director at XYZ corp",
  },
  {
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith 3",
    company: "Marketing Director at XYZ corp",
  },
  {
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith 4",
    company: "Marketing Director at XYZ corp",
  },
  {
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith 5",
    company: "Marketing Director at XYZ corp",
  },
  {
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith 6",
    company: "Marketing Director at XYZ corp",
  },
  {
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    author: "John Smith 7",
    company: "Marketing Director at XYZ corp",
  },
  
];

const renderReviewsCard = (data) => {
  data.map((item) => {
    slideList.insertAdjacentHTML(
      "beforeend",
      `
            <li class="slider__item">
                   <blockquote class="review-card">
                     <div class="review-card__body">
                       <p>${item.review}</p>
                     </div>
                     <footer class="review-card__footer">
                       <cite class="review-card__name">${item.author}</cite>
                       <cite class="review-card__company">${item.company}</cite>
                     </footer>
                   </blockquote>
                 </li>
           `
    );
  });
};

renderReviewsCard(reviewCardsData);

// Getting slides from a page for cloning
const slides = document.querySelectorAll(".slider__item");

// Current active slide / for pagination and scrolling
let index = 1;

// Render pagination
const renderPagination = (data) => {
  const paginationList = document.querySelector(".pagination__list")
  const totalCount = data.length
  const paginationItems = []
  
  for (let i = 1; i <= totalCount; i++) {
    paginationItems.push(i)
  }
  
  paginationItems.map((item) => {
    paginationList.insertAdjacentHTML('beforeend', 
    `
      <li class="pagination__item ${item == index ? "active" : null}" id="pagination${item}">
        <span class="visually-hidden"> ${item} slide </span>
        <svg width="14" height="14" viewBox="0 0 14 14"       fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
        </svg>
      </li>
    `)
  })
}

renderPagination(slides)

const paginationItems = document.querySelectorAll(".pagination__item")

// Cloning slides
const firstSlideClone = slides[0].cloneNode(true);
const secondSlideClone = slides[1].cloneNode(true);
const lastSlideClone = slides[slides.length - 1].cloneNode(true);
const beforeLastClone = slides[slides.length - 2].cloneNode(true);

firstSlideClone.id = "first-slide-clone";
secondSlideClone.id = "second-style-clone";
lastSlideClone.id = "last-slide-clone";
beforeLastClone.id = "before-last-slide-clone";

slideList.append(firstSlideClone);
slideList.append(secondSlideClone);
slideList.prepend(lastSlideClone);
slideList.prepend(beforeLastClone);

// Getting the current slides together with the cloned slides
const currentSlides = document.querySelectorAll(".slider__item");

// Variables
const totalCounterCloneSlide = 4
const totalCounterSlide = currentSlides.length;
const sliderWindowWidth = 1240 // The initial slider width
const mobileSliderWindowWidth = 727 // The width of the slider where the slides are smaller
let currentSliderWindowWidth = sliderWindowWidth
let slideWidth = +window.getComputedStyle(slides[0]).width.slice(0, -2);
let slideColumnGap = +window.getComputedStyle(slideList).columnGap.slice(0, -2);
let translateX = slideWidth + slideColumnGap;
let initTranslateX = slideWidth * 1.5 + slideColumnGap * 1.7
let autoPlay = true
let autoPlayInterval = 3000;

// Setting the initial parameters
const initSlider = () => {
  index = 1

  slideList.style.transform = `translateX(-${initTranslateX}px)`
  
  currentSlides.forEach((item) => {
    item.classList.remove("active")
    })

  paginationItems.forEach((item) => {
    item.classList.remove("active")
  })

  currentSlides[index + 1].classList.add("active")
  paginationItems[index - 1].classList.add("active")
};

// Adaptive initial translateX for different screen sizes
new ResizeObserver((changes) => {

  for (const change of changes) {
    currentSliderWindowWidth = change.contentRect.width
    
    if (currentSliderWindowWidth <= mobileSliderWindowWidth) {
      slideWidth = +window.getComputedStyle(slides[0]).width.slice(0, -2);
      translateX = slideWidth + slideColumnGap;
      initTranslateX = slideWidth * 0.668 + slideColumnGap * 1.7 + (sliderWindowWidth - currentSliderWindowWidth) / 2
      console.log('mobile')
      initSlider()

    } else {
      slideWidth = +window.getComputedStyle(slides[0]).width.slice(0, -2);
      translateX = slideWidth + slideColumnGap;
      initTranslateX = slideWidth * 1.5 + slideColumnGap * 1.7 + (sliderWindowWidth - currentSliderWindowWidth) / 2
      console.log('desktop')
      initSlider()
    } 
  }
  
}).observe(slider)

// Auto play timeout interval id for stop/start auto play
let autoPlayIntervalId;

// Auto play

const startAutoPlaySlider = () => {
  autoPlayIntervalId = setInterval(() => {

    // PAGINATION
    paginationItems.forEach((item) => {
      item.classList.remove("active")
    })
  
    if (index >= currentSlides.length - totalCounterCloneSlide){
      paginationItems[0].classList.add("active")
    } else {
      paginationItems[index].classList.add("active")
    }
    // PAGINATION

    slideList.style.transition = "0.5s";
    slideList.style.transform = `translateX(-${translateX * index + initTranslateX}px)`;
    index++;

    // Active slide style
    currentSlides.forEach((item) => {
    item.classList.remove("active")
    })
    currentSlides[index + 1].classList.add("active")

  }, autoPlayInterval);
};

if (autoPlay) {
  // Stop auto play when you hover the cursor
  slider.addEventListener("mouseenter", () => {
    clearInterval(autoPlayIntervalId);
  });

  // Start auto play when your cursor leave
  slider.addEventListener("mouseleave", startAutoPlaySlider);

  // Stop/Start auto play when you leave or return to a tab in the browser
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {
      startAutoPlaySlider()
    } else {
      clearInterval(autoPlayIntervalId)
    }
  })

  startAutoPlaySlider()
}

// Infinity logic
slideList.addEventListener("transitionend", (e) => {
  
  if (e.propertyName !== "transform") return

  if (currentSlides[index + 1].id === firstSlideClone.id) {
    slideList.style.transition = "none";
    index = 1;
    slideList.style.transform = `translateX(-${translateX * (index - 1) + initTranslateX}px)`;
    
    // Active slide style
      currentSlides.forEach((item) => {
        item.classList.remove("active")
      })
      currentSlides[index + 1].classList.add("active")
  }

  if (currentSlides[index + 1].id === lastSlideClone.id) {
    slideList.style.transition = "none";
    index = currentSlides.length - totalCounterCloneSlide;
    slideList.style.transform = `translateX(-${translateX * (index - 1) + initTranslateX}px)`;

    // Active slide style
    currentSlides.forEach((item) => {
      item.classList.remove("active")
    })
    currentSlides[index + 1].classList.add("active")
  }
});

// Function for scroll left
const prevSlide = () => {

  if (index <= 0) return // Protection against spam clicks when you are at the end of the slider

  // PAGINATION
  paginationItems.forEach((item) => {
    item.classList.remove("active")
  })
  // PAGINATION
  
  index--;

  // PAGINATION
  if (index <= 0){
    paginationItems[paginationItems.length - 1].classList.add("active")
  } else {
    paginationItems[index - 1].classList.add("active")
  }
  // PAGINATION

  slideList.style.transition = "0.5s";
  slideList.style.transform = `translateX(-${translateX * (index - 1) + initTranslateX}px)`;

  // Active slide style
  currentSlides.forEach((item) => {
    item.classList.remove("active")
   })
  currentSlides[index + 1].classList.add("active")
};

// Function for scroll right
const nextSlide = () => {
  
  if (index >= currentSlides.length - totalCounterCloneSlide + 1) return; // Protection against spam clicks when you are at the end of the slider

  // PAGINATION
  paginationItems.forEach((item) => {
    item.classList.remove("active")
  })

  if (index >= currentSlides.length - totalCounterCloneSlide){
    paginationItems[0].classList.add("active")
  } else {
    paginationItems[index].classList.add("active")
  }
  // PAGINATION

  slideList.style.transition = "0.5s";
  slideList.style.transform = `translateX(-${translateX * index + initTranslateX}px)`;
  index++;

  // Active slide style
   currentSlides.forEach((item) => {
    item.classList.remove("active")
   })
   currentSlides[index + 1].classList.add("active")
};

// Add click on slider buttons
const addSliderButtonsClick = () => {
  sliderButtonNext = document.querySelector(".slider-button--next");
  sliderButtonPrev = document.querySelector(".slider-button--prev");

  sliderButtonNext.addEventListener("click", nextSlide);
  sliderButtonPrev.addEventListener("click", prevSlide);
};

// Add click on pagination buttons
const addPaginationButtonClick = () => {
  paginationItems.forEach((item) => {
    const itemId = +item.id.slice(10) // 'pagination1' => 1
    
    item.addEventListener('click', () => {
      index = itemId - 1
      nextSlide()
    })
  })
}

addSliderButtonsClick();
addPaginationButtonClick();



