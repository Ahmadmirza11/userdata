
"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Messages = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("signup");
  };

  const handleNavigation2 = () => {
    router.push("message");
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const messagesArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesArray);
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         marginBottom:22,
        }}
      >
        <button  
          onClick={handleNavigation2}
          style={{
            width: 100,
            height: 40,
            borderWidth: 2,
            backgroundColor: "white",
            borderRadius: 11,
            color: "red",
            fontSize: 17,
            cursor: "pointer",
          }}
        >
          Message
        </button>

        <input
          style={{
            width: 160,
            height: 40,
            borderWidth: 0,
            borderRadius: 13,
            padding: 9,
          }}
          type="search"
          placeholder="Cuntorycode"
        ></input>
        <button
          onClick={handleNavigation}
          style={{
            width: 100,
            height: 40,
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 11,
            backgroundColor: "red",
            color: "white",
            fontSize: 17,
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>


      
      <div className="flex flex-col items-center justify-center  ">

        <div className="p-8 rounded-2xl shadow-2xl max-w-2xl w-full h-full">
          {messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className="mb-6 p-6 bg-white rounded-lg shadow-inner max-h-40 "
              >
                <div className="mb-2">
                  <span className="font-bold text-gray-700">StateCode: </span>
                  <span className="text-gray-900">{message.name}</span>
                </div>
                <div className="mb-2">
                  <span className="font-bold text-gray-700">Message: </span>
                  <span className="text-gray-900">{message.message}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Time: </span>
                  <span className="text-gray-900">
                    {new Date(
                      message.timestamp.seconds * 1000
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xl text-center text-gray-700">
              No messages found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
