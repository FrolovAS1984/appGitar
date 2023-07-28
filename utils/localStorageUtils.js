class LocalStorageUtil {
    constructor() {
        this.keyName = 'products'
    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName); // получаем элемент из локального хранилища
        if (productsLocalStorage !==null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts (id) {
        let products = this.getProducts();
        let pushProduct = false; // проверка флагом добавляемого элемента
        const index = products.indexOf(id);// если элемента нет в массиве возвращает "- 1"
        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index,1);

        }
        localStorage.setItem(this.keyName,JSON.stringify(products)); // Добавляем элемент в локальное хранилище

        return {
            pushProduct: pushProduct,   // если ключ совпадает с значение, то можно использовать короткую запись { pushProduct, products }
            products: products
        }
    }
}
const localStorageUtil = new LocalStorageUtil();

