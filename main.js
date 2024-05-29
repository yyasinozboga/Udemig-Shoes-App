const resBtn = document.getElementById("res-btn");
const resMenu = document.querySelector(".res-menu");
const box_Container = document.querySelector(".box-container");
const image_Container = document.querySelector(".image");

resBtn.addEventListener("click", () => {
  resMenu.classList.toggle("active");
});

box_Container.addEventListener("click", (e) => {
  const ele = e.target;

  image_Container.src = ele.src;
});
