import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <ul className="flex justify-around w-96 h-10 font-bold uppercase">
        <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer">Inicio</li>
        <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer">Sobre mi</li>
        <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer">Proyectos</li>
        <li className="hover:bg-cyan-400 flex items-center justify-center rounded-md px-2 cursor-pointer">Contacto</li>
      </ul>
    </div>
  );
}
