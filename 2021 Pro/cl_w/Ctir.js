function JokeCntr(model, view) {
        this.model = model;
        this.view = view;
}

JokeCntr.prototype.init = function (url) {
        this.model.onLoad (url)
                .then(() => {
                        console.log(this.model);
                        this.view.renderJoke(this.model)}
                )
                .catch(err => console.log("Err in fatch", err))
                

}
