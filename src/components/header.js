import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-5xl mx-auto">

            <div class="bg-blue-800 py-4">
                <img src="https://picsum.photos/150/40" class="mx-auto" />
            </div>
            <div class="bg-orange-500" id="main-menu">
                ${Nav.render()}
            </div>
        </header>`;
    },
    afterRender(){
      Nav.afterRender();
    }
};
export default Header;