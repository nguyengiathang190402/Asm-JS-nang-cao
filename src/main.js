import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import AdminPost from "./pages/admin/news";
import AddPost from "./pages/admin/news/add";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/products/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/admin/dashboard";





const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.getElementById("content").innerHTML = await content.render(id);

  if(content.afterRender) content.afterRender(id);
};


router.on('/admin/*/',  () => {
  console.log('truy cap duong dan admin/*')
}, {
  before(done, match) {
      if(localStorage.getItem('user')){
        const userId = JSON.parse(localStorage.getItem('user')).id;
        if(userId == 1){
            done();
        } else {
            document.location.href="/"
        }
      } else{
        document.location.href="/"
      }
    
  },
});

router.on({
  "/": () => {
    print(HomePage);
  },
  "/about": () => {
    print(AboutPage);
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(NewsDetail, id);
  },
  "/products": () => print(ProductsPage),
  "/products/:id": ({ data }) => {
    const { id } = data;
    print(ProductDetailPage, id);
  },
  "/admin/news": () => print(AdminPost),
  "/admin/dashboard": () => print(Dashboard),
  // "/admin/news": () => print(Dashboard),
  // "/admin/product": () => print(Dashboard),


  "/admin/news/add": () => print(AddPost),
  "/signup": () => print(Signup),
  "/signin": () => print(Signin)
});

router.resolve();

