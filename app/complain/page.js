"use client";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Signup() {
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
console.log(email,number,description)
  };

  const router = useRouter();
  const moveon = () => {
    router.push("/");
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.login} >
          <h1 className={style.heading}>Complaints</h1>
          {/* name */}
          <div>
            <p className={style.text}>Name</p>
          </div>
          <div>
            <form>
              <input
                type="name"
                className={style.form}
                value={number}
                onChange={(e) => setnumber(e.target.value)}
                required
                placeholder="Enter your Name"
              ></input>
            </form>
          </div>
          {/* email */}
       

          <div>
            <p className={style.text}>Message</p>
          </div>
          <div>
            <form>
              <textarea
                type="email"
                className={style.form2}
                placeholder="Enter your Mwssage"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </form>
          </div>

          <div className={style.button1}>
            <button onClick={handleSubmit} className={style.Button}>Submit</button>
          </div>
          
          <div className={style.signup}>
            <span className={style.text2}>You have any issue contact us</span>
            <span className={style.signuptext} >
            More Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
