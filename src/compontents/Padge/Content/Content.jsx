import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import axios from "axios";
// https://linked-posts.routemisr.com/users/signup
function Content () {
    const {register, handleSubmit} = useForm();
 const hendelData = async (data)=> {
      try {
        await axios("https://linked-posts.routemisr.com/users/signup", {
            method:"POST",
            data,
            
        })
        localStorage.setItem("token", data?.token);
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <>
        <div className="content">
            <div className="container">
                <div className="text-content">
                    <h2>conatct section</h2>
                          <div className="star-icon">
                 <i className="fa-solid fa-star"></i>
              </div>
              </div>

                <form onSubmit={handleSubmit(hendelData)}>
<div className="input">
    <input type="text" name="name" id="name" required {...register("name")} />
    <label htmlFor="name">UserName</label>
</div>
<div className="input">
    <input type="email" name="email" id="email" required {...register("email")}/>
    <label htmlFor="email">UserEmail</label>
</div>
<div className="input">
    <input type="password" name="password" id="password" required {...register("password")}/>
    <label htmlFor="password">password</label>
</div>
<div className="input">
    <input type="password" name="rePassword" id="rePassword" required {...register("rePassword")}/>
    <label htmlFor="rePassword">rePassword</label>
</div>
<div className="input">
    <input type="date" name="dateOfBirth" id="dateOfBirth" required {...register("dateOfBirth")}/>
</div>
<div className="input">
    <select {...register("gender")} className="w-100 gender">
        <option value={"male"}>male</option>
        <option value={"female"}>female</option>
    </select>
</div>
<button type="submit" className="btn  me-auto ">Send Message</button>
                </form>
              </div>
                </div>
            <Footer/>
        </>
    )
}
export default Content;