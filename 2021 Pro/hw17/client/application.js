const params = {
        method: "POST",
        body: {
                name: "Galina",
        }
}

fetch("http://localhost:3322/index", params)
        .then(res => res.json())
        .then(res => console.log("Response: ", res))