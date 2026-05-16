(function () {
  // Replace with your App Store listing URL (find it in App Store Connect)
  var APP_STORE_URL = "https://apps.apple.com/app/joura/id0000000000";

  document.querySelectorAll("[data-app-store]").forEach(function (link) {
    link.href = APP_STORE_URL;
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });

  document.querySelectorAll(".js-scroll-download").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.getElementById("download-stores");
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      if (history.replaceState) {
        history.replaceState(null, "", "#download-stores");
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  });
})();
