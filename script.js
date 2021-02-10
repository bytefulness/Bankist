'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1coord = section1.getBoundingClientRect();
  console.log('S1COORD', s1coord);

  console.log('BUTTON COORD', e.target.getBoundingClientRect());

  // Find Current Scroll
  console.log('Current Scroll X/Y', window.pageXOffset, window.pageYOffset);

  // Client (Browser Heigth and Width)
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling

  // window.scrollTo(
  //   s1coord.left + window.pageXOffset,
  //   s1coord.top + window.pageYOffset
  // );

  // Scrolling Smoothly
  // window.scrollTo({
  //   left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern Way
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*
 * Navigation
 */

// 1. Create Event Delegation for common parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// 2. Determine the target element that returns events

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// LECTURES

/* 
// LECTURE #183: SELECTING, CREATING AND DELETING ELEMENTS

// # SELECTING ELEMENTS

// Select Document Elements
console.log(document.documentElement);

// Select Head Node
console.log(document.head);

// Select Body Node
console.log(document.body);

// Difference querySelector and getElements...

console.log(document.querySelectorAll('.section'));

const buttons = document.getElementsByTagName('button');

// ## Creating and Inserting Elements

// 1- Create Element
const message = document.createElement('div');
// 2- Adding Style to Created Element
message.classList.add('cookie-message');
// 3- Create Element Body
message.innerHTML = `We use cookies for improved functionaluty and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// 4- Insert Created Element to HTML Document
const header = document.querySelector('header');
header.prepend(message);
header.append(message);

// ## Deleting Elements in DOM Tree
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Adding Element with AdjacentHtml
// const section1 = document.querySelector('#section--1');
// section1.insertAdjacentHTML(
//   'afterbegin',
//   `<div><p>Hi there! I hope you're doing well.</p></div>`
// );

*/

/* 
// LECTURE #184: STYLES, ATTRIBUTES AND CLASSES

// ## STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '105%';

// We can't see something because there is no any inner class like below. Below code doesn't display CSS codes for the element that comes external css file.
console.log(message.style.color);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = parseFloat(getComputedStyle(message).height) + 40 + 'px';

// ## ATTRIBUTES
const logo = document.querySelector('.nav__logo');

// Getting attributes

// 1. Way
console.log(logo.alt);

// Absolute src path
console.log(logo.src);

// 2. Way
// Relative src path exact the same with in index.html
console.log(logo.getAttribute('src'));

// We can change attributes
logo.alt = 'Amazing minimalist logo';

// It doesn't work because of not standart for Javascript
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

// See element's className
console.log(logo.className);

// Data Attributes

// 1- Add data for element that is in index.html. We're going to add data attribute for '.nav__logo'
console.log(logo.dataset.versionNumber);

// ## CLASSES
logo.classList.add('c', 'j'); // Adding two class
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // Attention: Not includes
*/
/* 
// LECTURE #185: IMPLEMENTING SMOOTH SCROLLING
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coord = section1.getBoundingClientRect();
  console.log('S1COORD', s1coord);

  console.log('BUTTON COORD', e.target.getBoundingClientRect());

  // Find Current Scroll
  console.log('Current Scroll X/Y', window.pageXOffset, window.pageYOffset);

  // Client (Browser Heigth and Width)
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling

  // window.scrollTo(
  //   s1coord.left + window.pageXOffset,
  //   s1coord.top + window.pageYOffset
  // );

  // Scrolling Smoothly
  // window.scrollTo({
  //   left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern Way
  section1.scrollIntoView({ behavior: 'smooth' });
});
 */
/* // LECTURE #186: TYPES OF EVENT AND EVENT HANDLER

const h1 = document.querySelector('h1');

Modern Way to add eventListener
h1.addEventListener('mouseenter', function (e) {
  alert("Great! You 're reading the heading");
});

Old School on JS File
h1.onclick(alert('Hi!'));

Stopping Event Listener after the run once
You have to export Event Handler

const alertH1 = function () {
  alert("Great! You 're reading the heading");

  h1.removeEventListener('click', alertH1);
};

h1.addEventListener('click', alertH1); */

// LECTURE #188: EVENT PROPAGATION IN PRACTISE

/* 
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) - min);

const randomColor = () =>
  `rgb(${randomInt(0, 155)}, ${randomInt(0, 155)}, ${randomInt(0, 155)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  
    ? How can we stop propagation?
    * e.stopPropagation();
  
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/
