import { get } from "../../api/products";
import { addToCart } from "../../utils/cart";
import { $ } from "../../utils/selector";

const ProductDetailPage = {
    async render(id) {
        const { data } = await get(id);
        return `<div class="max-w-5xl mx-auto">
            <h1>${data.name}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
            <p>${data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
            <p>
                <input type="number" id="inputValue"/>
                <button id="btnAddToCart" class="inline-block px-4 py-3 bg-indigo-500 text-white">
                    Add To cart
                </button>
            </p>
        </div>`;
    },
    afterRender(id){
        $('#btnAddToCart').addEventListener('click', async function(){
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: $("#inputValue").value ? $("#inputValue").value : 1})
        })
    }
};
export default ProductDetailPage;




