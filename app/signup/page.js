"use client";
import PhoneInput from "@/components/input";
import style from "./signup.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Signup() {
  const [countryCode, setCountryCode] = useState("");

  const countries = [
    { name: "United States", code: "+3" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    // Add more countries and their codes as needed
  ];

  const [email, setemail] = useState("");

  const handleSubmit = () => {
    console.log(email, number);
  };

  const router = useRouter();
  const moveon = () => {
    router.push("/");
  };
  return (
    <div className={style.container}>
      <div className={style.login}>
        <h1 className={style.heading}>Subscribe</h1>

        <div>
          <p className={style.text}>Phone Number</p>
          <PhoneInput />
        </div>
        
        <div>
          <p className={style.text}>STATE Code</p>
        </div>
        <div>
          <form>
            <input
              type="number"
              className={style.form}
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              placeholder="Enter your Statecode"
            ></input>
          </form>
        </div>

        <div className={style.button}>
          <button onClick={moveon} className={style.Button}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
