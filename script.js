const sliderItems = document.querySelectorAll(".slider-item");
const sliderDotFill = document.querySelector(".page-dot-fill");
const missionText = document.querySelector(".mission-text");
const welcomeButtons = document.querySelectorAll(".welcome-button");
const video = document.getElementById("banner-video");

const changeSlide = () => {
  // Toggle the dot position
  if (sliderDotFill.classList.contains("dot-left")) {
    sliderDotFill.classList.remove("dot-left");
  } else {
    sliderDotFill.classList.add("dot-left");
  }

  // Loop through slider items to change their visibility
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains("slider-item-hidden")) {
      sliderItems[i].classList.remove("slider-item-hidden"); // Fade in
    } else {
      sliderItems[i].classList.add("slider-item-hidden"); // Fade out
    }
  }
};

// Automatically change the slide every 3 seconds
setInterval(() => {
  changeSlide();
}, 5000);

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

const missionDisplay = () => {
  clearWelcomeButton(0);
  missionText.textContent =
    "Our mission is to provide exceptional, reliable, and honest auto repair services that keep our customers' vehicles running safely and efficiently. We are committed to delivering high-quality workmanship, transparent communication, and customer satisfaction with every service we offer.";
};

const visionDisplay = () => {
  clearWelcomeButton(1);
  missionText.textContent =
    "To be the most trusted and dependable auto repair shop in our community, known for our expertise, integrity, and customer-first approach. We strive to build long-lasting relationships with our clients by ensuring their vehicles are always in peak condition and providing a hassle-free service experience.";
};

const valueDisplay = () => {
  clearWelcomeButton(2);
  missionText.textContent =
    "Integrity: Honest, transparent service you can trust. Quality: Skilled technicians delivering top-tier results. Customer Focus: Personalized care with your needs in mind. Safety: Ensuring your vehicle is road-ready and secure.";
};

const clearWelcomeButton = (index) => {
  for (let i = 0; i < welcomeButtons.length; i++) {
    if (i !== index) {
      welcomeButtons[i].classList.remove("welcome-active");
    } else {
      welcomeButtons[i].classList.add("welcome-active");
    }
  }
};

const feedbackSlider = document.querySelector(".feedback-slider-carousel");

const addFeedbackSlide = (personData, index) => {
  const slide = `
  <div class="feedback-slide-wrapper">
              <div class="feedback-slide">
                <p class="feedback-text">
                  ${personData.feedback}
                </p>
                <div class="feedback-person">
                  <img
                    src="./img/persons/${index + 1}.jpg"
                    alt="avatar"
                    class="feedback-avatar"
                  />
                  <div class="feedback-person-data">
                    <h2>${personData.name}</h2>
                    <p>${personData.job}</p>
                  </div>
                </div>
              </div>
              <img
                src="./img/double-quote.png"
                alt="quotes"
                class="feedback-quotes"
              />
            </div>
  `;
  feedbackSlider.insertAdjacentHTML("beforeend", slide);
};

const fillFeedbackCarousel = () => {
  const feedbacksData = [
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
  for (let i = 0; i < 15; i++) {
    addFeedbackSlide(feedbacksData[i], i);
  }
};

const feedbackDots = document.querySelectorAll(".dot")
const feedbackInnerDots = document.querySelectorAll(".inner-dot")

function updateActiveDot(activePage) {
  feedbackDots.forEach((dot, index) => {
      dot.classList.toggle('active-dot', index === activePage);
  });
}

let currentFeedbackPage = 0;

const scrollSlider = (index) => {
  currentFeedbackPage = index;
  const sliderWidth = feedbackSlider.getBoundingClientRect().width;
  feedbackSlider.scrollLeft = index * sliderWidth;
  updateActiveDot(index);
}



feedbackSlider.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    currentFeedbackPage === 4? scrollSlider(0):scrollSlider(currentFeedbackPage+1);
    
  } else if (event.deltaY < 0) {
    currentFeedbackPage === 0? scrollSlider(4):scrollSlider(currentFeedbackPage-1);
  }

  if (event.deltaX > 0) {
    currentFeedbackPage === 4? scrollSlider(0):scrollSlider(currentFeedbackPage+1);
  } else if (event.deltaX < 0) {
    currentFeedbackPage === 0? scrollSlider(4):scrollSlider(currentFeedbackPage-1);
  }
});

fillFeedbackCarousel();
