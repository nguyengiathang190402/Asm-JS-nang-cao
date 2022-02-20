import axios from 'axios';
import { getAll } from '../../api/products';
import Header from '../../components/header';
import Banner from '../../components/banner';


const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <body class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"> 
        <nav id="header" class="w-full z-30 top-0 py-1"> 
            <div id="header">
                ${Header.render()}
            </div>
            <div class="my-3">
                ${Banner.render()}
            </div>
            <div class="news">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <h2 class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">Sản Phẩm </h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/products/${post.id}">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a  href="/products/${post.id}"class="font-semibold text-lg text-orange-500">${post.name}</a></h3>
                            <p>${post.desc}</p>
                            <p>${post.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};

export default ProductsPage;