import { signup } from "../api/user";
import { $ } from "../utils/selector";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signup = {
    render(){
        return `
            <style>
    body {background:white !important;}
</style>
<div class= "main w-max m-auto mt-10">
  
  <div class="register">
      <h2 class="text-2xl mb-6">Register</h2>
      <form id="formSignup">
      <div class="display_name flex border rounded text-gray-500 mb-4">
        <input class="outline-none px-4 h-full py-2 text-lg" type="text" placeholder="Full name" />
      </div>
 
      <div class="email flex border rounded text-gray-500 mb-4">
        <input class="outline-none px-4 h-full py-2 text-lg" id="email" type="email" placeholder="Email" />
      </div>

      <div class="password flex border rounded text-gray-500 mb-4">
        <input class="outline-none px-4 h-full py-2 text-lg" id="password" type="password" placeholder="Password" />
      </div>
      
      <div class="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
        <div class="wrapper flex w-max mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
          <button class="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent">Register</button>
        </div>
      </div>
      </form>
  </div>
</div>
        `
    },
    afterRender(){
        $('#formSignup').addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: $('#email').value,
                    password: $('#password').value,
                    
                });
                toastr.success("Đăng ký thành công")
                if(data){
                    setTimeout(function(){
                        document.location.href="/signin"
                    },2000);
                }
                
            } catch (error) {
                toastr.error(error.response.data)
                $('#formSignup').reset()
            }
           

        })
    }
}
export default Signup;