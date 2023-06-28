import { Parallax } from "react-parallax";
import imgOne from "../assets/space1.jpg";

const Hero = () => (
  <Parallax
    className='min-h-[100vh]  '
    blur={0}
    bgImage={imgOne}
    strength={800}
  >
    <div className='flex justify-center items-center w-[100%] h-[100%] mt-11'>
      <h1 className='uppercase text-slate-200 text-5xl bg-[#4c698f] p-3 rounded'>
        Facts about universe
      </h1>
    </div>
  </Parallax>
);

export default Hero;
