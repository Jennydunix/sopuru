document.addEventListener("DOMContentLoaded", function () {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
    }).mount();
  });