import "../style/header.css";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between h-full items-center">
      <div>Logo</div>
      <div className="w-1/2">
        <ul className="flex justify-around h-10 w- full font-bold uppercase">
          <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer h-full">
            Inicio
          </li>
          <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer">
            Sobre mi
          </li>
          <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer">
            Proyectos
          </li>
          <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer">
            Experiencia
          </li>
          <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer">
            Contacto
          </li>
        </ul>
      </div>
    </div>
  );
}
