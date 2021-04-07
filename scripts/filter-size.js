(function filterSize() {
  const sizes = document.querySelectorAll(".product__size-item");
  const activeSize = "product__size-item--active";

  sizes.forEach(function (size) {
    size.addEventListener("click", function (e) {
      e.preventDefault();
      sizes.forEach(function (link) {
        link.closest(".product__size-item").classList.remove(activeSize);
      });

      size.closest(".product__size-item").classList.add(activeSize);
    });
  });
})();
