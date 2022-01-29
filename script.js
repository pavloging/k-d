var el = 4;
const slider = [
  {
    img: "images/catalog/cake/cake-1-1.jpg",
    h2: "Торт из ягод",
    h3: "Торт “Ягодный остров”,<br />белый шоколад, пудра,<br />пюре с добавлением<br />клубники и черники!",
  },
  {
    img: "images/catalog/cake/cake-1-2.jpg",
    h2: "Торт из фруктов",
    h3: "Торт муссовый “Тирамису”, <br />коржи пропитаны<br />свежесваренным кофе, мусс на<br />основе сливок, и шоколада!",
  },
  {
    img: "images/catalog/cake/cake-1-3.jpg",
    h2: "Торт из крема",
    h3: "Торт “Гамбургер”,<br />сырно-сметанный крем, и <br />идельное сочетание<br />клубники и малины!",
  },
  {
    img: "images/catalog/cake/cake-2-1.jpg",
    h2: "Торт с бисквитной начинкой",
    h3: "Торт “Манго-маракуйя”,<br />шоколадный бисквит, три вида<br />шоколадного мусса, зефир с<br />добавлением манго и маракуйи!",
  },
  {
    img: "images/catalog/cake/cake-2-2.jpg",
    h2: "Торт из фруктов",
    h3: "Торт “Тещно бесквитный”,<br />пряно-морковный бисквит,<br />апельсиновый курд и<br />клубничный конфитюр!",
  },
  {
    img: "images/catalog/cake/cake-2-3.jpg",
    h2: "Торт из крема",
    h3: "Торт “Молочная девочка”,<br />сырно-сметанный крем, пара<br />элементов дикора и<br />апельсиновая паста!",
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
  el = el + 1;
  el > 5 ? (el = 0) : false;
  mobileFun();
}

function innerRight() {
  el = el - 1;
  el < 0 ? (el = 5) : false;
  mobileFun();
}

function mobileFun() {
  let divIsSliderAdd = `
    <div id="btnLeft" onclick="innerLeft()"></div>
    <div id="btnRight" onclick="innerRight()"></div>
    <div id="cake-2-2">
      <img src=${slider[el].img} />
      <h2>${slider[el].h2}</h2>
      <h3>${slider[el].h3}</h3>
    </div>`;

  const divUpForAddSlider = document.getElementById("my-cake-line-2");
  divUpForAddSlider.innerHTML = divIsSliderAdd;
}
function desktopFun() {
  let divIsSliderAdd = `
    <div id="cake-2-1">
      <img src="images/catalog/cake/cake-2-1.jpg" />
      <h2>Торт с бисквитной начинкой</h2>
      <h3>
        Торт “Манго-маракуйя”,<br />
        шоколадный бисквит, три вида<br />
        шоколадного мусса, зефир с<br />
        добавлением манго и маракуйи!
      </h3>
    </div>
    <div id="cake-2-2">
      <img src="images/catalog/cake/cake-2-2.jpg" />
      <h2>Торт из фруктов</h2>
      <h3>Торт “Тещно бесквитный”,<br />пряно-морковный бисквит,<br />апельсиновый курд и<br />клубничный конфитюр!</h3>
    </div>
    <div id="cake-2-3">
      <img src="images/catalog/cake/cake-2-3.jpg" />
      <h2>Торт из крема</h2>
      <h3>
        Торт “Молочная девочка”,<br />
        сырно-сметанный крем, пара<br />
        элементов дикора и<br />
        апельсиновая паста!
      </h3>
    </div>`;
  const divUpForAddSlider = document.getElementById("my-cake-line-2");
  divUpForAddSlider.innerHTML = divIsSliderAdd;
}
