var el = 4;
var move;

const slider = [
  {
    img: "images/catalog/cake/cake-1-1.jpg",
    h2: "Пирожное из белого шоколада",
    h3: "Муссовое пирожное “Изумруд”,<br />фисташковый бисквит,<br />ванильный мусс<br />клубнично-малиновое конфи.",
  },
  {
    img: "images/catalog/cake/cake-1-2.jpg",
    h2: "Торт из фруктов",
    h3: "Торт муссовый “Тирамису”,<br />ванильные коржи пропитаны<br />свежесваренным кофе,<br />кофейный мусс на основе<br />бельгийского шоколада и сливок.",
  },
  {
    img: "images/catalog/cake/cake-1-3.jpg",
    h2: "Чизкейк из крамбла",
    h3: "Чизкейк “Клубничный улун” ,<br />на основе крамбла, в крамбл<br />я добавила сублимированную<br />клубнику,сырный слой на основе<br />чая улун.",
  },
  {
    img: "images/catalog/cake/cake-2-1.jpg",
    h2: "Торт с бисквитной начинкой",
    h3: "Муссовый торт “Манго-маракуйя”,<br />шоколадный бисквит,<br />три слоя мусса, на белом,<br />молочном и тёмном<br />бельгийском шоколаде.",
  },
  {
    img: "images/catalog/cake/cake-2-2.jpg",
    h2: "Торт из фруктов",
    h3: "Торт “Морковный”,<br />пряно морковный бисквитс томлёной<br />грушей, апельсиновый курд<br /> и клубничный конфитюр.",
  },
  {
    img: "images/catalog/cake/cake-2-3.jpg",
    h2: "Торт из крема",
    h3: "Торт “Молочная девочка”,<br />сырно сметанный крем,<br />начинка апельсиновая паста.",
  },
];
// Create btn left/right
sizeScreen();
window.addEventListener(
  "resize",
  function () {
    sizeScreen();
  },
  true
);
function sizeScreen() {
  if (screen.width <= 767) {
    mobileFun();
  }
  if (screen.width >= 767) {
    desktopFun();
  }
}

function innerLeft() {
  move = "right";
  el = el + 1;
  el > 5 ? (el = 0) : false;
  mobileFun();
}

function innerRight() {
  move = "left";
  el = el - 1;
  el < 0 ? (el = 5) : false;
  mobileFun();
}

function mobileFun() {
  let divIsSliderAdd = `
    <div id="btnLeft" onclick="innerLeft()"></div>
    <div id="btnRight" onclick="innerRight()"></div>
    <div id="cake-2-2" data-aos="fade-${move}">
      <img src=${slider[el].img} />
      <h2>${slider[el].h2}</h2>
      <h3>${slider[el].h3}</h3>
    </div>`;

  const divUpForAddSlider = document.getElementById("my-cake-line-2");
  divUpForAddSlider.innerHTML = divIsSliderAdd;
}

function desktopFun() {
  const line1HTML = `
  <div id="cake-1-1">
  <img src="${slider[0].img}" />
  <h2>${slider[0].h2}</h2>
  <h3>${slider[0].h3}</h3>
</div>
<div id="cake-1-2">
  <img src="${slider[1].img}" />
  <h2>${slider[1].h2}</h2>
  <h3>${slider[1].h3}</h3>
</div>
<div id="cake-1-3">
  <img src="${slider[2].img}" />
  <h2>${slider[2].h2}</h2>
  <h3>${slider[2].h3}</h3>
</div>`;
  const line1 = document.getElementById("my-cake-line-1");
  line1.innerHTML = line1HTML;

  let divIsSliderAdd = `
    <div id="cake-2-1">
      <img src="${slider[3].img}" />
      <h2>${slider[3].h2}</h2>
      <h3>${slider[3].h3}</h3>
    </div>
    <div id="cake-2-2">
      <img src="${slider[4].img}" />
      <h2>${slider[4].h2}</h2>
      <h3>${slider[4].h3}</h3>
    </div>
    <div id="cake-2-3">
      <img src="${slider[5].img}" />
      <h2>${slider[5].h2}</h2>
      <h3>${slider[5].h3}</h3>
    </div>`;
  const divUpForAddSlider = document.getElementById("my-cake-line-2");
  divUpForAddSlider.innerHTML = divIsSliderAdd;
}
