/**
 * MO ENTERPRISES — Corporate Website Script
 * Clean, centralized. No frameworks.
 */

(function () {
  'use strict';

  /* ── CONFIG ──────────────────────────────────────────────────────────────── */

  /**
   * WHATSAPP CONFIGURATION
   * Official number: +92 309 9435843
   * Format: country code + number, digits only.
   */
  const WHATSAPP_NUMBER = '923099435843';

  const EMAIL = 'themoenterprises@gmail.com';

  const WA_MESSAGE = 'Hello MO ENTERPRISES, I would like to get in touch with you.';

  /* ── WHATSAPP HELPER ─────────────────────────────────────────────────────── */

  /**
   * Opens WhatsApp directly in a new tab with the configured number and pre-filled message.
   * Target URL: https://wa.me/923099435843?text=Hello%20MO%20ENTERPRISES%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.
   */
  function openWhatsApp () {
    const num = (WHATSAPP_NUMBER || '').replace(/\D/g, '');
    const encoded = encodeURIComponent(WA_MESSAGE);
    const url = 'https://wa.me/' + num + '?text=' + encoded;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /* ── SMOOTH SCROLL HELPER ────────────────────────────────────────────────── */

  function smoothScrollTo (selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    const header = document.getElementById('siteHeader');
    const offset = header ? header.offsetHeight : 80;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset + 2;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  /* ── HEADER SCROLL EFFECT ────────────────────────────────────────────────── */

  function initHeader () {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    function update () {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── SMOOTH SCROLL WITH HEADER OFFSET (for <a href="#…"> links) ─────────── */

  function initSmoothScroll () {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        smoothScrollTo(id);
      });
    });
  }

  /* ── HERO BUTTONS ────────────────────────────────────────────────────────── */

  function initHeroButtons () {
    /* "Explore Our Business" — scrolls smoothly to #about */
    const exploreBtn = document.getElementById('heroExplorBtn');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScrollTo('#about');
      });
    }

    /* "Let's Talk" — opens WhatsApp conversation directly */
    const talkBtn = document.getElementById('heroTalkBtn');
    if (talkBtn) {
      talkBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openWhatsApp();
      });
    }
  }

  /* ── SCROLL REVEAL (IntersectionObserver) ────────────────────────────────── */

  function initReveal () {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      els.forEach(function (el) { obs.observe(el); });
    } else {
      /* Fallback */
      els.forEach(function (el) { el.classList.add('in-view'); });
    }
  }

  /* ── BACK TO TOP ─────────────────────────────────────────────────────────── */

  function initBackTop () {
    const btn = document.getElementById('backTop');
    if (!btn) return;
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── FLOATING WHATSAPP BUTTON ────────────────────────────────────────────── */

  function initWAFloat () {
    const btn = document.getElementById('waFloat');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openWhatsApp();
    });
  }

  /* ── INIT ────────────────────────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    initSmoothScroll();
    initHeroButtons();
    initReveal();
    initBackTop();
    initWAFloat();
  });

  /* Expose for testing */
  window.MO = {
    openWhatsApp: openWhatsApp,
    WHATSAPP_NUMBER: WHATSAPP_NUMBER,
    WA_MESSAGE: WA_MESSAGE
  };

}());
