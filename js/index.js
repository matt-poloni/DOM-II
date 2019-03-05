// Your code goes here

// Toggles whether the navigation is fixed or not upon double-click
const mainNav = document.querySelector('.main-navigation');
const introSec = document.querySelector('.intro');
mainNav.addEventListener('dblclick', e => {
  if(e.currentTarget.style.position === 'static') {
    e.currentTarget.style.position = 'fixed';
    introSec.style.paddingTop = '90px';
  } else {
    e.currentTarget.style.position = 'static';
    introSec.style.paddingTop = 0;
  }
})

// Changes nav-link color on focus and back on blur
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('focus', e => e.target.style.color = 'crimson');
  link.addEventListener('blur', e => e.target.style.color = '#212529');
});

// Changes button background on mouseover and back on mouseout
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseover', e => {
    e.target.style.background = 'crimson';
    e.target.style.color = 'white';
  });
  btn.addEventListener('mouseout', e => {
    e.target.style.background = '#17A2B8';
    e.target.style.color = 'white';
  });
});

// Rotates the hue of all images on the page while using the wheel
const allImages = document.querySelectorAll('img');
  const wheelCount = (function() {
    let counter = 0;
    return function() {
      counter++;
      return counter;
    };
  })();
document.addEventListener('wheel', e => allImages.forEach(img => {
  img.style.filter = `hue-rotate(${wheelCount()/2}deg)`;
}));