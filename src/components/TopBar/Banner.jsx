import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const messages = [
    "20% DISCOUNT ON ALL PRODUCTS",
    "¡FAIR PRICES!",
    "MEMBERS WEEK BEGINNING ✨",
  ];

  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState(messages[index]);

  useEffect(() => {
    // puedo cambiar el mensaje cada 3 minutos automaticamente 
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);


    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cuando el índice cambia, actualiza el mensaje
    setMessage(messages[index]);
  }, [index]);

  return (
    <Link to="/cart" className="block">
    <div className="bg-black text-white py-2 text-center overflow-hidden font-AdihausDIN text-sm">
      <div className="marquee">
        {message}
      </div>
    </div>
    </Link>

  );
};

export default Banner;
