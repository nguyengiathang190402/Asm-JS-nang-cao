import { reRender } from "../utils/rerender";

const Nav = {
    render() {
        return /* html */`
        <nav class="flex items-center justify-between">
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">Tin tức</a></li>
                <li><a href="/products" class="block py-3 px-4 text-white hover:bg-blue-500">Sản phẩm</a></li>
                <li><a href="/contact" class="block py-3 px-4 text-white hover:bg-blue-500">Liên hệ</a></li>

            </ul>
            ${localStorage.getItem('user') ? `<ul class="flex">
            <li class="flex items-center">Xin chao <span class="block py-3 px-4 text-white" id="email">datlt</span></li>
            <li><a class="block py-3 px-4 text-white hover:bg-blue-500" id="logout">Logout</a></li>
        </ul>`: `    <ul class="flex">
        <li><a href="/signin" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng nhập</a></li>
        <li><a href="/signup" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng ký</a></li>
        </ul>
        `}
            
        </nav>`;
    },
    afterRender(){
        const email = document.querySelector('#email');
        const logout = document.querySelector('#logout');
        if(email){
            email.innerHTML = JSON.parse(localStorage.getItem('user')).email;
        }
        if(logout){
            logout.addEventListener('click', function(){
                localStorage.removeItem('user');
                reRender(Nav, "#main-menu");
            });
        }
        
    }
};
export default Nav;