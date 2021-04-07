(function () {
  const elem = document.querySelector(".product__card");
  const iso = new Isotope(elem, {
    itemSelector: ".product__item",
    filter: ".black",
  });
  const controlls = document.querySelectorAll(".product__color-item");
  const activeClass = "filter__item--active";
  controlls.forEach(function (control) {
    control.addEventListener("click", function (e) {
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");

      controlls.forEach(function (link) {
        link.closest(".product__color-item").classList.remove(activeClass);
      });

      control.closest(".product__color-item").classList.add(activeClass);

      iso.arrange({
        filter: `.${filterName}`,
      });
    });
  });
})();
