"use client";
import style from "./signup.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";

export default function Message() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db,'messages'),{
       name:name,
       message:message,
        timestamp:new Date(),
      }) 
      alert("message is being updated" ) 
        router.push("/")

     
      
    } catch (error) {
      console.log("error in this",error)
      
    }
  
  };

  return (
    <div className={style.container}>
      <div className={style.login}>
        <h1 className={style.heading}>Your Message</h1>
    
        <div>
          <p className={style.text}>Country Code</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={style.form}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your country code"
            ></input>
        {/* Message */}
        <div>
          <p className={style.text}>Message</p>
        </div>
        <div>
            <textarea
              type="text"
              className={style.form2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your Message"
            ></textarea>
            </div>
          <div className={style.button}>
            <button type="submit" className={style.Button}>Send</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
