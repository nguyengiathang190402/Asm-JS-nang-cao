import axios from 'axios';
import { reRender } from '../../../utils/rerender';
import { getAll, remove } from '../../../api/posts';

const AdminPost = {
    async render() {
        const { data } = await getAll();
        
        return /* html */`
        <div class="max-w-5xl mx-auto"> 
            <div class="my-3">
                <img src="https://picsum.photos/1024/400" />
            </div>
            <div class="news">
                <h2>Quản lý tin tức</h2>
                <table>
                    <tbody>
                        ${data.map((post, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${post.title}</td>
                                <td>
                                    <button data-id="${post.id}" class="btn">Remove</button>
                                </td>
                            </tr>
                        `).join("")}    
                    </tbody>
                </table>
                
            </div>
        </div>
        `;
    },
    afterRender(){
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function(){
                const confirm = window.confirm("Bạn có chắc chắn không??");
                if(confirm){
                    remove(id).then(() => {
                        reRender(AdminPost, '#content');
                    })
                }
            })
        });
    }
};

export default AdminPost;