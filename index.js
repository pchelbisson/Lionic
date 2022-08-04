let burger = document.querySelector(".burger");
let menu = document.querySelector(".header-nav");
let menuLinks = menu.querySelectorAll(".header-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header-nav--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach((el) => {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header-nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

/*======== show more button =========*/

let showMore = document.querySelector(".show-more");
let articlesLength = document.querySelectorAll(".articles-item").length;

let items = 2;

showMore.addEventListener("click", () => {
  items += 2;
  const arrayItems = Array.from(
    document.querySelector(".articles-list").children
  );
  const visItems = arrayItems.slice(0, items);
  visItems.forEach((el) => el.classList.add("is-visible"));

  if (visItems.length === articlesLength) {
    showMore.style.display = "none";
  }
});
