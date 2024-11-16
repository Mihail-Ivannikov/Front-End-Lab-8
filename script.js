const sliderItems = document.querySelectorAll(".slider-item");
const sliderDotFill = document.querySelector(".page-dot-fill");
const missionText = document.querySelector(".mission-text");
const welcomeButtons = document.querySelectorAll(".welcome-button");
const video = document.getElementById("banner-video");

const changeSlide = () => {
  sliderDotFill.classList.toggle("dot-left");

  sliderItems.forEach((item) => {
    item.classList.toggle("slider-item-hidden");
  });
};

setInterval(changeSlide, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const ctrlVideo = document.getElementById("banner-video");
  const button = document.querySelector(".video-button");

  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      ctrlVideo.play();
      button.innerHTML =
        '<img class="play-image" src="./img/pause.png" alt="Play">';
    } else {
      ctrlVideo.pause();
      button.innerHTML =
        '<img class="play-image" src="./img/play-button.png" alt="Play">';
    }
    button.classList.toggle("active");
  });
});

const updateMissionText = (text, index) => {
  missionText.textContent = text;
  welcomeButtons.forEach((btn, i) => {
    btn.classList.toggle("welcome-active", i === index);
  });
};

const missionDisplay = () =>
  updateMissionText(
    "Our mission is to provide exceptional, reliable, and honest auto repair services that keep our customers' vehicles running safely and efficiently. We are committed to delivering high-quality workmanship, transparent communication, and customer satisfaction with every service we offer.",
    0,
  );

const visionDisplay = () =>
  updateMissionText(
    "To be the most trusted and dependable auto repair shop in our community, known for our expertise, integrity, and customer-first approach. We strive to build long-lasting relationships with our clients by ensuring their vehicles are always in peak condition and providing a hassle-free service experience.",
    1,
  );

const valueDisplay = () =>
  updateMissionText(
    "Integrity: Honest, transparent service you can trust. Quality: Skilled technicians delivering top-tier results. Customer Focus: Personalized care with your needs in mind. Safety: Ensuring your vehicle is road-ready and secure.",
    2,
  );

const feedbackSlider = document.querySelector(".feedback-slider-carousel");

const addFeedbackSlide = (personData, index) => {
  const slide = `
    <div class="feedback-slide-wrapper">
      <div class="feedback-slide">
        <p class="feedback-text">${personData.feedback}</p>
        <div class="feedback-person">
          <img src="./img/persons/${index + 1}.jpg" alt="avatar" class="feedback-avatar" />
          <div class="feedback-person-data">
            <h2>${personData.name}</h2>
            <p>${personData.job}</p>
          </div>
        </div>
      </div>
      <img src="./img/double-quote.png" alt="quotes" class="feedback-quotes" />
    </div>
  `;
  feedbackSlider.insertAdjacentHTML("beforeend", slide);
};

const feedbackData = [
  {
    feedback: "Excellent service! My car runs like new.",
    name: "Tom Riddle",
    job: "Sales Assistant",
  },
  {
    feedback: "Quick, reliable, and affordable. Highly recommend!",
    name: "Jane Miller",
    job: "Graphic Designer",
  },
  {
    feedback: "The staff was friendly and got the job done fast.",
    name: "Adam Thompson",
    job: "Account Manager",
  },
  {
    feedback: "They fixed my car in no time. Fantastic experience!",
    name: "Emily Turner",
    job: "Software Engineer",
  },
  {
    feedback: "Best auto repair shop I’ve ever visited.",
    name: "David Clark",
    job: "Marketing Specialist",
  },
  {
    feedback: "Honest, fair pricing and quality work.",
    name: "Sarah Brown",
    job: "Project Manager",
  },
  {
    feedback: "Got my car back in perfect condition, thanks!",
    name: "James Wilson",
    job: "Financial Analyst",
  },
  {
    feedback: "The team was knowledgeable and super helpful.",
    name: "Olivia Grant",
    job: "HR Coordinator",
  },
  {
    feedback: "Fast turnaround and great customer service!",
    name: "Michael Lee",
    job: "IT Consultant",
  },
  {
    feedback: "Very professional and reliable. My go-to place now.",
    name: "Sophia Green",
    job: "Teacher",
  },
  {
    feedback: "I trust them with all my car repairs. Highly recommended!",
    name: "Daniel White",
    job: "Architect",
  },
  {
    feedback: "Efficient, affordable, and friendly. A+ service!",
    name: "Laura King",
    job: "Customer Service Representative",
  },
  {
    feedback: "They explained everything and gave me peace of mind.",
    name: "Ryan Taylor",
    job: "Web Developer",
  },
  {
    feedback: "Top-notch service at a fair price! Highly recommended!",
    name: "Jessica Scott",
    job: "Digital Marketer",
  },
  {
    feedback: "The repairs were done quickly, and my car feels brand new!",
    name: "Chris Morgan",
    job: "Operations Manager",
  },
];

