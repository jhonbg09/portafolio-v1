import React from "react";
import { Collapse, Button, Flex } from "antd";
import { descrip_1, descrip_2, descrip_3 } from "../data";

// const descrip_1 = `
//   Prueba 1
// `

// const descrip_2 = `
//   Prueba 2
// `
const items = [
  {
    key: "1",
    label: "AdoptaAPP (Marzo - Mayo) 2024",
    children: (
      <div className="flex">
        <div className="w-1/2">
          <img className="w-auto" src="/adoptapp.png" />
        </div>
        <div className="w-1/2">
          <p className="text-xl">{descrip_1}</p>
          <Flex gap="small" wrap>
            <a href="https://adoptapp-blue.vercel.app/">
              <Button type="primary">Enlace al proyecto</Button>
            </a>
          </Flex>
        </div>
      </div>
    ),
  },

  {
    key: "2",
    label: "Almacenes Brissa (Enero - Febrero) 2024",
    children: (
      <div className="flex">
        <div className="w-1/2">
          <img className="w-auto px-4" src="/brissa.png" />
        </div>
        <div className="w-1/2">
          <p className="text-xl">{descrip_2}</p>
          <Flex gap="small" wrap>
            <a href="https://www.almacenesbrissa.com.co/">
              <Button type="primary">Enlace al proyecto</Button>
            </a>
          </Flex>
        </div>
      </div>
    ),
  },

  {
    key: "3",
    label: "E-PARTNER (Septiembre - Diciembre) 2021",
    children: (
      <div className="flex">
        <div className="w-1/2">
          <img className="w-auto px-4" src="/lerner.png" />
        </div>
        <div className="w-1/2">
          <p className="text-xl">{descrip_3}</p>
          <Flex gap="small" wrap>
            <a href="https://www.librerialerner.com.co/">
              <Button type="primary">Enlace al proyecto</Button>
            </a>
          </Flex>
        </div>
      </div>
    ),
  },
];

function Experience({}) {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div>
        <h2 className="uppercase text-5xl text-center mt-16">experiencia</h2>
      </div>
      <div className="p-20">
        <Collapse items={items} onChange={onChange} />
      </div>
    </div>
  );
}

export default Experience;
