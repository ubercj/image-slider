const carousel = document.getElementById("carousel");

const leftButtons = document.querySelectorAll(".left");
const rightButtons = document.querySelectorAll(".right");

const trigger1 = document.querySelector(".trigger-1");
const trigger2 = document.querySelector(".trigger-2");
const trigger3 = document.querySelector(".trigger-3");
const trigger4 = document.querySelector(".trigger-4");
const trigger5 = document.querySelector(".trigger-5");

const next = (el) => {
  let number = getNumber(el);
  clearClasses(el);
  let newNumber;
  
  number >= 5 ? newNumber = 1 : newNumber = number + 1;
  el.classList.add(`pic${newNumber}`);
  
  clearCircle(number);
  fillCircle(newNumber);
}

const prev = (el) => {
  let number = getNumber(el);
  clearClasses(el);
  let newNumber;

  number == 1 ? newNumber = 5 : newNumber = number - 1;
  el.classList.add(`pic${newNumber}`);

  clearCircle(number);
  fillCircle(newNumber);
}

const getNumber = (el) => {
  return parseInt(el.classList[0].slice(-1));
}

const clearCircle = (number) => {
  const circleToClear = document.querySelector(`.trigger-${number}`);
  circleToClear.classList.remove("filled");
}

const fillCircle = (newNumber) => {
  const circleToFill = document.querySelector(`.trigger-${newNumber}`);
  circleToFill.classList.add("filled");
}

rightButtons.forEach((button) => {
  button.addEventListener("click", () => {
    next(carousel);
  })
});

leftButtons.forEach((button) => {
  button.addEventListener("click", () => {
    prev(carousel);
  })
});

trigger1.addEventListener("click", () => {
  let number = getNumber(carousel);
  clearCircle(number);
  
  clearClasses(carousel);
  carousel.classList.add('pic1');
  fillCircle(1);
})

trigger2.addEventListener("click", () => {
  let number = getNumber(carousel);
  clearCircle(number);
  
  clearClasses(carousel);
  carousel.classList.add('pic2');
  fillCircle(2);
})

trigger3.addEventListener("click", () => {
  let number = getNumber(carousel);
  clearCircle(number);
  
  clearClasses(carousel);
  carousel.classList.add('pic3');
  fillCircle(3);
})

trigger4.addEventListener("click", () => {
  let number = getNumber(carousel);
  clearCircle(number);
  
  clearClasses(carousel);
  carousel.classList.add('pic4');
  fillCircle(4);
})

trigger5.addEventListener("click", () => {
  let number = getNumber(carousel);
  clearCircle(number);
  
  clearClasses(carousel);
  carousel.classList.add('pic5');
  fillCircle(5);
})

const clearClasses = (el) => {
  el.classList.remove('pic1');
  el.classList.remove('pic2');
  el.classList.remove('pic3');
  el.classList.remove('pic4');
  el.classList.remove('pic5');
}

const autoAdvance = () => {
  setInterval(next, 5000, carousel);
}

window.onload = () => {
  autoAdvance();
};