function JokeController (model, view) { // {model, view }
    this.model = model;
    this.view = view;
}


JokeController.prototype.init = function (url) {
    this.model.onLoad(url)
        .then(() => {
            console.log(this.model);

            //TODO: replace by this.model.getData()
            this.view.renderJoke(this.model)}
        )
        .catch(err => console.log("Failed to fetch joke", err) )
}

