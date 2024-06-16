const minusButtons = document.querySelectorAll(".btn--minus");
minusButtons.forEach(btn => btn.classList.add("hidden"));

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => p.classList.add("hidden"));

minusButtons.forEach(btn => btn.addEventListener("click", event => {
    event.target.closest("svg").classList.add("hidden");
    event.target.closest("li").querySelector("p").classList.add("hidden");
    event.target.closest("div").querySelector(".btn--plus").classList.remove("hidden");

}))


const plusButtons = document.querySelectorAll(".btn--plus");
plusButtons.forEach(btn => btn.addEventListener("click", event => {
   event.target.closest("svg").classList.add("hidden");
   event.target.closest("li").querySelector("p").classList.remove("hidden");
  //  console.log(event.target.closest("li").querySelector("p"));
   event.target.closest("div").querySelector(".btn--minus").classList.remove("hidden");
}))

// Practice and Practice !!!!!!!!!!!!!!!!!!!!!
// if you don't practice js i'm going to call Canelo
