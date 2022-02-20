import Nav from "./nav";
import Footer from "./footer";

const Header = {
    render() {
        return /* html */`
        
        ${Nav.render()}
       
        `;
    },
    afterRender(){
      Nav.afterRender();
    }
};
export default Header;