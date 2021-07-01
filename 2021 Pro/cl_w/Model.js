
function JokeModel() {
        this.id = null;
        this.value = null;
        this.iconUrl = null;

}
// let model = new JokeModel() // {id: null, value: null, iconUrl: null}


JokeModel.prototype.onLoad  = function (url) {
        return fetch(url)

        .then(res => res.json())
        .then(({id, icon_url, value }) => {
                this.id = id;
                this.value = value;
                this.iconUrl = icon_url;
                console.log("Done")
        })
        .catch(err => console.log("Err in fatch", err))
}

// TODO: implement getData() =>  {value, iconUrl}
