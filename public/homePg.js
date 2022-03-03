let btnAll = document.querySelector("#All");
let btnGuard = document.querySelector("#Guard");
let btnCaster = document.querySelector("#Caster");
let btnDefender = document.querySelector("#Defender");
let btnSniper = document.querySelector("#Sniper");
let btnSpecialist = document.querySelector("#Specialist");
let btnCard = document.querySelector("#Card");
let displayContentDiv = document.querySelector("#displayContent");

btnAll.addEventListener("click", () => (btnAll.style.backgroundColor = "#red"));

btnGuard.addEventListener(
  "click",
  () => (btnGuard.style.backgroundColor = "#b22222")
);
btnCaster.addEventListener(
  "click",
  () => (btnCaster.style.backgroundColor = "#337ab7")
);
btnDefender.addEventListener(
  "click",
  () => (btnDefender.style.backgroundColor = "#3cb371")
);
btnSniper.addEventListener(
  "click",
  () => (btnSniper.style.backgroundColor = "#6a5acd")
);
btnSpecialist.addEventListener(
  "click",
  () => (btnSpecialist.style.backgroundColor = "#ff7f50")
);
// btnCard.addEventListener(
//   "click",
//   () => (btnCard.style.backgroundColor = "#1ab7")
// );

function thanksForBuying() {
  alert("Thank You for the Purchase!");
}

const makeDisplayCards = (character) => {
  return `
    <div class="card">
    <div class="card-container">
    <img
        id="${character.name}-image"
         class="bg-img"
        src='${character.image}' />
    </div>
    <div class="content">
    <h2>${character.name}</h2>
    <hr />
    <p>${character.description}</p>
    </br>
    <hr />
    
    <h4>Would You Like To Purchase Cosmetic?</h4>
    
    <hr />
    <input onclick = "purchaseCharacter(${character.id})" id="Card" class="card-button" type="button" value="Purchase // 500">
    </div>
    </div>
    <br />
    <br />
     `;
};

function purchaseCharacter(id) {
  alert("Thank you for your purchase!");
  axios
    .post("http://localhost:5500/api/characters/purchased", { id: id })
    .then(function (response) {
      console.log(response);
    });
}

async function getCharacters() {
  await axios
    .get("http://localhost:5500/api/characters/")
    .then(function (response) {
      const data = response.data;
      displayContentDiv.innerHTML = "";
      data.forEach((character) => {
        let characterCard = makeDisplayCards(character);
        displayContentDiv.innerHTML += characterCard;
      });
    });
}

async function getGuards() {
  await axios
    .get("http://localhost:5500/api/characters/guards")
    .then(function (response) {
      const data = response.data;
      displayContentDiv.innerHTML = "";
      data.forEach((character) => {
        let characterCard = makeDisplayCards(character);
        displayContentDiv.innerHTML += characterCard;
      });
    });
}

async function getDefenders() {
  await axios
    .get("http://localhost:5500/api/characters/defenders")
    .then(function (response) {
      const data = response.data;
      displayContentDiv.innerHTML = "";
      data.forEach((character) => {
        let characterCard = makeDisplayCards(character);
        displayContentDiv.innerHTML += characterCard;
      });
    });
}

async function getCasters() {
  await axios
    .get("http://localhost:5500/api/characters/casters")
    .then(function (response) {
      const data = response.data;
      displayContentDiv.innerHTML = "";
      data.forEach((character) => {
        let characterCard = makeDisplayCards(character);
        displayContentDiv.innerHTML += characterCard;
      });
    });
}

async function getSnipers() {
  await axios
    .get("http://localhost:5500/api/characters/snipers")
    .then(function (response) {
      const data = response.data;
      displayContentDiv.innerHTML = "";
      data.forEach((character) => {
        let characterCard = makeDisplayCards(character);
        displayContentDiv.innerHTML += characterCard;
      });
    });
}

async function getSpecialists() {
  await axios
    .get("http://localhost:5500/api/characters/specialists")
    .then(function (response) {
      const data = response.data;
      displayContentDiv.innerHTML = "";
      data.forEach((character) => {
        let characterCard = makeDisplayCards(character);
        displayContentDiv.innerHTML += characterCard;
      });
    });
}

const starWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    star.classList.add("disabled");
    stars.forEach((otherStar, otherIdx) => {
      if (otherIdx <= clickedIdx) {
        otherStar.classList.add("active");
      }
    });
    console.log(`star of index ${clickedIdx + 1}was clicked`);
  });
});
