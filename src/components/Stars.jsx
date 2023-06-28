import { Parallax } from "react-parallax";
import imgThree from "../assets/stars.jpg";

const Stars = () => (
  <Parallax
    className='min-h-[100vh]  '
    blur={0}
    bgImage={imgThree}
    strength={900}
  ></Parallax>
);

export default Stars;
