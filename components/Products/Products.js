class Products {
    constructor() {
        this.classNameActive = 'product-element__btn_active';
        this.lableAdd = 'Добавить в корзину';
        this.lableRmove = 'Удалить из корзины';
    }
    handleSetLocationStorage(element, id) {                                       // обработчик для клика по кнопке
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.lableRmove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.lableAdd;

        }
        headerPage.render(products.length);

    }
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog='';
        CATALOG.forEach(({id, name, price, img}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.lableAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.lableRmove;
            }


            htmlCatalog += `
                <li class="product-element">
                    <span class="product-element__name">${name}</span>
                    <img class="product-element__img" src="${img}">
                    <span class="product-element__price">⚡️${price.toLocaleString()} ₽</span>
                    <button class="product-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this,'${id}');">
                        ${activeText}
                    </button>                                       
                </li>    
            
            `;


        });
        const html = `
            <ul class="product-container">
                ${htmlCatalog}
            </ul>
            
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}
const productsPage = new Products();

