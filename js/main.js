(function () {
  // Edit business details here
  var business = { name: "HEAVEN SPA", phone: "917681891119" }; // 91 = India country code

  var messages = {
    "": "Hello HEAVEN SPA 🙏 I'd like to book an appointment. Could you tell me which time slots are open?",
    ask: "Hello HEAVEN SPA, I'm interested in the Olive Oil Deep Tissue full body massage (₹1,200). Could you share details and timings?",
    sig: "Hello HEAVEN SPA, I would like to book the Full Body Massage — Olive Oil Deep Tissue treatment for ₹1,200. Please let me know the available time slots."
  };
  function msg(key) {
    return messages[key] || "Hello HEAVEN SPA 🙏 I'd like to reserve a " + key + " session. Which slots are free today or tomorrow?";
  }
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = "https://wa.me/" + business.phone + "?text=" + encodeURIComponent(msg(a.dataset.wa));
    a.target = "_blank";
    a.rel = "noopener";
  });

  var hdr = document.querySelector(".hdr");
  var nav = document.getElementById("nav");
  var burger = document.querySelector(".burger");
  function onScroll() { hdr.classList.toggle("on", window.scrollY > 30); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeMenu() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Open menu"); }
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  var items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add("in"); }); }

  var lb = document.getElementById("lb");
  var lbImg = lb.querySelector("img"), lbCap = lb.querySelector("p");
  document.querySelectorAll(".gal button").forEach(function (b) {
    b.addEventListener("click", function () {
      lbImg.src = b.dataset.full; lbImg.alt = b.dataset.cap; lbCap.textContent = b.dataset.cap;
      lb.showModal();
    });
  });
  lb.addEventListener("click", function () { lb.close(); });

  var sc=document.getElementById("svc-count"), n=document.querySelectorAll("#services .card").length;
  if (sc && n) sc.textContent = n;

  document.getElementById("yr").textContent = new Date().getFullYear();
})();
