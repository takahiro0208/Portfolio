"use strict";

const header = document.querySelector('header');
const mask = document.querySelector('.mask');
const navBtn = document.getElementById('nav-btn');
const navList = document.querySelectorAll('.nav-list a[href^="#"]');
const scrollBtn = document.getElementById('scroll-btn');
const scrollFont = document.getElementById('scroll');

navBtn.addEventListener('click', function() {
  header.classList.toggle('open');
});

mask.addEventListener('click', function() {
  header.classList.toggle('open');
});

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener('click', function() {
    header.classList.toggle('open');
  });
}

window.addEventListener('scroll', function() {
  let scroll = window.scrollY;
  if (scroll > 100) {
    header.classList.add('scroll');
    scrollFont.classList.add('hidden');
  } else {
    header.classList.remove('scroll');
    scrollFont.classList.remove('hidden');
  }
});


// プロフィールとインフォメーションのスライドアニメーション

$(function() {
  $('#slideProfile').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('slide');
    }
  });
  $('#slideInfomation').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('slide');
    }
  });
});

