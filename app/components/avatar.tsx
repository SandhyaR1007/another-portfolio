import Image from "next/image";
import headerImg from "../assets/face1.png";

const Avatar = () => {
  return <Image width={600} className="h-full " src={headerImg} alt="Avatar" />;
};

export default Avatar;
