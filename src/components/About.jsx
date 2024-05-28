import React from "react";

function About({ about, description }) {
  return (
    <div className="flex">
      <div className="flex justify-center flex-col items-center	">
        <div className="pt-10">
          <h2 className="uppercase text-5xl text-center">{about}</h2>
        </div>
        <div>
          <p className="pt-10 text-center text-2xl font-normal" >{description}</p>
        </div>
      </div>

      <div>
        <img src="/public/3d.png"/>
      </div>
    </div>
  );
}

export default About;
