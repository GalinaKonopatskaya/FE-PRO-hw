const $cont = document.querySelector(".content");
const $btn = document.querySelector(".next")
const URL = "https://api.chucknorris.io/jokes/random"


const model = new JokeModel();
const view = new JokeView($cont, $btn)
const ctr = new JokeCntr(model, view);

ctr.init(URL);