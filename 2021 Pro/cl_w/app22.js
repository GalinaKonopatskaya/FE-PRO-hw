// Добавить в приложение следующий функционал:

// при выборе категории:

// выбранная категория сохраняется в localStorage,
// запрашиваются данные для шутки согласно выбранной категории
// рендерится новая шутка на UI (полученная в предыдущем пункте)


// если в localStorage есть категория то:

// инициализация и запрос первой шутки происходит по категории
// рендеринг селекта категорий происходит таким образом чтоб в селекте 
// была уже выбрана категория хранящаяся в localStorage



const $cont = document.querySelector(".content");
//const $joke_text = document.querySelector(".content > p");
const $btn = document.querySelector(".next")
const $categorySelect = document.querySelector("#categories");

const URL = "https://api.chucknorris.io/jokes/random"
const CATEGORY_URL = "https://api.chucknorris.io/jokes/categories"

const initModelOption = {
        url: URL,
        categoryUrl: CATEGORY_URL
};

const model = new JokeModel(initModelOption);
const view = new JokeView($cont, $btn, $categorySelect)
const ctr = new JokeController(model, view);

ctr.init();

