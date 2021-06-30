
function JokeModel () {
    this.id = null;
    this.value = null;
    this.iconUrl = null;
}


// let model = new JokeModel() // {id: null, value: null, iconUrl: null}

JokeModel.prototype.onLoad = function (url) {
    return fetch(url)
        .then(res => res.json())
        .then(({ id, icon_url, value }) => {
          this.id = id;
          this.iconUrl = icon_url;
          this.value = value;
          console.log("Done");
        })
        .catch(err => console.log("Error in fetch", err))
}

// TODO: implement getData() =>  {value, iconUrl}