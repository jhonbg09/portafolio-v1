import React from "react";
import { Collapse } from "antd";
import {descrip_1} from "../data"


// const descrip_1 = `
//   Prueba 1
// `

// const descrip_2 = `
//   Prueba 2
// `
const items = [
  {
    key: '1',
    label: 'AdoptaAPP Marzo - Mayo',
    children: (
      <div>
      <p>{descrip_1}</p>
      <a href="URL_DESEADA">Enlace a más información</a>
    </div>
    )
  },

  {
    key: '2',
    label: 'AdoptaAPP',
    children: <p>{descrip_1}</p>,
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
      <div>
      <Collapse items={items} onChange={onChange} />
      </div>
    </div>
  );
}

export default Experience;
