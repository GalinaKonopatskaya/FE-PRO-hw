function JokeView(container, button, select) {
    this.container = container;
    this.nextBtn = button;
    this.categorySelect = select;
}


JokeView.prototype.renderJoke = function ({ iconUrl, value }) {
    const fragment = document.createDocumentFragment();
    const img = this.getElement("img", { src: iconUrl })
    fragment.append(img);

    const p = this.getElement("p");
    p.innerText = value;
    fragment.append(p);

    this.container.append(fragment);
}

JokeView.prototype.getElement = function (tagName, options) {  // {src: "fgfg", styles: "opo" }
    const $el = document.createElement(tagName);
    if (options) {
        Object.keys(options).forEach(attrName => {
            $el.setAttribute(attrName, options[attrName])
        })
    }
    return $el;
}

JokeView.prototype.renderCategories = function (categories) { //["animal", "history"..]
    const fragment = document.createDocumentFragment();
    // curentCategory from LS

    let category_ls = localStorage.getItem("optionValue");
    categories.forEach(el => {
        const $option = (category_ls === el ?
            this.getElement("option", { "value": el, "selected": true })
            :
            this.getElement("option", { "value": el })
        );

        $option.innerText = el;
        fragment.append($option);
    })
    this.categorySelect.append(fragment);
}



// TODO Remove this sh......!
JokeView.prototype.clearContainer = function (el) {
    this.container.innerText = "";
}



JokeView.prototype.bindEvent = function (handler) { // body of the function
    this.nextBtn.addEventListener("click", handler)
}

JokeView.prototype.bindOption = function (handler) {
    this.categorySelect.addEventListener("change", handler)
}


// TODO:
// renderNextValue(nextValue) {....}