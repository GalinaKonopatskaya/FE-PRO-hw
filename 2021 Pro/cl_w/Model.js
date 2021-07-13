// 1 url -2
// categories - data
// invoke() categories fetch


function JokeModel({ url, categoryUrl }) {
        this.id = null;
        this.value = null;
        this.iconUrl = null;
        this.url = url;
        this.categoryUrl = categoryUrl;
        this.categoties = null
}


// let model = new JokeModel() // {id: null, value: null, iconUrl: null}

JokeModel.prototype.onLoad = function () {
        return fetch(this.url)
                .then(res => res.json())
                .then(({ id, icon_url, value }) => {
                        this.id = id;
                        this.iconUrl = icon_url;
                        this.value = value;
                        console.log("Done");
                })
                .catch(err => console.log("Error in fetch", err))
}

JokeModel.prototype.getCategories = function () {
        return fetch(this.categoryUrl)
                .then(res => res.json())
                .then(res => {
                        this.categoties = res;
                })
                .catch(err => console.log("Error in fetch", err))

}

// TODO: implement getData() =>  {value, iconUrl}
JokeModel.prototype.getData = function () {
        return {
                value: this.value,
                iconUrl: this.iconUrl,
        }
}

JokeModel.prototype.getCategoriesValue = function () {
        return this.categoties;
}

JokeModel.prototype.getNextJoke = function () {
        return fetch(getUrl(this.url))
                .then(res => res.json())
                .then(({ id, icon_url, value }) => {
                        this.id = id;
                        this.iconUrl = icon_url;
                        this.value = value;
                        console.log("Done");
                })
                .catch(err => console.log("Error in fetch", err))
}