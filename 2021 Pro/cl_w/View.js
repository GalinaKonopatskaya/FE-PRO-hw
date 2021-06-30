
function JokeView(container, button) {
        this.container = container;
        this.el = button;
}

jockView.prototype.renderJoke = function ({ iconUrl, value }) {
        const fragment = document.createDocumentFragment();
        const img = this.getElement("img", { src: iconUrl })
        fragment.append(img);

        const p = this.getElement("p");
        p.innerText = value;
        fragment.append(p);

        this.container.append(fragment);
}

JokeView.prototype.getElement = function (tagName, options) {
        const $el = document.createElement(tagName);
        if (options) {
                Object.keys(options).forEach(attrName => {
                        $el.setAttrribute(attrName, options[attrName])
                })
        }
        return $el;
}