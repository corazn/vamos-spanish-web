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
  var CALENDAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';
  var CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

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

  /* ---------- buttons (nav + hero) ---------- */
  // { label, url } opens a link in a new tab; { label, target } jumps to a section
  function linkAttrs(item, attrs) {
    if (item.url) { attrs.href = item.url; attrs.target = "_blank"; attrs.rel = "noopener"; }
    else attrs.href = "#" + (item.target || "home");
    return attrs;
  }
  var navCta = document.querySelector("[data-navcta]");
  if (S.navCta && S.navCta.label) {
    Object.entries(linkAttrs(S.navCta, {})).forEach(function (kv) { navCta.setAttribute(kv[0], kv[1]); });
    navCta.textContent = S.navCta.label;
    navCta.hidden = false;
  }
  var ctaBox = document.querySelector("[data-cta]");
  [["ctaPrimary", "btn btn--primary"], ["ctaSecondary", "btn btn--ghost"]].forEach(function (b) {
    var item = get("hero." + b[0]);
    if (!item || !item.label) return;
    var a = el("a", linkAttrs(item, { class: b[1], text: item.label }));
    if (b[0] === "ctaPrimary") a.appendChild(el("span", { text: "→", "aria-hidden": "true" }));
    ctaBox.appendChild(a);
  });

  /* ---------- hero photo columns ---------- */
  (function () {
    var box = document.querySelector("[data-herocols]");
    var list = get("hero.photos") || [];
    if (!list.length) list = (get("classes.photos") || []).concat(get("workshop.images") || []);
    if (!list.length) { box.remove(); return; }
    var cols = [[], [], []];
    list.forEach(function (src, i) { cols[i % 3].push(src); });
    cols.forEach(function (srcs, c) {
      if (!srcs.length) srcs = list.slice(0, 1);
      // rotate each column's order a bit so neighbours don't line up, then repeat
      // until a column has at least 4 tiles, then duplicate for a seamless loop
      var set = srcs.slice(c % srcs.length).concat(srcs.slice(0, c % srcs.length));
      while (set.length < 4) set = set.concat(srcs);
      var track = el("div", { class: "hero__track" });
      set.concat(set).forEach(function (src) {
        track.appendChild(el("div", { class: "hero__tile" }, [img(src, "")]));
      });
      box.appendChild(el("div", { class: "hero__col" }, [track]));
    });
  })();

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
  var tlFill = el("li", { class: "timeline__fill", "aria-hidden": "true" });
  tl.appendChild(tlFill);
  // wraps numbers like 20.000 / 900 in <mark> so they stand out
  function highlightNumbers(text) {
    var p = el("p");
    text.split(/(\d{1,3}(?:\.\d{3})+|\d{3,})/).forEach(function (part, i) {
      p.appendChild(i % 2 ? el("mark", { text: part }) : document.createTextNode(part));
    });
    return p;
  }
  (get("about.timeline") || []).forEach(function (t, i) {
    tl.appendChild(el("li", { class: "tl-item reveal tl-item--" + (i % 2 ? "right" : "left") }, [
      el("span", { class: "tl-dot", "aria-hidden": "true" }),
      el("div", { class: "tl-card" }, [
        el("h3", { class: "tl-year", text: t.year }),
        highlightNumbers(t.text),
      ]),
    ]));
  });

  /* ---------- teacher credentials (chips) ---------- */
  (function () {
    var box = document.querySelector("[data-cred]");
    var chips = box.querySelector(".cred__chips");
    var pop = box.querySelector(".cred__pop");
    var list = get("teachers.items") || [];
    if (!list.length) { box.remove(); return; }
    var current = -1, lastPointer = "mouse";

    // one shared card, positioned under whichever chip is hovered / tapped
    function show(i, chip) {
      current = i;
      pop.querySelector(".cred__pop-title").textContent = list[i].title;
      pop.querySelector(".cred__pop-text").textContent = list[i].text;
      chips.querySelectorAll(".cred__chip").forEach(function (c, j) { c.classList.toggle("is-active", j === i); });
      var b = box.getBoundingClientRect(), c = chip.getBoundingClientRect();
      var w = pop.offsetWidth;
      var center = c.left + c.width / 2 - b.left;
      var left = Math.min(Math.max(center - w / 2, 0), b.width - w);
      pop.style.left = left + "px";
      pop.style.top = (c.bottom - b.top + 12) + "px";
      pop.style.setProperty("--ax", (center - left) + "px"); // arrow points at the chip
      pop.classList.add("is-shown");
    }
    function hide() {
      current = -1;
      pop.classList.remove("is-shown");
      chips.querySelectorAll(".cred__chip").forEach(function (c) { c.classList.remove("is-active"); });
    }

    list.forEach(function (item, i) {
      var chip = el("button", { class: "cred__chip", type: "button", "aria-describedby": "cred-pop" }, [
        el("span", { class: "cred__icon", html: ACC_ICONS[item.icon] || ACC_ICONS.degree }),
        el("span", { text: item.title }),
      ]);
      chip.addEventListener("pointerdown", function (e) { lastPointer = e.pointerType; });
      chip.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") show(i, chip); });
      chip.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") hide(); });
      // keyboard focus only (a tap also focuses, but that's handled by click)
      chip.addEventListener("focus", function () { if (chip.matches(":focus-visible")) show(i, chip); });
      chip.addEventListener("blur", hide);
      // touch: tap toggles (mouse already handled by hover)
      chip.addEventListener("click", function () {
        if (lastPointer === "mouse") return;
        if (current === i) hide(); else show(i, chip);
      });
      chips.appendChild(chip);
    });
    chips.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("resize", hide);
    document.addEventListener("pointerdown", function (e) { if (!box.contains(e.target)) hide(); });
  })();

  /* ---------- teacher profile cards (scrolling row) ---------- */
  (function () {
    var box = document.querySelector("[data-teachers]");
    var track = box.querySelector(".teachers__track");
    var list = get("teachers.profiles") || [];
    if (!list.length) { box.remove(); return; }
    list.forEach(function (t) {
      var card = el("article", { class: "tcard", tabindex: "0", "aria-label": t.name }, [
        el("div", { class: "tcard__photo" }, [img(t.photo, t.name)]),
        el("div", { class: "tcard__panel" }, [
          el("h3", { class: "tcard__name", text: t.name }),
          t.role ? el("p", { class: "tcard__role", text: t.role }) : null,
          t.bio ? el("div", { class: "tcard__bio" }, [el("p", { text: t.bio })]) : null,
        ]),
      ]);
      // tap to show / hide the bio on touch screens
      card.addEventListener("click", function () { card.classList.toggle("is-open"); });
      track.appendChild(card);
    });
    var btns = box.querySelectorAll(".round-btn");
    function step() {
      var c = track.querySelector(".tcard");
      return c ? c.getBoundingClientRect().width + 16 : 280;
    }
    function updateBtns() {
      var max = track.scrollWidth - track.clientWidth - 2;
      btns[0].disabled = track.scrollLeft <= 2;
      btns[1].disabled = track.scrollLeft >= max;
    }
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        track.scrollBy({ left: Number(b.getAttribute("data-dir")) * step(), behavior: "smooth" });
      });
    });
    track.addEventListener("scroll", updateBtns, { passive: true });
    window.addEventListener("resize", updateBtns);
    updateBtns();
  })();

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
    var rows = el("div", { class: "course__rows" });
    var course = el("div", { class: "course reveal" }, [
      el("div", { class: "course__head" }, [
        el("span", { class: "course__name", text: c.name }),
        el("span", { class: "course__label", text: get("schedule.startLabel") || "Khai giảng" }),
      ]),
      rows,
    ]);
    (c.classes || []).forEach(function (k) {
      var days = el("span", { html: CALENDAR }); days.appendChild(document.createTextNode(k.days));
      var time = el("span", { html: CLOCK }); time.appendChild(document.createTextNode(k.time));
      rows.appendChild(el("div", { class: "course__row" }, [
        el("div", null, [
          el("div", { class: "course__code", text: k.code }),
          el("div", { class: "course__when" }, [days, time]),
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

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- count-up numbers ---------- */
  (function () {
    var nums = document.querySelectorAll(".stat__num");
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    function run(node) {
      var original = node.textContent;
      var m = original.match(/\d[\d.,]*/);
      if (!m) return;
      var target = parseInt(m[0].replace(/[.,]/g, ""), 10);
      var useSep = /[.,]/.test(m[0]);
      var t0 = null, dur = 1600;
      function frame(t) {
        if (t0 === null) t0 = t;
        var p = Math.min((t - t0) / dur, 1);
        var v = Math.round(target * (1 - Math.pow(1 - p, 3)));
        node.textContent = original.replace(m[0], useSep ? v.toLocaleString("vi-VN") : String(v));
        if (p < 1) requestAnimationFrame(frame); else node.textContent = original;
      }
      requestAnimationFrame(frame);
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  })();

  /* ---------- parallax on the hero ---------- */
  (function () {
    if (reduceMotion) return;
    var hero = document.querySelector(".hero");
    var marks = hero.querySelectorAll(".hero__mark");
    var cols = hero.querySelector(".hero__cols");
    var text = hero.querySelector(".hero__text");
    var ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY;
      if (y > hero.offsetHeight) return;
      marks.forEach(function (m) { m.style.setProperty("--py", (y * 0.3) + "px"); });
      if (cols) cols.style.setProperty("--py", (y * -0.08) + "px");
      text.style.transform = "translateY(" + (y * 0.12) + "px)";
      text.style.opacity = String(Math.max(1 - y / (hero.offsetHeight * 0.9), 0.2));
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* ---------- timeline line that fills as you scroll ---------- */
  (function () {
    var items = tl.querySelectorAll(".tl-item");
    if (!items.length) return;
    if (reduceMotion) {
      tlFill.style.transform = "none";
      items.forEach(function (n) { n.classList.add("is-active"); });
      return;
    }
    var ticking = false;
    function update() {
      ticking = false;
      var r = tl.getBoundingClientRect();
      var p = Math.min(Math.max((window.innerHeight * 0.6 - r.top) / r.height, 0), 1);
      tlFill.style.transform = "scaleY(" + p + ")";
      var reached = p * r.height;
      items.forEach(function (n) {
        var dot = n.querySelector(".tl-dot");
        n.classList.toggle("is-active", n.offsetTop + dot.offsetTop + 9 <= reached);
      });
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  })();

  /* ---------- reveal on scroll ---------- */
  document.querySelectorAll(".section__title").forEach(function (n) { n.classList.add("reveal"); });
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
