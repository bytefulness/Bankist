'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// LECTURES

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
const section1 = document.querySelector('#section--1');
section1.insertAdjacentHTML(
  'afterbegin',
  `<div><p>Hi there! I hope you're doing well.</p></div>`
);
