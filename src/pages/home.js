import axios from 'axios';
import { getAll } from '../api/posts';
import Header from '../components/header';
import Banner from '../components/banner';



const HomePage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <body class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"> 
        <nav id="header" class="w-full z-30 top-0 py-1">
            <div>
                ${Header.render()}
            </div>
            <div class="carousel relative container mx-auto" style="max-width:1600px;">
            <div class="carousel-inner relative overflow-hidden w-full">
                ${Banner.render()}
            </div>
            </div>
            <div class="news">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <h2 class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">Sản Phẩm </h2>
                <div class="flex items-center" id="store-nav-content">

                        <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                            </svg>
                        </a>

                        <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                            </svg>
                        </a>

                    </div>
                <section class="bg-white py-8">
                <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/news/${post.id}">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a  href="/news/${post.id}"class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
        </body>
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};

export default HomePage;

