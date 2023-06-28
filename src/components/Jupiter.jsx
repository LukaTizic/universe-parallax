import { Parallax } from "react-parallax";
import imgFour from "../assets/jupiter.jpg";

const Jupiter = () => (
  <Parallax
    className='min-h-[100vh]  '
    blur={0}
    bgImage={imgFour}
    strength={800}
  ></Parallax>
);

export default Jupiter;
