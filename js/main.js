const btnBlock = document.querySelector(".button");
const card = document.querySelectorAll(".card");
const btn = document.querySelectorAll(".btn");

btnBlock.addEventListener("click", (e) => {
 

  const id = e.target.dataset.id;

  if (e.target.classList.contains("btn")) {
    btn.forEach((item) => {
        item.classList.remove("active");
      });
    e.target.classList.add("active");
    card.forEach((item) => {
      if (item.classList.contains(id)) {
        item.style.display = "block";
      } else if (item.classList.contains("card") && id === "all") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});
