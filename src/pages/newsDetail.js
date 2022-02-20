import { get } from "../api/posts";
import Header from '../components/header';
import Banner from '../components/banner';

const NewsDetail = {
    async render(id) {
        const { data } = await get(id);
        return `
        <body class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"> 
        <nav id="header" class="w-full z-30 top-0 py-1"> 
            <div id="header">
                ${Header.render()}
            </div>
            <div class="my-3">
                ${Banner.render()}
            </div>
            <div class="news">
            <div class=" container mx-auto items-center justify-between">
            <h2 class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">Sản Phẩm </h2>
        
        <div class="max-w-5xl mx-auto">
        
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
        </div>`;
    },
};
export default NewsDetail;