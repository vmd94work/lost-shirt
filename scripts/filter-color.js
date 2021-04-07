(function () {
  const elem = document.querySelector(".color__item");
  const iso = new Isotope(elem, {
    itemSelector: ".color__item-text",
    filter: ".black",
  });
  const controlls = document.querySelectorAll(".product__color-item");
  const activeClass = "filter__item--active";
  const activeColor = "product__color-item--active";
  controlls.forEach(function (control) {
    control.addEventListener("click", function (e) {
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");

      controlls.forEach(function (link) {
        link.closest(".product__color-item").classList.remove(activeClass);
        link.closest(".product__color-item").classList.remove(activeColor);
      });

      control.closest(".product__color-item").classList.add(activeClass);
      control.closest(".product__color-item").classList.add(activeColor);

      iso.arrange({
        filter: `.${filterName}`,
      });
    });
  });
})();
