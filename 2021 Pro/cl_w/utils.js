function getUrl(baseUrl) {
    //getCategory from LS
    let url = baseUrl;
    let category = localStorage.getItem("optionValue");
    if (category) {
        url += `?category=${category}`;
    }
    return url
}