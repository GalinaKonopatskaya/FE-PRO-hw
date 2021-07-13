class JokeCntr {
        constructor(model, view) {
                this.model = model;
                this.view = view;
        }

        init(url) {

                this.model.onLoad(url)
                        .then(() => {
                                //console.log(this.model);

                                //TODO: replace by this.model.getData()

                                this.view.renderJoke(this.model.getData())
                        }
                        )
                        .catch(err => console.log("Err in fatch", err))


        }
}
