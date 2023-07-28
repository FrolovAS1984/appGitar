function render () {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
    productsPage.render();

}
spinnerPage.render();
let CATALOG = [];

fetch('server/catalog.json') // запрашиваем JSON с нашего так называемого сервера с помощью AJAX запроса ;
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        },1000)
        // spinnerPage.handleClear();
        // render();
    })
    .catch(error =>{
        spinnerPage.handleClear()
        errorPage.render();
    });
