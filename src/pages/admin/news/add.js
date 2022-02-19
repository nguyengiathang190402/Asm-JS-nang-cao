import axios from "axios";
import { add } from "../../../api/posts";

const AddPost = {
    render(){
        return /*html*/`
            <form id="formAddPost">
                <input type="text" id="title-post" class="border border-black" placeholder="Title" /><br />
                <input type="file" id="img-post" class="border border-black" placeholder="Title" /><br />
                <textarea name="" id="desc-post" class="border border-black" cols="30" rows="10"></textarea><br />
                <button>Tạo bài viết</button>
            </form>
        `
    },
    afterRender(){
        const formAddPost = document.querySelector('#formAddPost');
        const CLOUDINARY_PRESET_KEY = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formAddPost.addEventListener('submit', async function(e){
            e.preventDefault();

            const file = document.querySelector('#img-post').files[0];

            // lấy giá trị của file và gán vào object formData
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_PRESET_KEY);

            // call API cloudinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            })

            // call api thêm bài viết
            add({
                title: document.querySelector('#title-post').value,
                img: data.url,
                desc: document.querySelector('#desc-post').value,
            });
        })
    }
}
export default AddPost;