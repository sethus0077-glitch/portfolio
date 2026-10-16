/* Sethu Subramanian - Portfolio scripts (vanilla JS, no dependencies) */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Dynamic copyright year
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  function setMenu(open) {
    if (!toggle || !menu) { return; }
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { setMenu(false); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav')) { setMenu(false); }
    });
  }

  // Smooth scrolling (CSS handles it; this moves focus to the target for keyboard users)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () {
      var id = link.getAttribute('href');
      if (id.length < 2) { return; }
      var target = document.querySelector(id);
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // Active section highlighting
  var links = document.querySelectorAll('.nav-links a');
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        links.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + entry.target.id;
          a.classList.toggle('is-active', on);
          if (on) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Back-to-top button
  var topBtn = document.getElementById('to-top');
  if (topBtn) {
    window.addEventListener('scroll', function () {
      topBtn.hidden = window.scrollY < 600;
    }, { passive: true });
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  // Resume button: shows automatically once assets/files/resume.pdf exists on the hosted site.
  var resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn && /^https?:$/.test(location.protocol)) {
    fetch(resumeBtn.getAttribute('href'), { method: 'HEAD' }).then(function (res) {
      if (res.ok) { resumeBtn.hidden = false; }
    }).catch(function () { /* no resume yet: keep button hidden */ });
  }
})();
