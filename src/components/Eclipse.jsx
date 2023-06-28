import { Parallax } from "react-parallax";
import imgTwo from "../assets/moon.jpg";

const Eclipse = () => (
  <Parallax
    className='min-h-[100vh]  '
    blur={0}
    bgImage={imgTwo}
    strength={800}
  ></Parallax>
);

export default Eclipse;
