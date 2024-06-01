import React from "react";
// import { Flex, Progress } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
function About({ about, description, techs }) {
  return (
    <div className="container flex flex-col">
      <div className="flex">
        <div className="flex justify-center flex-col items-center	">
          <div className="pt-9">
            <h2 className="uppercase text-5xl text-center">{about}</h2>
          </div>
          <div>
            <p className="pt-10 text-center text-2xl font-normal">
              {description}
            </p>
          </div>
        </div>

        <div>
          <img src="/3d.png" />
        </div>
      </div>

      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <h2 className="uppercase text-5xl text-center">Tecnologias</h2>
        <div className="flex justify-around flex-wrap">
          {techs.map((tech) => (
            <div className="m-10">
              <p className="text-center uppercase">{tech.name_tech}</p>
              <div>
                <img className="w-24 h-24" src={tech.img} alt={tech.alt} />
                {/* <Flex gap="small" vertical>
                  <Progress percent={tech.percent} />
                </Flex> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
