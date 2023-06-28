import { Parallax } from "react-parallax";
import imgThree from "../assets/spacesuit.jpg";

const Spacesuits = () => (
  <Parallax
    className='min-h-[100vh]  '
    blur={0}
    bgImage={imgThree}
    strength={900}
  >
    <div className='flex justify-center mt-10'>
      <h1 className='uppercase   text-slate-200 text-5xl bg-[#4c698f] p-3 rounded'>
        WE DID IT!
      </h1>
    </div>
  </Parallax>
);

export default Spacesuits;
