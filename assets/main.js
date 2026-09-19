/* Renders the page from content.js (window.SITE).
   You normally don't need to edit this file — edit content.js instead. */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) {
    document.body.insertAdjacentHTML("afterbegin",
      '<p style="background:#c00;color:#fff;padding:12px;margin:0">content.js has an error — check for a missing comma or quote.</p>');
    return;
  }

  /* ---------- helpers ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "text") node.textContent = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, S);
  }
  // <img> that turns into a labelled placeholder if the file is missing
  function img(src, alt) {
    var wrapFallback = function (image) {
      var ph = el("div", { class: "ph", text: "Thêm ảnh: " + src });
      image.replaceWith(ph);
    };
    var image = el("img", { src: src, alt: alt || "", loading: "lazy" });
    image.addEventListener("error", function () { wrapFallback(image); });
    return image;
  }
  function logo(withTag) {
    var box = el("span", { class: "logo" });
    if (S.logoImage) {
      box.appendChild(el("img", { src: S.logoImage, alt: "VAMOS" }));
      return box;
    }
    box.appendChild(el("span", { class: "logo__word", html: "¡vam<span class=\"logo__o\"></span>s!" }));
    if (withTag && S.logoTagline) box.appendChild(el("span", { class: "logo__tag", text: S.logoTagline }));
    return box;
  }

  var ICONS = {
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.1 23.7v-8H6.6V12h2.5v-1.6c0-4.1 1.8-6 5.9-6 .8 0 2.1.2 2.6.3v3.3h-1.4c-1.4 0-2 .6-2 2.1V12h3.3l-.6 3.7h-2.7v8.2A12 12 0 1 0 9.1 23.7Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 0h3.9c.1 1.5.6 3.1 1.8 4.2 1.1 1.1 2.7 1.6 4.2 1.8v4c-1.4 0-2.9-.3-4.2-1-.6-.3-1.1-.6-1.6-.9v8.7c-.1 1.4-.5 2.8-1.4 3.9a7 7 0 0 1-5.9 3.2 7 7 0 0 1-7.7-6.7v-1.5a7 7 0 0 1 8.7-6.7v4.4a3.2 3.2 0 0 0-4.4 3.7c.2 1.6 1.8 3 3.5 2.9 1.1 0 2.2-.7 2.8-1.6.2-.3.4-.7.4-1.1.1-1.8.1-3.6.1-5.4V0Z"/></svg>',
    threads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M17.5 8.5C16.6 5.4 14.5 4 11.9 4 7.6 4 5 7 5 12s2.6 8 6.9 8c3.6 0 6.1-2 6.1-4.9 0-3.8-4.5-4.6-7.5-4-1.7.4-2.5 1.4-2.5 2.5 0 1.3 1.1 2.3 2.8 2.3 2.6 0 3.9-2 3.9-5.4"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8ZM9.7 15.1V8.9l5.8 3.1-5.8 3.1Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  };
  var ACC_ICONS = {
    degree: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m12 6 1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5L11 8l1-2ZM8 14l-2 7 3-1.5L11 22l1-7M16 14l2 7-3-1.5L13 22"/></svg>',
    teacher: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="7" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/><circle cx="5" cy="20" r="1.5"/><circle cx="19" cy="20" r="1.5"/></svg>',
    work: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18M11 12v2h2v-2"/></svg>',
    language: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3 4h12v9H8l-3 3v-3H3V4Z"/><path d="M15 8h6v9h-2v3l-3-3h-4v-2"/><text x="5" y="11.5" font-size="6" font-family="sans-serif" fill="currentColor" stroke="none" font-weight="700">ES</text></svg>',
  };
  var CHEVRON = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3 4.5 3 3 3-3"/></svg>';

  /* ---------- meta ---------- */
  if (S.meta) {
    document.title = S.meta.title || document.title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", S.meta.description || "");
  }

  /* ---------- simple text slots ---------- */
  document.querySelectorAll("[data-text]").forEach(function (node) {
    var v = get(node.getAttribute("data-text"));
    if (v != null) node.textContent = v;
  });

  /* ---------- logos ---------- */
  document.querySelectorAll('[data-logo="small"]').forEach(function (n) { n.appendChild(logo(false)); });
  document.querySelectorAll('[data-logo="big"]').forEach(function (n) { n.appendChild(logo(true)); });

  /* ---------- nav ---------- */
  var nav = document.getElementById("nav");
  document.querySelectorAll("[data-nav]").forEach(function (box) {
    (S.nav || []).forEach(function (item) {
      box.appendChild(el("a", { href: "#" + item.target, text: item.label }));
    });
  });
  var toggle = nav.querySelector(".nav__toggle");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  nav.querySelectorAll(".nav__menu a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("click", function (e) { if (!nav.contains(e.target)) setMenu(false); });

  /* ---------- socials ---------- */
  document.querySelectorAll("[data-socials]").forEach(function (box) {
    (S.socials || []).forEach(function (s) {
      var a = el("a", {
        class: "social social--" + s.type,
        href: s.url, target: "_blank", rel: "noopener", "aria-label": s.type,
      });
      if (s.type === "zalo") a.appendChild(el("span", { text: "Zalo" }));
      else a.innerHTML = ICONS[s.type] || "";
      box.appendChild(a);
    });
  });

  /* ---------- stats ---------- */
  var statsBox = document.querySelector("[data-stats]");
  (S.stats || []).forEach(function (s) {
    statsBox.appendChild(el("div", { class: "stat" }, [
      el("span", { class: "stat__num", text: s.number }),
      el("span", { class: "stat__label", text: s.label }),
    ]));
  });

  /* ---------- timeline ---------- */
  var tl = document.querySelector("[data-timeline]");
  (get("about.timeline") || []).forEach(function (t) {
    tl.appendChild(el("li", { class: "reveal" }, [
      el("h3", { text: t.year }),
      el("p", { text: t.text }),
    ]));
  });

  /* ---------- accordion ---------- */
  var acc = document.querySelector("[data-accordion]");
  (get("teachers.items") || []).forEach(function (item, i) {
    var id = "acc-" + i;
    var head = el("button", { class: "acc__head", "aria-expanded": "false", "aria-controls": id }, [
      el("span", { class: "acc__icon", html: ACC_ICONS[item.icon] || ACC_ICONS.degree }),
      el("span", { class: "acc__title", text: item.title }),
      el("span", { class: "acc__chev", html: CHEVRON }),
    ]);
    var box = el("div", { class: "acc reveal" }, [
      head,
      el("div", { class: "acc__body", id: id }, [el("div", null, [el("p", { text: item.text })])]),
    ]);
    head.addEventListener("click", function () {
      var open = !box.classList.contains("is-open");
      box.classList.toggle("is-open", open);
      head.setAttribute("aria-expanded", String(open));
    });
    acc.appendChild(box);
  });

  /* ---------- classes gallery ---------- */
  var gal = document.querySelector("[data-gallery]");
  var moreBtn = document.querySelector("[data-loadmore]");
  var photos = get("classes.photos") || [];
  var shown = get("classes.initialCount") || 6;
  photos.forEach(function (src, i) {
    gal.appendChild(el("div", { class: "gallery__item" + (i >= shown ? " is-hidden" : "") }, [img(src, "Lớp học VAMOS")]));
  });
  moreBtn.textContent = get("classes.loadMoreLabel") || "Load More";
  moreBtn.hidden = photos.length <= shown;
  moreBtn.addEventListener("click", function () {
    shown += get("classes.initialCount") || 6;
    gal.querySelectorAll(".gallery__item").forEach(function (n, i) {
      n.classList.toggle("is-hidden", i >= shown);
    });
    moreBtn.hidden = photos.length <= shown;
  });

  /* ---------- schedule ---------- */
  var sch = document.querySelector("[data-schedule]");
  (get("schedule.courses") || []).forEach(function (c) {
    var course = el("div", { class: "course reveal" }, [
      el("div", { class: "course__head" }, [
        el("span", { class: "course__name", text: c.name }),
        el("span", { class: "course__label", text: get("schedule.startLabel") || "Khai giảng" }),
      ]),
    ]);
    (c.classes || []).forEach(function (k) {
      course.appendChild(el("div", { class: "course__row" }, [
        el("div", null, [
          el("div", { class: "course__code", text: k.code }),
          el("div", { class: "course__when" }, [el("span", { text: k.days }), el("span", { text: k.time })]),
        ]),
        el("span", { class: "course__date", text: k.start }),
      ]));
    });
    sch.appendChild(course);
  });

  /* ---------- feedback slider ---------- */
  (function () {
    var root = document.querySelector("[data-feedback]");
    var track = root.querySelector(".phone-slider__track");
    var dots = root.querySelector(".dots");
    var list = get("feedback.images") || [];
    var idx = 0;
    list.forEach(function (src, i) {
      track.appendChild(el("div", null, [img(src, "Feedback học viên")]));
      var dot = el("button", { "aria-label": "Slide " + (i + 1) });
      dot.addEventListener("click", function () { go(i); });
      dots.appendChild(dot);
    });
    function go(i) {
      if (!list.length) return;
      idx = (i + list.length) % list.length;
      track.style.transform = "translateX(" + (-idx * 100) + "%)";
      dots.querySelectorAll("button").forEach(function (b, j) { b.classList.toggle("is-active", j === idx); });
    }
    root.querySelector(".slider-btn--prev").addEventListener("click", function () { go(idx - 1); });
    root.querySelector(".slider-btn--next").addEventListener("click", function () { go(idx + 1); });
    // swipe on touch screens
    var x0 = null;
    track.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    go(0);
  })();

  /* ---------- workshop marquee ---------- */
  (function () {
    var track = document.querySelector("[data-workshop] .workshop__track");
    var list = get("workshop.images") || [];
    // duplicated once so the loop is seamless
    list.concat(list).forEach(function (src) {
      track.appendChild(el("div", { class: "workshop__item" }, [img(src, get("workshop.caption"))]));
    });
  })();

  /* ---------- reveal on scroll ---------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (n) { io.observe(n); });
  } else {
    items.forEach(function (n) { n.classList.add("is-visible"); });
  }
})();
