import React from "react";
import TypeIt from "typeit-react";
import  {data} from "../data"
import { useState } from "react";


function Home() {
  
  const [instance, setInstance] = useState(null);

  const toggleFreeze = () => {
    if (instance.is("frozen")) {
      instance.unfreeze();
      setButtonText("Freeze");
      return;
    }

    instance.freeze();
    setButtonText("Unfreeze");
  };
  console.log(data)
  return (
    <div className="flex">
      <div className="container mx-auto">
        <img className="w-full" src="/avatar.png" />
      </div>
      <div className="flex flex-col justify-content: center items-center">
        <div>
          <h1 className="text-7xl p-2">
            Hola! Soy {data.name} <br />
            <button onClick={toggleFreeze} className="bg-cyan-400 rounded-md">
              <div  className="flex justify-center items-center m-1">
                <div className="p3">
                  <TypeIt
                    options={{
                      loop: false,
                      speed: 150,
                    }}
                    getAfterInit={(instance) => {
                      setInstance(instance);
                      return instance;
                    }}
                  >
                    {data.dev}
                  </TypeIt>
                </div>

              </div>
            </button>
          </h1>
        </div>

        <div className="container">
          <p className="text-center text-2xl">
            {data.description}
          </p>
        </div>

        <div>
          <a href="/cv.pdf" download="CV-Jhon-Betancourth.pdf"><button className="m-10 w-40 h-16 bg-cyan-400 rounded-3xl font-medium">Descargar CV</button></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