const fillFeedbackCarousel = () => feedbackData.forEach(addFeedbackSlide);

const addDots = (pagesAmount) => {
  const feedbackDotsBlock = document.querySelector(".feedback-slider-dots");
  let dots = ``;
  for (let i = 0; i < pagesAmount; i++) {
    const active = i === 0 ? "active-dot" : "";
    dots += `<div class="dot ${active}" onclick="scrollSlider(${i})"><div class="inner-dot"></div></div>`;
  }
  feedbackDotsBlock.innerHTML = dots;
};

const updateActiveDot = (activePage) => {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active-dot", index === activePage);
  });
};

const defineSliderPages = () => {
  const slideWrapper = document.querySelector(".feedback-slide-wrapper");
  const sliderWidth = feedbackSlider.offsetWidth;
  const minBlockWidth = Math.floor(slideWrapper.offsetWidth);
  const minGap = 50;

  let slides = Math.floor(sliderWidth / minBlockWidth);
  let gap = (sliderWidth - slides * minBlockWidth) / slides;

  if (gap < minGap) {
    slides -= 1;
    gap = (sliderWidth - slides * minBlockWidth) / slides;
  }

  document
    .querySelectorAll(".feedback-slide-wrapper")
    .forEach((slide, index, slides) => {
      if (index === 0) {
        slide.style.marginLeft = `${gap / 2}px`;
      } else if (index === slides.length - 1) {
        slide.style.marginLeft = `${gap}px`;
        slide.style.marginRight = `${gap / 2}px`;
      } else {
        slide.style.marginLeft = `${gap}px`;
      }
    });

  addDots(Math.floor(15 / slides));
  scrollSlider(0);
};

window.addEventListener("resize", defineSliderPages);

let currentFeedbackPage = 0;

const scrollSlider = (index) => {
  currentFeedbackPage = index;
  const sliderWidth = feedbackSlider.getBoundingClientRect().width;
  feedbackSlider.scrollLeft = index * sliderWidth;
  updateActiveDot(index);
};

feedbackSlider.addEventListener("wheel", (event) => {
  dotsAmount = document.querySelectorAll(".dot").length;

  if (event.deltaY > 0 || event.deltaX > 0) {
    currentFeedbackPage = (currentFeedbackPage + 1) % dotsAmount;
  } else {
    currentFeedbackPage =
      currentFeedbackPage === 0 ? dotsAmount - 1 : currentFeedbackPage - 1;
  }
  scrollSlider(currentFeedbackPage);
});

fillFeedbackCarousel();
defineSliderPages();

const contacts = document.querySelector(".contacts-popup");
const menuPopup = document.querySelector(".menu-popup-wrapper");

function showContacts() {
  contacts.style.display = "flex";
}

function hideContacts() {
  contacts.style.display = "none";
}

function showMenuPopup() {
  menuPopup.style.display = "flex";
}

function hideMenuPopup() {
  menuPopup.style.display = "none";
}
