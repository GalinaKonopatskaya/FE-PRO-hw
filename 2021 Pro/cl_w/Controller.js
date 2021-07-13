function JokeController(model, view) { // {model, view }
        this.model = model;
        this.view = view;
}


JokeController.prototype.init = function () {
        var self = this;
        this.model.onLoad()
                .then(() => {

                        //TODO: replace by this.model.getData()
                        this.view.renderJoke(this.model.getData())
                }
                )
                .catch(err => console.log("Failed to fetch joke", err))
        this.model.getCategories()
                .then(() => {
                        this.view.renderCategories(this.model.getCategoriesValue())
                })
        this.view.bindEvent(this.nextCLickHandler.bind(this))
        this.view.bindOption(this.selectedOption.bind(this))
}


JokeController.prototype.nextCLickHandler = function () {
        this.model.getNextJoke()
                .then(() => {
                        this.view.clearContainer();
                        this.view.renderJoke(this.model.getData())
                })
}

JokeController.prototype.selectedOption = function (e) {
        console.log(e.target.value);
       // const currentOption = e.target.value;
        localStorage.setItem('optionValue', e.target.value);
       // this.model.option = e.target.value;
        
}
